import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MentorSection } from "@/components/mentor-section";

afterEach(() => { cleanup(); vi.restoreAllMocks(); });

describe("Mentor demo one-tap audible start", () => {
  it("calls play() synchronously inside the tap with sound on and the dialog visible, on a stable element", async () => {
    const calls: { muted: boolean; volume: number; state: string | undefined }[] = [];
    vi.spyOn(HTMLMediaElement.prototype, "play").mockImplementation(function (this: HTMLMediaElement) {
      calls.push({ muted: this.muted, volume: this.volume, state: this.closest<HTMLElement>("[role=dialog]")?.dataset["state"] });
      return Promise.resolve();
    });
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
    render(<MentorSection />);
    await act(async () => {});
    const demo = screen.getByTestId("mentor-demo");
    calls.length = 0;
    fireEvent.click(screen.getByRole("button", { name: "Assistir à demonstração do Mentor Digital" }));
    const demoCalls = calls.filter(c => c.state !== undefined);
    expect(demoCalls[0]).toEqual({ muted: false, volume: 1, state: "open" });
    expect(screen.getByTestId("mentor-demo")).toBe(demo);
    expect(document.body.style.overflow).toBe("hidden");
    fireEvent.click(screen.getByRole("button", { name: "Fechar vídeo" }));
    expect(screen.getByTestId("mentor-demo")).toBe(demo);
    expect(document.body.style.overflow).toBe("");
  });

  it("keeps the page unlocked while the demo is closed", async () => {
    render(<MentorSection />);
    await act(async () => {});
    expect(document.body.style.overflow).toBe("");
    expect(document.documentElement.style.overflow).toBe("");
    expect(document.querySelector(".mentor-modal")?.getAttribute("data-state")).toBe("closed");
  });
});
