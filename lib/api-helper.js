import React from 'react';

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

// Map database value over original value if present (client-safe)
export function getCmsVal(content, originalValue) {
  let val = originalValue;
  if (content && Array.isArray(content.sections)) {
    let found = false;
    for (const section of content.sections) {
      for (const field of Object.values(section.fields || {})) {
        if (field.originalValue === originalValue) {
          val = field.value;
          found = true;
          break;
        }
      }
      if (found) break;
    }
  }

  if (typeof val === 'string') {
    const hasHtml = /<[a-z][\s\S]*>/i.test(val);
    if (hasHtml) {
      return React.createElement('span', { dangerouslySetInnerHTML: { __html: val } });
    }
  }
  return val;
}
