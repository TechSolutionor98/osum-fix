import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Cache redirect lookups in memory to dramatically speed up page requests
const redirectCache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // Cache for 5 minutes

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("jwt")?.value;

  // 1. Admin Authentication Check
  const isProtected = pathname.startsWith("/admin") && !pathname.startsWith("/admin/login");
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // 2. SEO URL Redirects Check (skip for admin, api, static files, and paths with extensions)
  if (!pathname.startsWith("/admin") && !pathname.startsWith("/api") && !pathname.startsWith("/_next") && !pathname.includes('.')) {
    try {
      const now = Date.now();
      const cached = redirectCache.get(pathname);
      
      let data = null;
      if (cached && cached.expiry > now) {
        data = cached.data;
      } else {
        // Query the fast lookup endpoint
        const checkUrl = new URL(`/api/cms/redirect-check?path=${encodeURIComponent(pathname)}`, request.url);
        const res = await fetch(checkUrl);
        
        if (res.ok) {
          data = await res.json();
          redirectCache.set(pathname, { data, expiry: now + CACHE_TTL });
        }
      }
      
      if (data && data.redirect) {
        const destination = data.redirect.toPath;
        const statusCode = data.redirect.type === '302' ? 302 : 301;
        
        if (destination.startsWith('http://') || destination.startsWith('https://')) {
          return NextResponse.redirect(destination, statusCode);
        } else {
          return NextResponse.redirect(new URL(destination, request.url), statusCode);
        }
      }
    } catch (err) {
      // In development, Next.js intercepts console.error and shows an error overlay.
      // We use console.warn to avoid the intrusive overlay when fetch fails during server startup.
      console.warn("Middleware URL redirect lookup failed:", err);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - standard file extensions (.png, .jpg, .svg, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)",
  ],
};
