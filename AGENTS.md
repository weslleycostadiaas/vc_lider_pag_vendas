<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The sales opening lives at `/` and uses the shared Button variants and global semantic design tokens, keeping presentation consistent as later sections are added.
- Uploaded brand and approved cover media are referenced through Lovable Assets pointers; only the derived favicon lives in public, preserving original media.
- Approved cover derivatives must decode to identical RGBA pixels and retain the original asset pointer; this allows lossless transfer optimization without altering approved artwork.
- The opening keeps six independent no-wrap headline blocks and an anchored portrait in a same-row responsive grid at every width, with support outside the composition; height-led, width-bounded contain framing and vertically centered mobile text permit clothing overlap without covering the face, while finite line entries stay independent of the mobile authority stack.
- Headline color emphasis is nested within the six entry blocks, and the sentence gap applies only to the fourth block; narrow-phone portrait clearance preserves the exact type scale without obscuring the face.
- Bunny players share a ready-aware pending-intent controller; VSL preloads only the lightweight API near the viewport and mounts the audible iframe on visibility or explicit activation, preventing offscreen URL autoplay. Native volume preferences survive subsequent visibility resumes.
- Bunny visibility is separate from manual-pause intent: automatic resumes respect that intent, native/explicit play clears it, pause acknowledgments are tracked, and time updates never issue playback commands to avoid feedback loops.
- The scroll checkout header is a separate component triggered by the opening composition's viewport boundary, independent of scroll direction; fixed positioning avoids layout shifts and shared checkout Button styling preserves interaction states.
- Opening entry runs as finite CSS animations from SSR first paint, while the dedicated hook classifies offscreen blocks for IntersectionObserver reveals; initial blocks bypass observer completion, with focus recovery and live reduced-motion handling to keep content accessible without JavaScript.
- Authority is a separate section with scoped styles and its own observer/counter hook, so additions cannot change the approved opening. Its mobile cards are equal-sized, centered portrait frames with contained artwork and native sticky offsets below the fixed header; viewport-bounded sizing and scroll runway preserve full-artwork stages. Reduced motion restores static flow and counters expose final values independently of animation.
- Mentor Digital plays its Bunny demo through the public HLS playlist in a stable native <video> (native HLS or hls.js) inside a CSS-hidden custom dialog, calling play() synchronously in the tap so Safari keeps user activation; scroll lock applies only while open and no dialog library or force-mounted portal is used.
- Method M.A.P.A. lives in a separate component with scoped CSS and native sticky panels; independent accordion state and CSS reduced-motion overrides keep earlier sections unchanged and content accessible.
- Final sales sections are appended after Audience with isolated final-* styles and a dedicated reveal hook; offer values live in a shared browser-safe module so displayed pricing and FAQ stay consistent without changing checkout or earlier sections.
