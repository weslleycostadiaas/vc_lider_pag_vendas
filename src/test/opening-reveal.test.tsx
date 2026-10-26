import { act, cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useOpeningReveal } from "@/hooks/use-opening-reveal";

function Opening() {
  const ref = useOpeningReveal();
  return <section ref={ref}>
    <div data-testid="headline" data-entry="initial">Headline</div>
    <div data-testid="benefit" data-entry="initial" data-reveal>Benefit</div>
    <div data-testid="video" data-reveal>Video</div>
  </section>;
}

afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });

describe("Opening entry and scroll ownership", () => {
  it("leaves first-paint entry alone and observes only below-fold blocks", () => {
    const observe = vi.fn();
    let callback: IntersectionObserverCallback | undefined;
    vi.stubGlobal("IntersectionObserver", class {
      constructor(cb: IntersectionObserverCallback) { callback = cb; }
      observe = observe;
      unobserve = vi.fn();
      disconnect = vi.fn();
    });
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function (this: HTMLElement) {
      const top = this.dataset['testid'] === "headline" ? 100 : 2000;
      return { top, bottom: top + 100, left: 0, right: 100, width: 100, height: 100, x: 0, y: top, toJSON: () => ({}) };
    });
    const page = render(<Opening />);
    const headline = page.getByTestId("headline");
    const benefit = page.getByTestId("benefit");
    expect(headline).toHaveAttribute("data-entry", "initial");
    expect(headline).not.toHaveAttribute("data-reveal-state");
    expect(observe).not.toHaveBeenCalledWith(headline);
    expect(benefit).toHaveAttribute("data-entry", "scroll");
    expect(benefit).toHaveAttribute("data-reveal-state", "pending");
    expect(observe).toHaveBeenCalledWith(benefit);
    const bounds = benefit.getBoundingClientRect();
    act(() => callback?.([{ isIntersecting: true, target: benefit, boundingClientRect: bounds, intersectionRect: bounds, intersectionRatio: 1, rootBounds: null, time: 0 }], {} as IntersectionObserver));
    expect(benefit).toHaveAttribute("data-reveal-state", "visible");
  });

  it("never hides content when reduced motion is requested", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() } as unknown as MediaQueryList);
    const page = render(<Opening />);
    for (const id of ["headline", "benefit", "video"]) {
      expect(page.getByTestId(id)).not.toHaveAttribute("data-reveal-state", "pending");
    }
  });
});