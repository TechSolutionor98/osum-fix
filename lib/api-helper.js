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

function formatCmsValue(val) {
  if (typeof val === 'string') {
    const hasHtml = /<[a-z][\s\S]*>/i.test(val);
    if (hasHtml) {
      return React.createElement('span', { dangerouslySetInnerHTML: { __html: val } });
    }
    
    // Decode basic HTML entities for plain text
    val = val.replace(/&amp;/g, '&')
             .replace(/&lt;/g, '<')
             .replace(/&gt;/g, '>')
             .replace(/&quot;/g, '"')
             .replace(/&#39;/g, "'")
             .replace(/&#x27;/ig, "'")
             .replace(/&nbsp;/g, ' ');
  }
  return val;
}

// Map database value over original value if present (client-safe)
export function getCmsVal(content, originalValue, sectionIdentifier) {
  let val = originalValue;

  if (content) {
    // If content is already a section with fields directly
    if (content.fields && typeof content.fields === 'object') {
      for (const field of Object.values(content.fields)) {
        if (field && field.originalValue === originalValue) {
          return formatCmsValue(field.value);
        }
      }
    }

    // If content has sections array
    if (Array.isArray(content.sections)) {
      // 1. If sectionIdentifier is specified, match that section first
      if (sectionIdentifier) {
        const targetId = String(sectionIdentifier).trim().toLowerCase();
        const matchedSection = content.sections.find(s => {
          const sId = (s.sectionId || '').toLowerCase();
          const sName = (s.sectionName || '').toLowerCase();
          return sId === targetId || sName === targetId || sId.includes(targetId) || sName.includes(targetId);
        });

        if (matchedSection && matchedSection.fields) {
          for (const field of Object.values(matchedSection.fields)) {
            if (field && field.originalValue === originalValue) {
              return formatCmsValue(field.value);
            }
          }
        }
      }

      // 2. Scan all sections: prioritize any section where value !== originalValue (updated/customized)
      let fallbackCandidate = undefined;
      for (const section of content.sections) {
        for (const field of Object.values(section.fields || {})) {
          if (field && field.originalValue === originalValue) {
            if (field.value !== undefined && field.value !== null) {
              if (field.value !== field.originalValue) {
                return formatCmsValue(field.value);
              } else if (fallbackCandidate === undefined) {
                fallbackCandidate = field.value;
              }
            }
          }
        }
      }

      if (fallbackCandidate !== undefined) {
        val = fallbackCandidate;
      }
    }
  }

  return formatCmsValue(val);
}

