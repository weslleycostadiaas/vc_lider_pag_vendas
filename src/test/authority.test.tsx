import { act, cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AuthoritySection } from "@/components/authority-section";

afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });

describe("Authority progressive enhancement", () => {
  it("counts once on intersection and keeps final values accessible", () => {
    let callback: IntersectionObserverCallback | undefined;
    const unobserve = vi.fn();
    vi.stubGlobal("IntersectionObserver", class {
      constructor(cb: IntersectionObserverCallback) { callback = cb; }
      observe = vi.fn(); unobserve = unobserve; disconnect = vi.fn();
    });
    let tick: FrameRequestCallback | undefined;
    vi.stubGlobal("requestAnimationFrame", vi.fn(cb => { tick = cb; return 1; }));
    const page = render(<AuthoritySection />);
    const stats = page.container.querySelector(".authority-stats");
    if (!stats) throw new Error("Stats missing");
    expect(page.container.querySelector(".authority-digits")).toHaveTextContent("0");
    expect(page.container.querySelectorAll(".sr-only")[1]).toHaveTextContent("200+");
    const entry = { target: stats, isIntersecting: true } as IntersectionObserverEntry;
    act(() => callback?.([entry], {} as IntersectionObserver));
    act(() => tick?.(0));
    act(() => tick?.(700));
    expect(page.container.querySelectorAll(".authority-digits")[1]).toHaveTextContent("175");
    act(() => tick?.(1400));
    expect(page.container.querySelectorAll(".authority-digits")[1]).toHaveTextContent("200");
    act(() => callback?.([entry], {} as IntersectionObserver));
    expect(unobserve).toHaveBeenCalledTimes(1);
    expect(page.getAllByRole("img")).toHaveLength(4);
    expect(page.container.querySelector("[data-entry]")).toBeNull();
  });

  it("shows final counters and all artwork immediately with reduced motion", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() } as unknown as MediaQueryList);
    const page = render(<AuthoritySection />);
    expect(Array.from(page.container.querySelectorAll(".authority-digits"), node => node.textContent)).toEqual(["20", "200", "100"]);
    expect(page.container.querySelector('[data-authority-state="pending"]')).toBeNull();
    expect(page.getByRole("heading", { name: "Eu também vivo os desafios de liderar. Todos os dias." })).toBeVisible();
  });
});