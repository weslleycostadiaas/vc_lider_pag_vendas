export function GuaranteeSeal() {
  return (
    <div className="relative mx-auto grid h-44 w-44 shrink-0 place-items-center rounded-full border-4 border-[color:var(--laranja)] sm:h-48 sm:w-48 md:h-56 md:w-56">
      <div className="absolute inset-2 rounded-full border border-[color:var(--laranja)]/60" />
      <div className="text-center px-4">
        <div className="font-display text-5xl text-vermelho leading-none">
          7
        </div>
        <div className="font-display text-2xl text-vermelho leading-none mt-1">
          DIAS
        </div>
        <div className="font-display text-[11px] text-terracota mt-3 tracking-widest">
          GARANTIA
          <br />
          INCONDICIONAL
        </div>
      </div>
    </div>
  );
}
