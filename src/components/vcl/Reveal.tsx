import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  instant = false,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Above-the-fold content: renders visible immediately, no JS dependency. */
  instant?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (instant) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [instant]);

  const Component = Tag as any;

  if (instant) {
    return (
      <Component ref={ref as any} className={className}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      ref={ref as any}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
