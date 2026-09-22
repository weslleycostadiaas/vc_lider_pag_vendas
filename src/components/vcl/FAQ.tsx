import { useState } from "react";

type Item = { q: string; a: string };

export function FAQ({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto w-full max-w-[860px]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="border-b border-[color:var(--terracota)]/25"
          >
            <button
              id={`faq-button-${i}`}
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="grid min-h-11 w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 text-left sm:gap-6 sm:py-6"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span className="min-w-0 font-sans text-[16px] font-semibold leading-[1.45] text-preto sm:text-lg md:text-xl">
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[color:var(--terracota)]/40 text-[color:var(--terracota)] transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1v12M1 7h12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-6"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="whitespace-pre-line text-[16px] leading-[1.7] text-preto/80 sm:pr-14 sm:text-[17px]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
