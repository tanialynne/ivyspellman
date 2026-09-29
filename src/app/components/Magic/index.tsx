"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STAR =
  '<path d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z"/>';
const SWIRL =
  '<svg viewBox="0 0 170 34" aria-hidden="true"><path d="M4 22 C24 4 44 4 54 16 C60 24 50 30 44 24 C38 18 50 10 62 14 C76 18 84 26 100 20 C114 14 118 6 132 8 C146 10 150 22 140 26 C132 29 128 20 136 16 C146 11 158 14 166 20"/><circle class="dot" cx="85" cy="6" r="2.2"/><circle class="dot" cx="20" cy="27" r="1.6"/><circle class="dot" cx="152" cy="30" r="1.6"/></svg>';

function star(cls: string) {
  const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  s.setAttribute("viewBox", "0 0 24 24");
  s.setAttribute("class", cls);
  s.setAttribute("aria-hidden", "true");
  s.innerHTML = STAR;
  return s;
}

/**
 * Site-wide whimsy. Renders nothing; after mount it decorates the server-rendered page:
 * - [data-stars="n"] sections get n twinkling stars
 * - .ivy-swirl placeholders get the gold flourish
 * - buttons, and anything with [data-burst], throw sparkles on hover
 * - fairy dust follows a mouse/trackpad pointer
 * Motion effects are skipped entirely when the visitor prefers reduced motion.
 */
export default function Magic() {
  const pathname = usePathname();
  useEffect(() => {
    const added: Element[] = [];

    document.querySelectorAll<HTMLElement>("[data-stars]").forEach((el) => {
      if (el.dataset.starsDone) return;
      el.dataset.starsDone = "1";
      const n = parseInt(el.dataset.stars || "12", 10);
      for (let i = 0; i < n; i++) {
        const s = star("ivy-twinkle");
        const size = 6 + Math.random() * 12;
        s.style.width = s.style.height = `${size}px`;
        s.style.left = `${Math.random() * 96}%`;
        s.style.top = `${Math.random() * 94}%`;
        s.style.setProperty("--d", `${(3 + Math.random() * 4).toFixed(2)}s`);
        s.style.setProperty("--delay", `${(Math.random() * 4).toFixed(2)}s`);
        el.insertBefore(s, el.firstChild);
        added.push(s);
      }
    });

    document.querySelectorAll<HTMLElement>(".ivy-swirl").forEach((el) => {
      if (!el.innerHTML) el.innerHTML = SWIRL;
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const burst = (el: HTMLElement) => {
      const host = (el.offsetParent as HTMLElement) || document.body;
      const r = el.getBoundingClientRect();
      const h = host.getBoundingClientRect();
      for (let i = 0; i < 7; i++) {
        const s = star("ivy-burst");
        const a = Math.random() * Math.PI * 2;
        const dist = 26 + Math.random() * 30;
        s.style.left = `${r.left - h.left + r.width * (0.2 + Math.random() * 0.6)}px`;
        s.style.top = `${r.top - h.top + r.height * (0.2 + Math.random() * 0.6)}px`;
        s.style.setProperty("--bx", `${Math.cos(a) * dist}px`);
        s.style.setProperty("--by", `${Math.sin(a) * dist}px`);
        host.appendChild(s);
        window.setTimeout(() => s.remove(), 750);
      }
    };
    const onEnter = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest?.("[data-burst], .jb-ghost, a[class*='rounded-full'], button[class*='rounded-full']");
      if (t && !t.contains(e.relatedTarget as Node | null)) burst(t as HTMLElement);
    };
    document.addEventListener("mouseover", onEnter);

    let last = 0;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const now = performance.now();
      if (now - last < 32) return;
      last = now;
      const s = star("ivy-dust");
      const size = 5 + Math.random() * 7;
      s.style.width = s.style.height = `${size}px`;
      s.style.left = `${e.clientX + (Math.random() * 10 - 5)}px`;
      s.style.top = `${e.clientY + (Math.random() * 10 - 5)}px`;
      s.style.setProperty("--dx", `${Math.random() * 24 - 12}px`);
      s.style.setProperty("--dy", `${14 + Math.random() * 26}px`);
      document.body.appendChild(s);
      window.setTimeout(() => s.remove(), 950);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      document.removeEventListener("mouseover", onEnter);
      window.removeEventListener("pointermove", onMove);
      added.forEach((n) => {
        const parent = n.parentElement;
        if (parent) delete parent.dataset.starsDone;
        n.remove();
      });
    };
  }, [pathname]);

  return null;
}
