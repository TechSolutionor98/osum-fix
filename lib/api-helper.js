/**
 * API Base URL Helper
 * 
 * Dynamically resolves the API base URL to ensure that:
 * 1. On the client side (browser), relative paths are used so they always match the current domain/origin.
 * 2. On the server side, local development uses localhost with the correct port, while production uses the NEXT_PUBLIC_API_URL.
 */
export function getApiBase() {
  if (typeof window !== 'undefined') {
    // Client-side: use empty string so requests are relative to the current origin
    return '';
  }

  // Server-side default for client-facing props (like apiBase={apiBase})
  return process.env.NEXT_PUBLIC_API_URL || '';
}

export function getServerApiBase() {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Fallback to localhost with the running port (works for both dev and VPS prod server-to-server calls)
  const port = process.env.PORT || '3000';
  return `http://localhost:${port}`;
}
