import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { BunnyPlayer, type BunnyController } from "@/components/bunny-player";

const events = new Map<string, (v?: { seconds?: number }) => void>();
const commands: string[] = [];
class Player {
  on(e: string, cb: (v?: { seconds?: number }) => void) { events.set(e, cb); }
  play() { commands.push("play"); }
  pause() { commands.push("pause"); }
  mute() { commands.push("mute"); }
  unmute() { commands.push("unmute"); }
  setVolume(v: number) { commands.push(`volume:${v}`); }
}
const src = "https://player.mediadelivery.net/embed/750581/test?autoplay=true&muted=false&volume=100";
beforeEach(() => {
  commands.length = 0; events.clear();
  Object.assign(window, { playerjs: { Player } });
});
afterEach(() => { cleanup(); vi.useRealTimers(); });
const ready = async () => { await act(async () => {}); act(() => events.get("ready")?.()); };

describe("Bunny audio intent", () => {
  it("requests unmute, exactly 100 volume, then play on ready", async () => {
    render(<BunnyPlayer src={src} title="Audio" active />);
    await ready();
    expect(commands).toEqual(["unmute", "volume:100", "play"]);
  });
  it("retains a clickable cover after blocked playback timeout and retries directly in the gesture", async () => {
    vi.useFakeTimers();
    render(<BunnyPlayer src={src} title="Audio" active cover="/cover.png" retryCover />);
    await ready();
    act(() => vi.advanceTimersByTime(3501));
    fireEvent.click(screen.getByRole("button"));
    expect(commands.slice(-3)).toEqual(["unmute", "volume:100", "play"]);
    expect(screen.getByRole("button")).toBeInTheDocument();
    act(() => events.get("timeupdate")?.({ seconds: 0 }));
    expect(screen.getByRole("button")).toBeInTheDocument();
    act(() => events.get("timeupdate")?.({ seconds: 1 }));
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
  it("queues a gesture before ready and applies its audible intent once ready", async () => {
    let controller: BunnyController | null = null;
    render(<BunnyPlayer src={src} title="Audio" autoPlay={false} onController={c => { controller = c; }} />);
    await act(async () => {});
    act(() => { controller?.unmute(); controller?.play(); });
    expect(commands).toEqual([]);
    act(() => events.get("ready")?.());
    expect(commands).toEqual(["unmute", "volume:100", "play"]);
  });
  it("preserves native volume changes on subsequent visibility resumes", async () => {
    const view = render(<BunnyPlayer src={src} title="Audio" active />);
    await ready();
    act(() => events.get("play")?.());
    commands.length = 0;
    view.rerender(<BunnyPlayer src={src} title="Audio" active={false} />);
    act(() => events.get("pause")?.());
    view.rerender(<BunnyPlayer src={src} title="Audio" active />);
    expect(commands).toEqual(["pause", "play"]);
  });
});
describe("VSL muted autoplay opt-in", () => {
  it("plays muted without gesture, then one tap unmutes at 100 without seeking", async () => {
    render(<BunnyPlayer src={src} title="VSL" active mutedAutoplay cover="/c.png" retryCover />);
    await ready();
    expect(commands).toEqual(["mute", "play"]);
    act(() => events.get("play")?.());
    commands.length = 0;
    fireEvent.click(screen.getByRole("button", { name: "Ativar som" }));
    expect(commands).toEqual(["unmute", "volume:100", "play"]);
    expect(screen.queryByRole("button", { name: "Ativar som" })).not.toBeInTheDocument();
  });
  it("resumes three native pause/play cycles without commands, seeking or repeated progress pauses", async () => {
    const onUserPause = vi.fn();
    const onUserPlay = vi.fn();
    render(<BunnyPlayer src={src} title="VSL" active mutedAutoplay onUserPause={onUserPause} onUserPlay={onUserPlay} />);
    await ready();
    expect(commands).toEqual(["mute", "play"]);
    act(() => events.get("play")?.());
    commands.length = 0;
    for (let cycle = 0; cycle < 3; cycle++) {
      act(() => events.get("pause")?.());
      act(() => events.get("timeupdate")?.({ seconds: 12 + cycle }));
      act(() => events.get("play")?.());
      act(() => events.get("timeupdate")?.({ seconds: 13 + cycle }));
    }
    expect(onUserPause).toHaveBeenCalledTimes(3);
    expect(onUserPlay).toHaveBeenCalledTimes(3);
    expect(commands).toEqual([]);
  });
  it("keeps manual pause across viewport and tab changes until native play", async () => {
    const onUserPause = vi.fn();
    const props = { src, title: "VSL", mutedAutoplay: true, onUserPause };
    const view = render(<BunnyPlayer {...props} active />);
    await ready();
    act(() => events.get("play")?.());
    act(() => events.get("pause")?.());
    commands.length = 0;
    view.rerender(<BunnyPlayer {...props} active={false} />);
    view.rerender(<BunnyPlayer {...props} active />);
    fireEvent(document, new Event("visibilitychange"));
    expect(commands).toEqual([]);
    act(() => events.get("play")?.());
    view.rerender(<BunnyPlayer {...props} active={false} />);
    act(() => events.get("pause")?.());
    view.rerender(<BunnyPlayer {...props} active />);
    expect(commands).toEqual(["pause", "play"]);
    expect(onUserPause).toHaveBeenCalledTimes(1);
  });
  it("preserves enabled audio through three native cycles and automatic resume", async () => {
    const props = { src, title: "VSL", mutedAutoplay: true };
    const view = render(<BunnyPlayer {...props} active />);
    await ready();
    act(() => events.get("play")?.());
    fireEvent.click(screen.getByRole("button", { name: "Ativar som" }));
    act(() => events.get("play")?.());
    commands.length = 0;
    for (let cycle = 0; cycle < 3; cycle++) {
      act(() => events.get("pause")?.());
      act(() => events.get("play")?.());
      act(() => events.get("timeupdate")?.({ seconds: 26 + cycle }));
    }
    expect(commands).toEqual([]);
    view.rerender(<BunnyPlayer {...props} active={false} />);
    act(() => events.get("pause")?.());
    view.rerender(<BunnyPlayer {...props} active />);
    expect(commands).toEqual(["pause", "play"]);
  });
  it("does not classify delayed programmatic pause as manual or loop on stale progress", async () => {
    const onUserPause = vi.fn();
    const props = { src, title: "VSL", mutedAutoplay: true, onUserPause };
    const view = render(<BunnyPlayer {...props} active />);
    await ready();
    act(() => events.get("play")?.());
    commands.length = 0;
    view.rerender(<BunnyPlayer {...props} active={false} />);
    for (let i = 1; i <= 10; i++) act(() => events.get("timeupdate")?.({ seconds: i }));
    expect(commands).toEqual(["pause"]);
    view.rerender(<BunnyPlayer {...props} active />);
    act(() => events.get("pause")?.());
    act(() => events.get("play")?.());
    expect(onUserPause).not.toHaveBeenCalled();
    expect(commands).toEqual(["pause", "play"]);
    commands.length = 0;
    act(() => events.get("pause")?.());
    expect(onUserPause).toHaveBeenCalledTimes(1);
    for (let i = 11; i <= 20; i++) act(() => events.get("timeupdate")?.({ seconds: i }));
    expect(commands).toEqual([]);
  });
  it("pauses on hidden tabs and resumes without changing audio or manual intent", async () => {
    const hidden = vi.spyOn(document, "hidden", "get");
    hidden.mockReturnValue(false);
    const onUserPause = vi.fn();
    render(<BunnyPlayer src={src} title="VSL" active mutedAutoplay onUserPause={onUserPause} />);
    await ready();
    act(() => events.get("play")?.());
    commands.length = 0;
    hidden.mockReturnValue(true);
    fireEvent(document, new Event("visibilitychange"));
    act(() => events.get("pause")?.());
    hidden.mockReturnValue(false);
    fireEvent(document, new Event("visibilitychange"));
    expect(commands).toEqual(["pause", "play"]);
    expect(onUserPause).not.toHaveBeenCalled();
    hidden.mockRestore();
  });
});
