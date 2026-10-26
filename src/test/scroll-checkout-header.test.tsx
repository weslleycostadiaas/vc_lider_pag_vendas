import { createRef } from "react";
import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScrollCheckoutHeader } from "@/components/scroll-checkout-header";

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

describe("Scroll checkout header", () => {
  it("appears beyond the composition, remains when scrolling up, and disappears at the opening", () => {
    const compositionRef = createRef<HTMLDivElement>();
    const element = document.createElement("div");
    let bottom = 400;
    element.getBoundingClientRect = () => ({ bottom } as DOMRect);
    compositionRef.current = element;
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => { callback(0); return 0; });
    vi.stubGlobal("cancelAnimationFrame", vi.fn());
    render(<ScrollCheckoutHeader compositionRef={compositionRef} checkoutUrl="https://pay.hotmart.com/T105324426S?checkoutMode=10" />);
    expect(screen.queryByRole("banner")).not.toBeInTheDocument();
    bottom = -500;
    act(() => { window.dispatchEvent(new Event("scroll")); });
    expect(screen.getByRole("link", { name: "Conheça o VC_Líder" })).toHaveAttribute("href", "https://pay.hotmart.com/T105324426S?checkoutMode=10");
    bottom = -100;
    act(() => { window.dispatchEvent(new Event("scroll")); });
    expect(screen.getByRole("banner")).toBeInTheDocument();
    bottom = 10;
    act(() => { window.dispatchEvent(new Event("scroll")); });
    expect(screen.queryByRole("banner")).not.toBeInTheDocument();
  });
});