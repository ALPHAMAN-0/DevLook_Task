import { useEffect, useRef, useState } from "react";

const normalizeBase = (value) => (value.endsWith("/") ? value : `${value}/`);
const BASE_URL = normalizeBase(import.meta.env.BASE_URL || "/");
const SOURCE_PATH = `${BASE_URL}riseatseven.html`;

const rewriteHtml = (html) =>
  html
    .replace(/(["'])\/dist\//g, `$1${BASE_URL}dist/`)
    .replace(/(["'])\/fonts\//g, `$1${BASE_URL}fonts/`);

const copyAttributes = (source, target) => {
  Array.from(source.attributes).forEach((attr) => {
    target.setAttribute(attr.name, attr.value);
  });
};

const injectScripts = (scripts, target, addedNodes) => {
  scripts.forEach((script) => {
    const nextScript = document.createElement("script");
    copyAttributes(script, nextScript);
    if (script.textContent) {
      nextScript.textContent = script.textContent;
    }
    target.appendChild(nextScript);
    addedNodes.push(nextScript);
  });
};

export default function LegacyPage() {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    const addedNodes = [];

    const load = async () => {
      const response = await fetch(SOURCE_PATH, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Failed to load HTML: ${response.status}`);
      }

      const html = rewriteHtml(await response.text());
      if (cancelled) return;

      const parsed = new DOMParser().parseFromString(html, "text/html");
      const { documentElement, head, body } = parsed;

      if (documentElement) {
        document.documentElement.lang = documentElement.lang || "en";
        document.documentElement.className = documentElement.className || "";
      }

      if (body) {
        document.body.className = body.className || "";
        const bodyStyle = body.getAttribute("style");
        if (bodyStyle) {
          document.body.setAttribute("style", bodyStyle);
        }
        Array.from(body.attributes).forEach((attr) => {
          if (attr.name.startsWith("data-")) {
            document.body.setAttribute(attr.name, attr.value);
          }
        });
      }

      const headNodes = Array.from(head.children);
      const headLinks = headNodes.filter(
        (node) => node.tagName === "LINK" || node.tagName === "STYLE"
      );
      headLinks.forEach((node) => {
        const clone = node.cloneNode(true);
        document.head.appendChild(clone);
        addedNodes.push(clone);
      });

      let bodyScripts = [];
      if (containerRef.current) {
        containerRef.current.innerHTML = body.innerHTML;
        bodyScripts = Array.from(containerRef.current.querySelectorAll("script"));
      }

      const headScripts = headNodes.filter((node) => node.tagName === "SCRIPT");
      injectScripts(headScripts, document.head, addedNodes);

      bodyScripts.forEach((script) => {
        const nextScript = document.createElement("script");
        copyAttributes(script, nextScript);
        if (script.textContent) {
          nextScript.textContent = script.textContent;
        }
        script.replaceWith(nextScript);
      });

      setStatus("ready");
    };

    load().catch((error) => {
      console.error(error);
      if (!cancelled) {
        setStatus("error");
      }
    });

    return () => {
      cancelled = true;
      addedNodes.forEach((node) => node.remove());
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="legacy-shell">
      {status === "error" ? (
        <div className="legacy-error">
          Failed to load the live site HTML. Check your network and try again.
        </div>
      ) : null}
      <div ref={containerRef} id="legacy-root" />
    </div>
  );
}
