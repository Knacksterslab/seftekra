"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  number: string;
  title: string;
}

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.number ?? "");

  useEffect(() => {
    const ids = items.map((i) => i.number);
    const elements = ids
      .map((id) => document.getElementById(`section-${id}`))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const id = visible[0].target.id.replace("section-", "");
          setActiveId(id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const handleClick = (number: string) => {
    const el = document.getElementById(`section-${number}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      aria-label="Table of Contents"
      className="hidden lg:block"
    >
      <p className="mb-6 text-xs tracking-[0.2em] uppercase text-gray-600">
        On this page
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.number}>
            <button
              onClick={() => handleClick(item.number)}
              className={`flex items-center gap-3 py-1.5 text-sm font-light transition-colors duration-300 ${
                activeId === item.number
                  ? "text-gold"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <span
                className={`text-xs font-bold tabular-nums transition-colors duration-300 ${
                  activeId === item.number ? "text-gold" : "text-gray-600"
                }`}
              >
                {item.number}
              </span>
              <span className="leading-snug">{item.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
