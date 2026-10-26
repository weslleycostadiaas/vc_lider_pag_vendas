# Áudio dos vídeos
- [x] Corrigir somente VSL: visibilidade separada da pausa manual; play nativo/ explícito livre, progresso sem comandos, pausas programáticas identificadas e retomada após confirmação tardia. 37 testes passam (10 Bunny), build OK. Chrome padrão 1440/390 touch: autoplay muted=true, Ativar som muted=false/volume1, sem cover/handoff após started; três ciclos via video.pause/play não são imediatamente repausados. Limite: readyState0/currentTime0 e play pendente impedem validar controles nativos reais, timestamp positivo e som neste navegador; reteste real pela cliente após publicação. Evidências temporárias em /tmp/browser/vsl-resume; não publicado, restante preservado.
- [x] Solicitar áudio inicial nos dois vídeos, retirar fallback mudo e controle externo, preservar thumb clicável e preferências nativas.
- [x] Chrome padrão 1440/390: ambos enviam unmute→setVolume(100)→play e emitem play, sem progresso positivo confirmado; fallback bloqueado testado com API simulada. Toque 360/390/430 rola 0→435 e após três ciclos; X/Escape (foco fora do iframe)/backdrop restauram scroll sem lock. WebKit instalado mas alvo travou, Safari real não validado. 13 testes passam, build OK; não publicado.

# Opening refinement
- [x] Enlarge every current headline size exactly 10%, add only the phrase gap and specified orange words; verify six lines at 1440/360/390/430. A 10px portrait clearance at 360–380 preserves type size and leaves the face unobscured.
- [x] Replace four authority cards with intact numbered v2 uploads; preserve frames and stack, verify loading, equal centered dimensions, motion and tests.
- [x] Reduce all current headline sizes by 15% without reducing the portrait; retain required neutral tracking and disclose its exact instruction.
- [x] Add compact fixed brand/checkout header after the composition leaves the top; keep visible on upward scrolling and remove at the opening.
- [x] Verify 1440/390/320 typography, screenshots, header down/up/top, blur, checkout, reduced motion and existing tests; do not publish.
- [x] Restore approved mobile composition proportions and centered headline without changing desktop framing or protected content; negative tracking cannot be applied under the developer instruction.
- [x] Verify 390/320/1440 computed typography, portrait bounds, screenshots, motion, video and checkout; 45/38px overlapped the face with required neutral tracking, so mobile uses study-sized 35/29px.
- [x] Apply six exact headline lines, approximately 30% larger type, taller intact portrait and larger orange benefit/counter numbers; retain required neutral tracking.
- [x] Verify 1440/1280/390/320 screenshots, unobscured face, complete torso, fonts, motion, unchanged cards, video and checkout; do not publish.
- [x] Apply approved study to both sections, final portrait, same-row mobile composition and unified Bodoni emphasis.
- [x] Verify six widths, face framing, fonts, motion, counters, unchanged stack, CTA and click-only video; do not publish.
- [x] Integrate original portrait and horizontal brand; adapt uppercase Inter headings and CTA label without changing checkout.
- [x] Keep four authority cards in one desktop row from 1024px; preserve mobile stack exactly.
- [x] Verify 1440/1024/390/320 screenshots, assets, headings, stack, counters, motion, CTA and video.
- [x] Strengthen editorial alignment and spacing while preserving approved content and assets.
- [x] Reveal individual blocks on scroll with short benefit stagger and reduced-motion support.
- [x] Verify desktop/mobile, exact text, player activation and checkout preservation.
- [x] Apply Inter headline, italic title-case support emphasis, numbered benefits and expanded curved navy background.
- [x] Verify updated fonts, desktop/mobile layouts, reduced motion, video and checkout.
- [x] Make first-paint text entry perceptible independently of hydration, preserving below-fold scroll reveals.
- [x] Verify reload frames on desktop/mobile, reduced motion and no-JavaScript recovery; leave publishing to the user.

# Juliene authority
- [x] Add restrained navy card borders, rim lighting and depth; equal centered mobile frames accommodating intact artwork and the fixed header.
- [x] Verify 360×800, 390×844, 430×932 and 1440 desktop dimensions, stack stages, screenshots, loading, reduced motion and tests; do not publish.
- [x] Add approved copy, accessible one-time counters and four intact final artwork assets after the unchanged opening.
- [x] Implement desktop/tablet grid and mobile sticky stack with complete artwork stages and natural release.
- [x] Verify 1440/1280/768/390/320 layouts, stack screenshots, counters, reduced motion, keyboard and opening preservation.

# Método M.A.P.A.
- [x] Add intact original flywheel after Authority and four independently toggled, initially open sticky panels with scoped styling.
- [x] Verify 1440/360/390/430, image transparency/loading, contrast (5.99:1 orange, 13.99:1 blue), Enter/Space, complete stack reading/release and static reduced motion; eight tests pass. VSL activation, Mentor open/close/unmount and checkout preserved; actual sound/playback not revalidated due to browser codec limitation. Not published.
- [x] Rework Method: vector SVG flywheel with one-shot ordered arrival sequence (M→Ação→Pessoas→Aprendizado→M return→center), brand-orange M.A.P.A. headline in three mobile lines, pillars as reversible sticky tabs (no accordions) with measured cumulative offsets, Authority→Method gap tightened to 64px desktop/48px mobile; nine tests pass. Not published.- [x] Fix Method: non-overlapping 1000×1000 SVG flywheel (bbox-checked), 4th panel docks exactly under 3rd title via in-stack runway, panel letters 1.2em/700. Not published.
- [x] Method polish: arrowheads -25% with longer arcs, flywheel visually centered (<0.5px), panel letters 1.8em/700; 4th docking preserved.

- [x] Mentor: one-tap audible start via stable native HLS video + synchronous play() in the gesture; real iPhone/Safari confirmation pending with user.

# Depoimentos
- [x] Seção após M.A.P.A.: headline em 3 linhas, subheadline, apoio itálico Bodoni, 4 prints 1696×2528 em ordem como assets, acabamento idêntico aos cards de Autoridade, desktop 4 em linha / tablet 2 / mobile sticky stack igual centralizado, lightbox acessível (X/Escape/backdrop, foco preso/restaurado, scroll lock só aberto). 21 testes passam, build OK, validado 1440/390 e reduced-motion. Não publicado.

# É para você / Não é para você
- [x] Seção após Depoimentos: dois blocos com copy exata (5+4 itens), acabamento dos cards aprovados, positivo com borda/título laranja da marca e checks, negativo em variação navy com traços; desktop lado a lado, mobile empilhado; reveal sutil com reduced-motion. 23 testes passam, build OK, validado 1440/390 sem overflow. Não publicado.

# Blocos finais
- [x] Acrescentar ecossistema/oferta, suporte, garantia, FAQ 13, fechamento e rodapé na ordem aprovada, com imagem original transparente 960×480 e estilos isolados; seções anteriores preservadas.
- [x] Validado 1440/768/360/390/430: screenshots por seção, sem overflow, imagem carregada, preços 949/12×98.15, dois CTAs/href, FAQ 13 toggles e Enter/Space, rodapé 14px, reduced-motion estático. Desktop/mobile: três ciclos X/Escape/backdrop em cada modal, scrollY volta a 0 do rodapé; wheel 0→500 e touch 0→2045 após ciclos, body normal fechado. VSL muted=true e Ativar som confirmados; Mentor solicita muted=false/volume1, mas currentTime permanece 0 após 6s neste navegador, portanto som/progresso não confirmados. 32 testes passam, build OK; não publicado.

# Auditoria 2026-10-19
- [x] Headline Ecossistema: "videoaulas". Auditoria completa em audit-2026-10-19.txt; corrigidos lightbox sob cabeçalho, capa VSL e poster da demo carregando cedo.
- [x] Auditoria pós-publicação concluída: Lighthouse12.8.2 frio2× por perfil (mobile74/75,LCP4.95–4.97s;desktop97,LCP1.11s), warm timing, OG SSR/imagens200, primeiros10recursos200 e fluxos públicos390/1440. Relatório e evidências atualizados;32testes/buildOK. Thumb LOSSLESS−36.9% pixels iguais e alvos44px invisíveis verificados no preview, sem publicar.
- [x] Última rodada final publicada: WebP/VIDEOAULAS/OG SSR confirmados; LH frio1× por perfil, mobile50/LCP8.360s/CLS0/1764.30KiB e desktop97/LCP1.127s/CLS.000011/1763.67KiB. Variação mobile50–75 registrada sem declarar solução. Evidência independente da cliente de avanço HLS no IAB/macOS incluída. Auditoria encerrada, sem mais patches.
- Limites externos registrados no relatório, fora desta auditoria encerrada: iPhone/Safari e Android/Chrome reais, som físico e checkoutBRL Brasil; contraste/tracking preservados sem pedido.

# Performance móvel 2026-10-19
- [x] Baseline público medido (LH 12.8.2 frio: mobile 75–76/LCP 4,70–4,96s; desktop 97/LCP 1,13s) e causa provada: cadeia render-blocking do Google Fonts (wastedMs 774); TBT baixo descartou code-splitting. Relatório em performance-2026-10-19.txt.
- [x] Fontes self-hosted (@fontsource, mesmos pesos/famílias, WOFF2 same-origin), remoção dos links remotos, thumb VSL fetchPriority=low; preload da foto deixado com o auto-preload do framework (manual duplicava). 37/37 testes, build OK, preview sem chamadas ao Google, sem overflow 1366/768/390, reduced-motion imediato, fades dos braços preservados.
- [x] ROOT publicou; medição pública final LH12.8.2/Chrome141 frio2×mobile+1×desktop concluída: mobile93–94/FCP1.388–1.529s/LCP2.903–3.134s/TBT16–44ms/CLS0/1.672.775–1.814.883B; desktop99/FCP0.531s/LCP0.734s/TBT8ms/CLS0.000249/1.836.673B. Sete WOFF2 locais HTTP200 e GoogleFonts0 confirmados. Ambas coletas mobile têm aviso de timeout/incompletude; não declarar redução consistente de bytes nem aprovação sem ressalvas. Relatório e JSON em qa/performance-2026-10-19/final-public; sem patches/retest37/checkout/publicação. ROOT Codex faz teste em navegador real, não celulares físicos.
