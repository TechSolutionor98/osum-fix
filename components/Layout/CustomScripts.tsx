"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CustomScripts({ settings }: { settings: any }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    // Exclude injection on admin routes or if settings aren't loaded
    if (isAdmin || !settings) return;

    // Use a global window flag to prevent duplicate injections on SPA page transitions
    if ((window as any).customScriptsInjected) return;
    (window as any).customScriptsInjected = true;

    // Inject Custom Head Script (HTML)
    if (settings.customHeadScript) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = settings.customHeadScript;
      
      const elementsToAppend: { target: HTMLElement; element: Node }[] = [];
      Array.from(tempDiv.childNodes).forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if ((node as Element).tagName === "SCRIPT") {
            const script = document.createElement("script");
            // Copy all attributes (like src, async, defer, etc.)
            Array.from((node as Element).attributes).forEach((attr) => {
              script.setAttribute(attr.name, attr.value);
            });
            script.innerHTML = (node as Element).innerHTML;
            elementsToAppend.push({ target: document.head, element: script });
          } else {
            elementsToAppend.push({ target: document.head, element: node.cloneNode(true) });
          }
        }
      });

      elementsToAppend.forEach(({ target, element }) => {
        target.appendChild(element);
      });
    }

    // Inject Custom Body Script (HTML)
    if (settings.customBodyScript) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = settings.customBodyScript;
      
      const elementsToAppend: { target: HTMLElement; element: Node }[] = [];
      Array.from(tempDiv.childNodes).forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if ((node as Element).tagName === "SCRIPT") {
            const script = document.createElement("script");
            // Copy all attributes
            Array.from((node as Element).attributes).forEach((attr) => {
              script.setAttribute(attr.name, attr.value);
            });
            script.innerHTML = (node as Element).innerHTML;
            elementsToAppend.push({ target: document.body, element: script });
          } else {
            elementsToAppend.push({ target: document.body, element: node.cloneNode(true) });
          }
        }
      });

      elementsToAppend.forEach(({ target, element }) => {
        target.appendChild(element);
      });
    }

    // Inject Dynamic Third-Party Apps Scripts (HTML)
    if (settings.thirdPartyApps && Array.isArray(settings.thirdPartyApps)) {
      settings.thirdPartyApps.forEach((app: any) => {
        if (!app.script) return;
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = app.script;
        
        const elementsToAppend: { target: HTMLElement; element: Node }[] = [];
        Array.from(tempDiv.childNodes).forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if ((node as Element).tagName === "SCRIPT") {
              const script = document.createElement("script");
              // Copy all attributes
              Array.from((node as Element).attributes).forEach((attr) => {
                script.setAttribute(attr.name, attr.value);
              });
              script.innerHTML = (node as Element).innerHTML;
              elementsToAppend.push({ target: document.body, element: script });
            } else {
              elementsToAppend.push({ target: document.body, element: node.cloneNode(true) });
            }
          }
        });

        elementsToAppend.forEach(({ target, element }) => {
          target.appendChild(element);
        });
      });
    }
  }, [settings, isAdmin]);

  return null;
}
