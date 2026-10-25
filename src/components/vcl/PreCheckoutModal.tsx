import { useEffect, useRef, useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { z } from "zod";
import { Logo } from "./Logo";
import {
  buildCheckoutUrl,
  getCookie,
  getUtms,
  isUuid,
  pushDL,
  readCheckoutCookie,
  setCookie,
  trackLeadClick,
} from "@/lib/vcl-lead";

export const OPEN_PRECHECKOUT_EVENT = "vcl:open-precheckout";
const CAPTURE_URL = "https://n8n.julienesalvan.com.br/webhook/captura-vendas";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome.").max(100, "Nome muito longo."),
  email: z.string().trim().email("Informe um e-mail válido.").max(255, "E-mail muito longo."),
  whatsapp: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((d) => /^[1-9]{2}(9\d{8}|[2-5]\d{7})$/.test(d), "Informe um WhatsApp válido com DDD."),
});

type Errors = Partial<Record<"nome" | "email" | "whatsapp", string>>;

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const inputCls =
  "h-12 w-full rounded-md border border-[color:var(--vermelho)]/30 bg-white/70 px-3 text-base text-preto placeholder:text-preto/45 focus:border-[color:var(--vermelho)] focus:outline-none focus:ring-2 focus:ring-[color:var(--laranja)]/50";

export function PreCheckoutModal() {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [aceite, setAceite] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [enviando, setEnviando] = useState(false);
  const enviandoRef = useRef(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    trackLeadClick();
    const onOpen = (e: Event) => {
      triggerRef.current = ((e as CustomEvent).detail as HTMLElement) ?? null;
      scrollRef.current = window.scrollY;
      setErrors({});
      const saved = readCheckoutCookie();
      if (saved) {
        if (saved.name) setNome((v) => v || saved.name!);
        if (saved.email) setEmail((v) => v || saved.email!);
        if (saved.phone) setWhatsapp((v) => v || maskPhone(saved.phone!));
      }
      setOpen(true);
    };
    window.addEventListener(OPEN_PRECHECKOUT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_PRECHECKOUT_EVENT, onOpen);
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (enviandoRef.current) return;
    const r = schema.safeParse({ nome, email, whatsapp });
    if (!r.success) {
      const errs: Errors = {};
      for (const i of r.error.issues) {
        const k = i.path[0] as keyof Errors;
        if (!errs[k]) errs[k] = i.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    enviandoRef.current = true;
    setEnviando(true);

    const { nome: n, email: em, whatsapp: phone } = r.data;
    const utms = getUtms();
    setCookie("vc_checkout", encodeURIComponent(JSON.stringify({ name: n, email: em, phone })), 30);

    let leadId: string | null = null;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 4000);
    try {
      const res = await fetch(CAPTURE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: ctrl.signal,
        body: JSON.stringify({
          nome: n,
          email: em,
          whatsapp: phone,
          aceite_whatsapp: aceite,
          rastreio: {
            ...utms,
            fbp: getCookie("_fbp") ?? "",
            fbc: getCookie("_fbc") ?? "",
            url: location.href,
          },
        }),
      });
      const data = await res.json().catch(() => null);
      if (data?.ok && isUuid(data.lead_id)) {
        leadId = data.lead_id;
        setCookie("vc_lead_id", data.lead_id, 180);
      }
    } catch {
      /* falha/timeout: segue para o checkout sem xcod */
    } finally {
      clearTimeout(timer);
    }

    pushDL({ event: "leadPreCheckout", lead_id: leadId });
    const href = triggerRef.current?.getAttribute("href");
    const url = buildCheckoutUrl(href, { nome: n, email: em, phone, leadId, utms });
    pushDL({ event: "iniciarCheckout", lead_id: leadId });
    window.location.href = url;
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-preto/70 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          ref={contentRef}
          tabIndex={-1}
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            contentRef.current?.focus();
          }}
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            triggerRef.current?.focus({ preventScroll: true });
            const y = scrollRef.current;
            requestAnimationFrame(() => window.scrollTo({ top: y, behavior: "instant" }));
          }}
          className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh-24px)] w-[calc(100%-24px)] max-w-[440px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-[14px] border-t-4 border-[color:var(--laranja)] bg-creme px-5 py-6 text-vermelho shadow-2xl focus:outline-none sm:p-7"
        >
          <Dialog.Close
            aria-label="Fechar"
            className="absolute right-2 top-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-vermelho/70 hover:text-vermelho focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--laranja)]"
          >
            <X className="h-5 w-5" />
          </Dialog.Close>

          <div className="flex justify-center">
            <Logo height={56} />
          </div>
          <Dialog.Title className="mt-3 text-center font-display text-[28px] leading-tight text-vermelho">
            CONTINUE SUA INSCRIÇÃO NO VC_LÍDER
          </Dialog.Title>
          <Dialog.Description className="mt-1 text-center font-sans text-[15px] text-preto/75">
            Informe seus dados para seguir ao pagamento na Hotmart.
          </Dialog.Description>

          <form noValidate onSubmit={onSubmit} className="mt-5 space-y-4 font-sans">
            <div>
              <label htmlFor="pc-nome" className="mb-1 block text-sm font-semibold text-vermelho">Nome</label>
              <input id="pc-nome" name="nome" autoComplete="name" required maxLength={100} placeholder="Seu nome"
                value={nome} onChange={(e) => setNome(e.target.value)}
                aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "pc-nome-err" : undefined} className={inputCls} />
              {errors.nome && <p id="pc-nome-err" className="mt-1 text-sm text-destructive">{errors.nome}</p>}
            </div>
            <div>
              <label htmlFor="pc-email" className="mb-1 block text-sm font-semibold text-vermelho">E-mail</label>
              <input id="pc-email" name="email" type="email" inputMode="email" autoComplete="email" required maxLength={255} placeholder="Seu e-mail"
                value={email} onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!errors.email} aria-describedby={errors.email ? "pc-email-err" : undefined} className={inputCls} />
              {errors.email && <p id="pc-email-err" className="mt-1 text-sm text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="pc-whats" className="mb-1 block text-sm font-semibold text-vermelho">WhatsApp com DDD</label>
              <input id="pc-whats" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel-national" required placeholder="(11) 99999-9999"
                value={whatsapp} onChange={(e) => setWhatsapp(maskPhone(e.target.value))}
                aria-invalid={!!errors.whatsapp} aria-describedby={errors.whatsapp ? "pc-whats-err" : undefined} className={inputCls} />
              {errors.whatsapp && <p id="pc-whats-err" className="mt-1 text-sm text-destructive">{errors.whatsapp}</p>}
            </div>

            <label htmlFor="pc-aceite" className="flex min-h-11 cursor-pointer items-start gap-2 py-1">
              <input id="pc-aceite" type="checkbox" checked={aceite} onChange={(e) => setAceite(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[color:var(--vermelho)]" />
              <span className="text-[10px] leading-snug text-preto/85">
                Autorizo a equipe VC_Líder a entrar em contato pelo WhatsApp para tirar dúvidas e ajudar a concluir minha inscrição, caso eu não finalize a compra.
              </span>
            </label>

            <button type="submit" disabled={enviando} aria-busy={enviando}
              className="min-h-[52px] w-full rounded-md bg-vermelho px-4 text-base font-semibold text-creme shadow-md transition-colors hover:bg-[color:var(--terracota)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--laranja)] disabled:cursor-wait disabled:opacity-80">
              {enviando ? "Enviando..." : "Quero me inscrever no VC_Líder"}
            </button>

            <p className="text-center text-xs text-preto/70">
              Pagamento processado pela Hotmart. Seus dados estão seguros.
            </p>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
