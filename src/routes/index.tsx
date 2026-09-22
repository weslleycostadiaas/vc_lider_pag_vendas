import { createFileRoute } from "@tanstack/react-router";
import { Brackets } from "@/components/vcl/Brackets";
import { CTAButton } from "@/components/vcl/CTAButton";
import { FloatingCTA } from "@/components/vcl/FloatingCTA";
import { Reveal } from "@/components/vcl/Reveal";
import { FAQ } from "@/components/vcl/FAQ";
import { Logo } from "@/components/vcl/Logo";
import { MapaDiagram } from "@/components/vcl/MapaDiagram";
import { GuaranteeSeal } from "@/components/vcl/GuaranteeSeal";
import SalesVideo from "@/components/vcl/SalesVideo";
import autoridade640 from "@/assets/imagens/autoridade-2-640.webp.asset.json";
import autoridade960 from "@/assets/imagens/autoridade-2-960.webp.asset.json";
import autoridade1440 from "@/assets/imagens/autoridade-2-1440.webp.asset.json";
import mentora640 from "@/assets/imagens/mentora-juliene-640.webp.asset.json";
import mentora960 from "@/assets/imagens/mentora-juliene-960.webp.asset.json";
import mentora1440 from "@/assets/imagens/mentora-juliene-1440.webp.asset.json";
import mrg640 from "@/assets/imagens/mentor-radar-grupo-2-640.webp.asset.json";
import mrg960 from "@/assets/imagens/mentor-radar-grupo-2-960.webp.asset.json";
import mrg1440 from "@/assets/imagens/mentor-radar-grupo-2-1440.webp.asset.json";
import produtos640 from "@/assets/imagens/produtos-2-640.webp.asset.json";
import produtos960 from "@/assets/imagens/produtos-2-960.webp.asset.json";
import produtos1440 from "@/assets/imagens/produtos-2-1440.webp.asset.json";


// Trocar para false para ocultar as duas seções de depoimentos (Seções 4 e 11)
const MOSTRAR_DEPOIMENTOS = false;
const LINK_CHECKOUT = "https://pay.hotmart.com/T105324426S";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "VC_Líder — Liderança como técnica. Método M.A.P.A. de Juliene Salvan",
      },
      {
        name: "description",
        content:
          "Curso online para gestores: transforme cadeira em liderança de verdade com o Método M.A.P.A., testado com mais de 200 líderes por Juliene Salvan.",
      },
      {
        property: "og:title",
        content: "VC_Líder — Liderança é técnica, e técnica se aprende",
      },
      {
        property: "og:description",
        content:
          "O método que transforma cargo em liderança real, do recém-promovido ao veterano. Curso completo com Mentor Digital, Radar do Líder e mais.",
      },
      {
        name: "twitter:title",
        content: "VC_Líder — Liderança é técnica",
      },
      {
        name: "twitter:description",
        content:
          "Método M.A.P.A. por Juliene Salvan. Liderança como técnica, testada com mais de 200 gestores.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[color:var(--creme)] pb-24 text-[color:var(--preto)] md:pb-0">
      <Hero />
      <Autoridade />
      <Dor />
      <Paliativo />
      {MOSTRAR_DEPOIMENTOS && <ProvaSocial1 />}
      <CTAIntermediario />
      <Metodo />
      <ParaQuem />
      <Entregaveis />
      <Bonus />
      <StackValor />
      {MOSTRAR_DEPOIMENTOS && <ProvaSocial2 />}
      <Suporte />
      <Garantia />
      <FAQSection />
      <OfertaFinal />
      <Footer />
      <FloatingCTA href={LINK_CHECKOUT} />
    </main>
  );
}

/* ---------------- SECTION 1: HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--vermelho)] text-[color:var(--creme)]">
      <div className="relative mx-auto max-w-[1100px] px-5 pt-6 pb-20 md:pt-8 md:pb-28">
        <div className="mb-4 md:mb-6 flex justify-center">
          <Logo onDark height={120} />
        </div>

        <Reveal instant>
          <h1 className="font-display text-center text-[38px] leading-[1.08] min-[360px]:text-[44px] md:text-[68px] md:leading-[1.05] lg:text-[76px]">
            Você tem o cargo de líder.<br />
            O manual da Liderança ainda não.
          </h1>
        </Reveal>

        <Reveal instant className="relative z-30">
          <p className="relative z-30 mt-2 mb-0 max-w-4xl mx-auto text-center text-[18px] md:text-[21px] leading-[1.35] text-[color:var(--laranja)] whitespace-pre-line">
            O método que transforma o cargo em LIDERANÇA DE VERDADE:{"\u00a0"}{"\n"}
            Uma metodologia construída na prática, acompanhando mais de 200 líderes.{"\u00a0"}{"\n"}
          </p>
        </Reveal>

        {/* O bloco do vídeo volta ao comportamento validado no iPhone:
            montagem via Reveal padrão, como antes da otimização de abertura. */}
        <Reveal>
          <div className="relative z-10 mt-8 mx-auto max-w-4xl px-4 w-full">
            <SalesVideo />
          </div>
        </Reveal>


        <Reveal>
          <p className="relative z-30 mt-6 max-w-4xl mx-auto text-center text-[16px] md:text-[18px] leading-[1.5] text-[color:var(--creme)] italic">
            Quem te mostra o caminho é quem decide sobre isso no dia a dia: Juliene Salvan é diretora de RH de um dos maiores grupos de comunicação do Brasil e mentora mais de 200 líderes.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-14 text-center">
            <div className="font-display text-[20px] text-[color:var(--laranja)] tracking-wider">
              NESTA AULA VOCÊ VAI ENTENDER:
            </div>
            <ul className="mt-6 space-y-5 max-w-3xl mx-auto">
              {[
                {
                  t: "O erro que faz você absorver o operacional",
                  d: "por que você continua fazendo o trabalho da sua equipe mesmo sabendo que não deveria e como delegar de verdade, sem perder o controle da entrega;",
                },
                {
                  t: "Como ter conversas difíceis sem travar",
                  d: "como parar de contornar problemas, adiar feedbacks importantes e aprender a se posicionar com clareza, sem transformar a conversa em um conflito;\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0\u00a0",
                },
                {
                  t: "Por que tentar agradar a todos enfraquece sua liderança",
                  d: "como se posicionar, estabelecer limites e tomar decisões difíceis sem perder o respeito e a confiança do seu time.",
                },
              ].map((b, i) => (
                <li key={i} className="flex flex-row items-baseline justify-center gap-3 text-[17px] md:text-[18px] leading-[1.7]">
                  <span
                    aria-hidden
                    className="font-display text-[28px] leading-[1] text-[color:var(--laranja)] shrink-0"
                  >
                    {i + 1}
                  </span>
                  <span className="max-w-2xl text-left">
                    <span className="font-semibold">{b.t}:</span> {b.d}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <CTAButton href={LINK_CHECKOUT} size="lg">
              Quero liderar de verdade
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SECTION 2: DOR ---------------- */
function Dor() {
  return (
    <section className="bg-[color:var(--creme)] px-5 py-16 md:py-28">
      <div className="mx-auto max-w-[780px]">
        <Reveal>
          <h2 className="font-display text-[28px] leading-[1.12] text-[color:var(--vermelho)] min-[360px]:text-[32px] md:text-[44px] md:leading-[1.1] uppercase">
            O cargo mudou no crachá. Mas ninguém mudou o mapa que você usa para
            trabalhar.
          </h2>
        </Reveal>

        <div className="mt-8 space-y-5 text-[16px] leading-[1.7] sm:mt-10 sm:space-y-6 sm:text-[18px] sm:leading-[1.75]">
          <Reveal as="p">
            Você foi reconhecido por entregar, resolver problemas e fazer
            acontecer. Até que veio a promoção e o trabalho mudou: agora, além
            de saber fazer, você precisa conduzir as pessoas que fazem.
          </Reveal>

          <Reveal as="p">
            Só que o cargo novo nem sempre vem acompanhado da preparação para
            exercê-lo. E isso aparece na rotina:
          </Reveal>

          <ul className="space-y-5 sm:space-y-6">
            <Reveal as="li">
              Você <span className="font-semibold">assume tarefas da equipe</span>{" "}
              porque parece mais rápido fazer do que ensinar. No fim do dia,
              resolveu o trabalho de todo mundo e deixou o seu para depois.
            </Reveal>
            <Reveal as="li">
              <span className="font-semibold">Adia aquele feedback</span> porque
              não sabe como ser firme sem desgastar a relação. Enquanto espera o
              momento certo, o problema continua.
            </Reveal>
            <Reveal as="li">
              <span className="font-semibold">Busca o aval do gestor acima</span>{" "}
              para decisões que já são suas. Ou passa a semana apagando
              incêndios, sem espaço para desenvolver o time e antecipar o que
              vem pela frente.
            </Reveal>
          </ul>

          <Reveal as="p">
            Isso pode acontecer na primeira liderança ou depois de anos no
            cargo. Por trás da sobrecarga, fica uma dúvida difícil de admitir:
            “Será que estou realmente preparado para liderar?”
          </Reveal>

          <Reveal as="p">
            Essa insegurança não apaga sua competência. Ela mostra onde sua
            experiência técnica precisa ser complementada por ferramentas de
            liderança.
          </Reveal>

          <Reveal as="p">
            <span className="font-semibold">
              Esforço não substitui método.
            </span>{" "}
            Com o mapa errado, você pode trabalhar o dobro, terminar exausto e
            ainda não chegar aonde precisa.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 3: PALIATIVO ---------------- */
function Paliativo() {
  const linhasIniciais = [
    "Um curso traz novas ferramentas.",
    "Um livro amplia sua visão.",
    "Um treinamento ajuda a repensar sua atuação.",
  ];
  return (
    <section className="bg-[color:var(--branco)] pt-20 md:pt-28 pb-8 md:pb-14 px-5">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="font-display text-[28px] md:text-[42px] leading-[1.15] text-[color:var(--vermelho)] max-w-4xl text-center mx-auto uppercase">
            VOCÊ JÁ BUSCOU CONHECIMENTO. O DESAFIO É USÁ-LO QUANDO A SITUAÇÃO
            APERTA.
          </h2>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center">
            {linhasIniciais.map((linha) => (
              <p
                key={linha}
                className="text-[16px] leading-[1.6] sm:text-[18px] md:text-[20px]"
              >
                {linha}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl text-center text-[16px] leading-[1.7] sm:text-[18px]">
            Mas, na segunda-feira, você está novamente diante da equipe e
            precisa decidir: como aplicar tudo isso nesta situação, com esta
            pessoa?
          </p>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[16px] leading-[1.7] sm:text-[18px]">
            Conhecer uma técnica de feedback não significa se sentir preparado
            para aquela conversa. Entender a importância de delegar não resolve,
            sozinho, a dificuldade de confiar uma entrega importante a alguém.
          </p>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[16px] leading-[1.7] sm:text-[18px]">
            É nessa passagem entre saber e fazer que a Mentoria VC_Líder atua.
          </p>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[16px] leading-[1.7] sm:text-[18px]">
            O <strong>Radar do Líder</strong> ajuda você a identificar quais
            competências precisam de atenção. Nas aulas com Juliene Salvan,
            você aprende o <strong>Método M.A.P.A.</strong> e suas ferramentas.
            E, com o <strong>Mentor Digital</strong>, pode conversar sobre seus
            desafios, organizar o raciocínio e preparar suas ações com base no
            método.
          </p>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[16px] leading-[1.7] sm:text-[18px]">
            Um ecossistema de desenvolvimento para entender onde você precisa
            evoluir, aprender o que faz sentido para seu momento e colocar em
            prática na sua rotina.
          </p>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[16px] leading-[1.7] sm:text-[18px]">
            Todas as ferramentas de aprendizado se conectam no ecossistema
            VC_Líder. E o fio condutor é o Método M.A.P.A.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SECTION 4: PROVA SOCIAL 1 ---------------- */
// ATENÇÃO: depoimentos abaixo são FICTÍCIOS. Substituir por depoimentos reais
// antes de publicar, ou trocar MOSTRAR_DEPOIMENTOS para false no topo deste arquivo.
function ProvaSocial1() {
  const depos = [
    {
      nome: "Fernanda Rocha",
      cargo: "coordenadora de operações",
      texto: (
        <>
          "Eu vinha adiando um conflito entre duas pessoas do time havia dois
          meses, com medo de tomar partido. Apliquei o protocolo de
          alinhamento do módulo de Pessoas e resolvi a tensão inteira{" "}
          <b className="font-semibold">em uma conversa de 20 minutos</b>. Foi
          a primeira vez que saí de uma situação dessas sem carregar o
          problema para casa."
        </>
      ),
    },
    {
      nome: "Bruno Castilho",
      cargo: "gerente de projetos",
      texto: (
        <>
          "Eu fazia o trabalho da equipe porque achava que era mais rápido. Em{" "}
          <b className="font-semibold">três semanas</b> usando a técnica de
          delegação, as mensagens diretas que eu recebia por dia{" "}
          <b className="font-semibold">caíram de onze para quatro</b>, e a
          equipe passou a resolver sozinha o que antes parava na minha mesa."
        </>
      ),
    },
    {
      nome: "Patrícia Andrade",
      cargo: "supervisora de vendas",
      texto: (
        <>
          "Fui promovida há um ano e vivia com a sensação de que ia ser
          desmascarada. Depois de aplicar o método, apresentei um plano para a
          diretoria e fui{" "}
          <b className="font-semibold">aprovada na primeira reunião</b>. Pela
          primeira vez me senti a líder do cargo que ocupo, não uma impostora
          esperando ser descoberta."
        </>
      ),
    },
  ];
  return (
    <section
      data-placeholder="depoimentos-ficticios"
      className="bg-[color:var(--terracota)] text-[color:var(--creme)] py-20 md:py-28 px-5"
    >
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="font-display text-[30px] md:text-[44px] leading-[1.1] max-w-4xl uppercase text-center mx-auto">
            O QUE MUDA QUANDO A LIDERANÇA DEIXA DE SER INTUIÇÃO E PASSA A TER
            TÉCNICA?
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {depos.map((d, i) => (
            <Reveal key={i}>
              <div className="h-full rounded-lg bg-[color:var(--creme)] text-[color:var(--preto)] p-8">
                <p className="text-[16px] leading-[1.7]">{d.texto}</p>
                <div className="mt-6 pt-4 border-t border-[color:var(--terracota)]/30">
                  <div className="font-display text-xl text-[color:var(--vermelho)]">
                    {d.nome}
                  </div>
                  <div className="text-sm text-[color:var(--preto)]/70">
                    {d.cargo}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 5: CTA INTERMEDIARIO ---------------- */
function CTAIntermediario() {
  return (
    <section className="bg-[color:var(--branco)] text-[color:var(--preto)] pt-4 md:pt-6 pb-10 md:pb-14 px-5">
      <div className="mx-auto max-w-[900px] text-center">
        <Reveal>
          <CTAButton href={LINK_CHECKOUT} variant="primary" size="lg">
            Quero aprender a técnica de liderar
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SECTION 6: MÉTODO ---------------- */
function Metodo() {
  const pillars = [
    {
      letra: "M",
      nome: "Mentalidade",
      q: "Como devo pensar e me posicionar diante desta situação?",
      texto:
        "Antes de qualquer ferramenta, existe a lente com que você lê o cenário, e uma lente torta faz até a melhor técnica amplificar o erro. Aqui você aprende a reconhecer a emoção antes de ela virar decisão, a identificar os vieses que distorcem sua avaliação, a desativar a síndrome da impostora e a construir autoridade legítima, a que se ocupa pela consistência, não se impõe pelo crachá.",
    },
    {
      letra: "A",
      nome: "Ação",
      q: "Qual técnica eu preciso usar para resolver isto?",
      texto:
        "É a ação para fora, a caixa de ferramentas do dia a dia: liderança situacional, feedback estruturado, reuniões 1:1 com propósito, delegação consciente, gestão de tempo e decisão sob pressão. É aqui que você aprende a delegar como quem entrega um desafio que faz a pessoa crescer, e para de fazer o trabalho da equipe no lugar dela.",
    },
    {
      letra: "P",
      nome: "Pessoas",
      q: "Quem está envolvido e como eu construo e desenvolvo esse time?",
      texto:
        "É o coração do método, onde a liderança deixa de ser sobre você e passa a ser sobre as pessoas reais que você conduz. Entram os protocolos de conversa difícil, gestão de conflito, segurança psicológica e a liderança situacional na prática, a técnica para parar de exigir que a equipe se adapte ao seu jeito e passar a trazer à tona o melhor de cada pessoa, inclusive de quem funciona de um jeito completamente diferente do seu.",
    },
    {
      letra: "A",
      nome: "Aprendizado Contínuo",
      q: "O que eu aprendo com o que fiz e como evoluo a partir disso?",
      texto:
        "É a ação para dentro, o caminho que impede a liderança de virar piloto automático. Aqui entram os ciclos de revisão que ajustam a rota enquanto o jogo ainda está rolando, e o uso da inteligência artificial como sparring de pensamento, não como muleta que decide por você.",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-[color:var(--vermelho)] px-5 py-16 text-[color:var(--creme)] md:py-28">
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="font-display text-[28px] md:text-[44px] leading-[1.15] max-w-4xl text-center mx-auto">
            MÉTODO M.A.P.A.: UMA ESTRUTURA PARA CONDUZIR PESSOAS, DECIDIR E
            AGIR COMO LÍDER
          </h2>
        </Reveal>

        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-[16px] leading-[1.7] text-[color:var(--creme)]/90 sm:mt-10 sm:space-y-6 sm:text-[18px] sm:leading-[1.75]">
          <Reveal as="p">
            Se liderar fosse só distribuir tarefas numa planilha, qualquer
            pessoa que sabe usar Notion ou Trello já seria um líder de
            verdade. Mas o desafio vai além de organizar o trabalho: está em
            conduzir as pessoas que fazem esse trabalho acontecer.
          </Reveal>
          <Reveal as="p">
            Em pequenas empresas ou grandes companhias, isso exige alinhar
            expectativas, delegar, lidar com conflitos e desenvolver pessoas
            que pensam e trabalham de maneiras diferentes. É nesse desafio que
            o Método M.A.P.A. atua.
          </Reveal>
          <Reveal as="p">
            O método é um fio condutor de pensamento para orientar suas
            decisões, conversas e ações. Onde hoje existe improviso, você
            aprende a percorrer quatro caminhos de raciocínio: Mentalidade,
            Ação, Pessoas e Aprendizado Contínuo. Caminhos que você treina em
            situações reais, até se tornarem parte da sua maneira de liderar.
          </Reveal>
          <Reveal as="p">
            A tese é simples: liderança não depende apenas de talento nato ou
            carisma. É método, disciplina e um fluxo de pensamento que orienta
            a ação. É técnica. E técnica se aprende, se treina e se aplica.
          </Reveal>
          <Reveal as="p">
            São quatro letras, quatro caminhos em uma sequência que ajuda você
            a pensar antes de agir e a aprender depois de cada decisão.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={i}>
              <div className="relative h-full overflow-hidden rounded-xl border border-[color:var(--laranja)]/30 bg-[color:var(--creme)]/5 p-6 sm:p-8">
                <div
                  aria-hidden
                  className="absolute -right-4 -bottom-16 font-display text-[220px] leading-none text-[color:var(--laranja)]/25 select-none"
                >
                  {p.letra}
                </div>
                <div className="relative">
                  <div className="font-display text-[28px] text-[color:var(--laranja)]">
                    {p.letra}. {p.nome}
                  </div>
                  <p className="mt-2 italic text-[color:var(--creme)]/80 text-[15px]">
                    Pergunta-âncora: {p.q}
                  </p>
                  <p className="mt-5 text-[16px] leading-[1.7]">{p.texto}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <MapaDiagram />

        <Reveal>
          <div className="mx-auto mt-10 max-w-3xl border-l-4 border-[color:var(--laranja)] pl-5 text-[16px] italic leading-[1.7] text-[color:var(--creme)]/90 sm:mt-14 sm:pl-6 sm:text-[17px]">
            Isso funciona porque comportamento não muda por acúmulo de
            conteúdo. Muda por repetição do mesmo caminho de raciocínio em
            situação real, até ele virar automático. É a mesma lógica de
            qualquer técnica que se aprende: no começo consciente e
            desconfortável, depois natural. E o método é um ciclo, não uma
            escada: cada situação que você resolve com ele te devolve mais
            consciência para a próxima decisão.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SECTION 7: PARA QUEM É / NÃO É ---------------- */
function ParaQuem() {
  const sim = [
    "Você foi promovido nos últimos meses e ainda opera com o mapa mental de especialista técnico, resolvendo no lugar da equipe porque é mais rápido do que conduzir.",
    "Você lidera há anos, já leu os livros e fez os treinamentos, mas continua travando na hora da conversa difícil, da decisão impopular ou da apresentação para a diretoria.",
    "Você carrega a sensação de ocupar um lugar grande demais e trabalha o dobro para compensar uma insegurança que nenhum resultado apaga.",
    "Você está numa situação que não pode esperar: uma demissão sem protocolo, um conflito aberto na equipe, uma reunião de resultados com o board na semana que vem.",
    "Você tem um destino claro, diretoria, gestão de gestores ou uma carreira executiva maior, e sabe que precisa de um sistema de decisão documentado para chegar lá.",
    "Você está se preparando para assumir sua primeira equipe e quer chegar a esse momento com método, segurança e ferramentas práticas.",
  ];
  const nao = [
    "Você não tem equipe direta e busca conteúdo genérico de autoconhecimento ou desenvolvimento pessoal.",
    "Você quer apenas um certificado para o currículo, sem intenção de mudar o que faz na frente da equipe.",
    "Você tem mais de dez anos de liderança consolidada e procura consultoria individual de alto investimento, feita sob medida para o seu caso.",
    "Você ainda não contratou ninguém e está numa fase de negócio em que não há time para liderar.",
    "Você procura suporte terapêutico para questões emocionais profundas fora do contexto do trabalho.",
  ];
  return (
    <section className="bg-[color:var(--creme)] px-5 py-16 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="font-display text-[32px] md:text-[46px] leading-[1.1] text-[color:var(--vermelho)] max-w-4xl text-center mx-auto">
            Antes de continuar, veja se este é o seu momento
          </h2>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[16px] leading-[1.7] sm:text-[18px]">
            O Método M.A.P.A. foi desenhado para quem lidera pessoas e sente
            que o cargo cobra uma técnica que ninguém entregou. Ele funciona
            para você se:
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg border-2 border-[color:var(--laranja)] bg-white/50 p-6 sm:p-8">
              <h3 className="font-display text-[24px] text-[color:var(--vermelho)]">
                É para você se:
              </h3>
              <ul className="mt-6 space-y-4">
                {sim.map((s, i) => (
                  <li key={i} className="flex gap-3 text-[16px] leading-[1.7]">
                    <CheckIcon />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="h-full rounded-lg border-2 border-[color:var(--preto)]/20 bg-white/30 p-6 sm:p-8">
              <h3 className="font-display text-[24px] text-[color:var(--preto)]/70">
                Não é para você se:
              </h3>
              <ul className="mt-6 space-y-4">
                {nao.map((s, i) => (
                  <li key={i} className="flex gap-3 text-[16px] leading-[1.7]">
                    <XIcon />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-1 shrink-0 text-[color:var(--laranja)]"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10.5l4 4 8-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function XIcon() {
  return (
    <svg
      className="mt-1 shrink-0 text-[color:var(--preto)]/50"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------------- SECTION 8: ENTREGÁVEIS ---------------- */
function Entregaveis() {
  const items = [
    {
      t: "Curso completo do Método M.A.P.A.",
      d: "Com 23 vídeo-aulas em 6 módulos + aulas bônus, cobrindo os quatro pilares (Mentalidade, Ação, Pessoas e Aprendizado Contínuo) e as ferramentas de cada um, com um protocolo aplicável ao fim de cada aula.",
      v: "R$ 1.697,00",
    },
    {
      t: "AS FERRAMENTAS PROPRIETÁRIAS DO MÉTODO MAPA",
      d: "Prontas para usar:\u00a0 o Método A.C.T. para estruturar conversas difíceis, o 3Cs Integrado para desenvolver o time e o Loop AAA para revisar e ajustar a rota.",
      v: "R$ 397,00",
    },
    {
      t: "Acesso à plataforma por 12 meses",
      d: "Acesse as aulas e os materiais do curso no seu ritmo, durante 12 meses, com todas as atualizações de conteúdo incluídas no período, sem custo adicional.",
      v: "R$ 300,00",
    },
    {
      t: "CERTIFICADO E MATERIAIS DE APOIO",
      d: "Receba o certificado de conclusão do Método M.A.P.A. ao concluir os 6 módulos. Você também conta com roteiros, materiais de apoio, indicações de leitura e prompts para aplicar as ferramentas do método com o Mentor Digital.",
      v: "",
    },
  ];
  return (
    <section className="bg-[color:var(--vermelho)] px-5 py-16 text-[color:var(--creme)] md:py-28">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.1]">
            O que você recebe ao entrar
          </h2>
        </Reveal>
        <Reveal>
          <div className="relative mx-auto mt-10 w-full max-w-[960px]">
            <img
              src={produtos960.url}
              srcSet={`${produtos640.url} 640w, ${produtos960.url} 960w, ${produtos1440.url} 1440w`}
              sizes="(max-width: 768px) 100vw, 960px"
              alt="Materiais da Mentoria VC_Líder"
              loading="lazy"
              decoding="async"
              width={1536}
              height={1024}
              className="mx-auto w-full rounded-lg"
            />
            <span className="absolute bottom-2 left-2 text-[10px] italic leading-tight text-[color:var(--creme)]/70 sm:text-[11px]">
              *Imagens meramente ilustrativas
            </span>
          </div>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-[1.7] text-[color:var(--creme)]/90 sm:text-[18px]">
            Não é mais talento e nem sorte. É técnica aplicada. Tudo o que está
            incluído na Mentoria VC_Líder para que você aplique na
            sua rotina real de liderança, do primeiro módulo ao acompanhamento
            contínuo.&nbsp;
          </p>
        </Reveal>
      </div>
      <div className="mx-auto max-w-[1100px] mt-12 grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={i}>
              <div className="relative h-full rounded-lg bg-[color:var(--creme)] p-6 text-[color:var(--preto)] sm:p-8">
                {it.v && (
                  <div className="absolute right-4 top-4 font-display text-[17px] text-[color:var(--laranja)] line-through decoration-[color:var(--preto)] decoration-2 sm:right-6 sm:top-6 sm:text-[22px]">
                    {it.v}
                  </div>
                )}
                <div className="pr-20 sm:pr-24">
                  <h3 className="font-display text-[22px] text-[color:var(--vermelho)]">
                    {it.t}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.7]">{it.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
    </section>
  );
}

/* ---------------- SECTION 9: BÔNUS ---------------- */
function Bonus() {
  const bonus = [
    {
      t: "MENTOR DIGITAL",
      d: "A IA conversacional treinada exclusivamente no Método M.A.P.A., disponível 24 horas por dia, durante 6 meses. É o sparring de pensamento que fica com você quando a Mentora não está: ajuda a preparar a conversa difícil na véspera, a validar uma decisão antes da reunião com o board e a recalcular a rota quando a situação muda no meio do caminho. Você recebe também os prompts prontos recomendados para operar todas as ferramentas proprietárias do método M.A.P.A.\u00a0dentro dele: o A.C.T., o 3Cs Integrado e o Loop AAA, para aplicar cada uma com precisão sem depender de saber formular a pergunta certa. Depois fica mais fácil, pois é como conversar com a Mentora.",
      v: "R$ 299,40",
    },
    {
      t: "Radar do Líder",
      d: "O Radar do Líder\u00a0é um diagnóstico contínuo que, reaplicado ao longo da sua jornada, aponta, a cada momento, em qual dos 4 pilares (M.A.P.A.)\u00a0você ainda está travado e qual módulo do curso deve revisar. Em vez de recomeçar o curso do zero, você volta direto ao ponto que resolve a sua situação atual.\n6 meses de acesso.",
      v: "R$ 197,00",
    },
    {
      t: "GRUPO DE WHATSAPP DO CURSO",
      d: "O canal onde você recebe em primeira mão as atualizações, os novos conteúdos e os avisos importantes do Método M.A.P.A. ao longo da sua jornada, para não perder nada do que é liberado.",
      v: "R$ 297,00",
    },
  ];
  return (
    <section className="bg-[color:var(--creme)] px-5 py-16 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="font-display text-[32px] md:text-[46px] leading-[1.1] text-[color:var(--vermelho)] max-w-4xl text-center mx-auto">
            UM ECOSSISTEMA DE DESENVOLVIMENTO QUE VAI ALÉM DAS VÍDEO-AULAS
          </h2>
          <img
            src={mrg960.url}
            srcSet={`${mrg640.url} 640w, ${mrg960.url} 960w, ${mrg1440.url} 1440w`}
            sizes="(max-width: 768px) 100vw, 1100px"
            alt="Ecossistema VC_Líder: Mentor Digital, Radar do Líder e Grupo de WhatsApp"
            loading="lazy"
            decoding="async"
            width={1774}
            height={887}
            className="mx-auto mt-8 w-full max-w-[1100px]"
          />
          <p className="mt-6 text-[17px] md:text-[18px] leading-[1.8] text-center max-w-5xl mx-auto whitespace-pre-line">
            Você está entrando em um ecossistema completo de desenvolvimento de liderança. 
            O Radar do Líder mostra onde você está. O Método M.A.P.A. te dá a estrutura para desenvolver suas competências. O Mentor Digital te acompanha nas decisões reais. E o Radar volta a mostrar o quanto você evoluiu. 
            Diagnóstico. Desenvolvimento. Aplicação. Evolução. É um ciclo. 
            Porque o objetivo nunca foi colocar mais informação na sua cabeça. É transformar informação em comportamento.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {bonus.map((b, i) => (
            <Reveal key={i}>
              <div className="relative h-full rounded-lg border border-[color:var(--terracota)]/30 bg-white/70 p-6 pt-12 sm:p-8 sm:pt-14">
                <div className="absolute top-0 left-8 -translate-y-1/2 rounded-md bg-[color:var(--laranja)] px-4 py-1.5 font-display text-sm text-[color:var(--creme)] tracking-widest uppercase">
                  {i === 0 ? "ferramenta 1" : i === 1 ? "ferramenta 2" : "BÔNUS"}
                </div>
                <h3 className="font-display text-[22px] text-[color:var(--vermelho)]">
                  {b.t}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7]">{b.d}</p>
                <div className="mt-6 pt-4 border-t border-[color:var(--terracota)]/25 font-display text-2xl text-[color:var(--laranja)] line-through decoration-[color:var(--preto)] decoration-2">
                  Valor: {b.v}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 10: STACK DE VALOR ---------------- */
function StackValor() {
  const rows = [
    ["Curso completo do Método M.A.P.A. (23 vídeo-aulas, aulas bônus, 6 módulos)", "R$ 1.697"],
    ["As ferramentas proprietárias do Método M.A.P.A.\u00a0 (A.C.T., 3Cs Integrado e Loop AAA)", "R$ 397"],
    ["Acesso à plataforma por 12 meses com atualizações incluídas", "R$ 300"],
    ["Mentor Digital (IA treinada no Método M.A.P.A., 24 horas por dia, 6 meses, com os prompts das ferramentas)", "R$ 299,40"],
    ["Radar do Líder (diagnóstico contínuo, 6 meses)", "R$ 197,00"],
    ["Bônus: Grupo de WhatsApp do curso (atualizações e novos conteúdos)", "R$ 297,00"],
  ];
  return (
    <section className="relative overflow-hidden bg-[color:var(--vermelho)] text-[color:var(--creme)] py-20 md:py-28 px-5">
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="font-display text-[30px] md:text-[46px] leading-[1.1] text-center">
            OPORTUNIDADE DE LANÇAMENTO*
          </h2>
          <p className="mt-2 text-center text-[14px] md:text-[16px] text-[color:var(--creme)]/80">
            *Por tempo limitado
          </p>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-10 max-w-[720px] rounded-xl bg-[color:var(--creme)] p-6 text-[color:var(--preto)] shadow-2xl sm:mt-14 sm:p-8 md:p-12">
            <ul className="space-y-4">
              {rows.map(([label, price], i) => (
                <li
                  key={i}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-3 text-[15px] md:grid-cols-[minmax(0,1fr)_auto_minmax(4rem,0.6fr)] md:text-[16px]"
                >
                  <span className="flex-1 leading-[1.5]">{label}</span>
                  <span
                    aria-hidden
                    className="hidden min-w-16 translate-y-[-4px] border-b border-dotted border-[color:var(--preto)]/40 md:block"
                  />
                  <span className="font-semibold whitespace-nowrap line-through decoration-[color:var(--preto)] decoration-2">
                    {price}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[color:var(--terracota)]/40 text-center">
              <div className="text-[16px]">
                Valor total somado:{" "}
                <span className="line-through opacity-70">R$ 3.187,40</span>
              </div>
              <div className="mt-4 font-display text-[56px] md:text-[72px] leading-none text-[color:var(--laranja)]">
                R$ 997
              </div>
              <div className="mt-2 text-[16px]">
                à vista no cartão ou no Pix, ou 12 vezes de R$ 103,11 no cartão.
              </div>
              <div className="mt-8">
                <CTAButton href={LINK_CHECKOUT} size="lg" className="w-full">
                  Quero liderar de verdade
                </CTAButton>
              </div>
              <p className="mt-6 text-[14px] leading-[1.6] font-light text-left text-[color:var(--preto)]/75">
                A diferença entre os R$ 3.187,40 e o preço que você paga não é
                desconto artificial inflado para parecer oferta. É porque o
                Mentor Digital e o Radar do Líder funcionam em escala digital,
                sem o custo de uma consultoria presencial equivalente. Isso
                permite entregar o mesmo tipo de suporte individualizado por uma
                fração do valor que um coaching avulso cobraria em poucas horas.
                Com a diferença de que aqui "ele" fica disponível por 6 meses
                inteiros, não por sessão.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SECTION 11: PROVA SOCIAL 2 ---------------- */
// ATENÇÃO: depoimentos abaixo são FICTÍCIOS. Substituir por reais antes de publicar.
function ProvaSocial2() {
  const depos = [
    {
      nome: "Renata Souza",
      cargo: "gerente de atendimento",
      contexto: (
        <>
          Antes, adiava havia meses a decisão de desligar um colaborador que
          não entregava, porque não tinha protocolo para conduzir a conversa
          sem parecer injusta com o resto do time. Depois de aplicar o Método
          A.C.T. no pilar de Ação, conduziu{" "}
          <b className="font-semibold">
            dois desligamentos necessários em 45 dias
          </b>
          , sem drama e sem ruído na equipe.
        </>
      ),
      quote: (
        <>
          "O turnover voluntário do meu time{" "}
          <b className="font-semibold">caiu no trimestre seguinte</b>, porque as
          pessoas certas passaram a se sentir seguras de que eu resolvia o que
          precisava ser resolvido."
        </>
      ),
    },
    {
      nome: "Thiago Almeida",
      cargo: "coordenador de logística",
      contexto: (
        <>
          Fazia o trabalho da equipe porque achava que era mais rápido, e
          respondia em média 15 mensagens fora do horário por semana. Depois do
          Contrato de Delegação do pilar de Ação, esse número caiu para{" "}
          <b className="font-semibold">3 mensagens por semana em 30 dias</b>,
          sem perder qualidade de entrega.
        </>
      ),
      quote: (
        <>
          "Descobri que eu era o gargalo. O método me tirou do meio do caminho
          da própria equipe."
        </>
      ),
    },
    {
      nome: "Juliana Prado",
      cargo: "supervisora de qualidade",
      contexto: (
        <>
          Travava nas apresentações para a diretoria e passava dias preparando
          cada slide por insegurança. Depois de trabalhar o pilar de
          Mentalidade e a presença executiva, apresentou um plano de
          reestruturação e teve{" "}
          <b className="font-semibold">aprovação na primeira reunião</b>.
        </>
      ),
      quote: (
        <>
          "Rodei o mapa mental antes de entrar na sala. Foi a primeira vez que
          apresentei sem a sensação de que iam descobrir que eu não pertencia
          ali."
        </>
      ),
    },
    {
      nome: "Marcos Teixeira",
      cargo: "gerente comercial regional",
      contexto: (
        <>
          Achava que delegar era perder controle sobre o resultado. Depois de
          formar um segundo nível de liderança na equipe com o pilar de
          Pessoas, tirou{" "}
          <b className="font-semibold">
            3 dias de férias sem ser acionado uma única vez em 90 dias
          </b>
          .
        </>
      ),
      quote: (
        <>
          "A equipe rodou sem mim. Foi quando entendi que liderar de verdade é
          construir gente que decide sozinha."
        </>
      ),
    },
  ];
  return (
    <section
      data-placeholder="depoimentos-ficticios"
      className="bg-[color:var(--creme)] py-20 md:py-28 px-5"
    >
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="font-display text-[30px] md:text-[46px] leading-[1.1] text-[color:var(--vermelho)] max-w-4xl text-center mx-auto">
            O que aconteceu com quem trocou a intuição pelo método
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {depos.map((d, i) => (
            <Reveal key={i}>
              <div className="h-full rounded-lg border border-[color:var(--terracota)]/30 bg-white/70 p-8">
                <div className="flex items-center gap-4">
                  <div
                    className="h-16 w-16 rounded-full bg-[color:var(--terracota)]/25 border border-[color:var(--terracota)]/40 grid place-items-center text-[color:var(--vermelho)] font-display text-xl"
                    aria-label="Foto placeholder"
                  >
                    {d.nome
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="font-display text-[22px] text-[color:var(--vermelho)] leading-tight">
                      {d.nome}
                    </div>
                    <div className="text-sm text-[color:var(--preto)]/70">
                      {d.cargo}
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-[15px] leading-[1.7]">{d.contexto}</p>
                <p className="mt-4 text-[15px] leading-[1.7] italic border-l-2 border-[color:var(--laranja)] pl-4">
                  {d.quote}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 12: SUPORTE ---------------- */
function Suporte() {
  return (
    <section className="bg-[color:var(--terracota)] px-5 py-16 text-[color:var(--creme)] md:py-28">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <h2 className="font-display text-[30px] md:text-[46px] leading-[1.1]">
            Você não fica sozinho na hora em que a decisão aperta
          </h2>
        </Reveal>

        <div className="mt-10 space-y-8">
          <Reveal>
            <SupportBlock
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              }
              text="O suporte central do método é o Mentor Digital M.A.P.A., disponível 24 horas por dia durante os 6 primeiros meses. Ele existe justamente para o momento em que a dúvida aparece longe de qualquer atendimento humano: a noite anterior à conversa difícil, os 10 minutos antes da reunião com a diretoria, o domingo em que a cabeça não desliga pensando em como conduzir um conflito na segunda-feira."
            />
          </Reveal>
          <Reveal>
            <SupportBlock
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H8l-5 3V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              }
              text="Você entra também no Grupo de WhatsApp do curso, sem prazo para sair, o canal onde chegam as atualizações, os novos conteúdos e os avisos importantes do Método M.A.P.A. em primeira mão, para você não perder nada do que é liberado ao longo da sua jornada."
            />
          </Reveal>
          <Reveal>
            <SupportBlock
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6h18v12H3z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 6l9 7 9-7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              }
              text="E para dúvidas sobre acesso à plataforma, pagamento ou qualquer questão do curso, o atendimento é por e-mail, com resposta em até 24 horas úteis, no: suporte@julienesalvan.com.br"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SupportBlock({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex gap-4 sm:gap-5">
      <div className="shrink-0 text-[color:var(--laranja)]">{icon}</div>
      <p className="min-w-0 text-[16px] leading-[1.7] sm:text-[17px] sm:leading-[1.75]">{text}</p>
    </div>
  );
}

/* ---------------- SECTION 13: GARANTIA ---------------- */
function Garantia() {
  return (
    <section className="bg-[color:var(--creme)] px-5 py-16 md:py-28">
      <div className="mx-auto max-w-[1100px] grid gap-12 md:grid-cols-[240px_1fr] items-center">
        <Reveal>
          <GuaranteeSeal />
        </Reveal>
        <div>
          <Reveal>
            <h2 className="font-display text-[30px] md:text-[44px] leading-[1.1] text-[color:var(--vermelho)]">
              EXPERIMENTE POR 7 DIAS. SE NÃO FOR PARA VOCÊ, SOLICITE O REEMBOLSO INTEGRAL.
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-6 text-[16px] leading-[1.7] sm:text-[18px] sm:leading-[1.75]">
              Você tem 7 dias corridos, a partir da data da compra, para acessar
              os primeiros módulos, conversar com o Mentor Digital e aplicar
              pelo menos um protocolo do método na sua equipe. Tempo suficiente
              para sentir na prática se a técnica corresponde à realidade da
              sua liderança.
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-[16px] leading-[1.7] sm:text-[18px] sm:leading-[1.75]">
              Se, dentro desse prazo, você concluir que o método não é para o
              seu momento, basta pedir o reembolso. Você recebe de volta o
              valor integral, sem formulário longo, sem justificativa detalhada
              e sem constrangimento. O risco de experimentar fica com quem
              criou o método, não com você.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 14: AUTORIDADE ---------------- */
function Autoridade() {
  return (
    <section className="bg-[color:var(--vermelho)] px-5 py-16 text-[color:var(--creme)] md:py-28">
      <div className="mx-auto max-w-[1100px] flex flex-col gap-12 md:grid md:grid-cols-[minmax(0,520px)_1fr] md:items-start">
        {/* Headline — abre a seção no mobile, antes da foto da Juliene */}
        <Reveal className="order-1 md:order-none md:col-start-2 md:row-start-1">
          <h2 className="font-display text-[30px] md:text-[46px] leading-[1.1]">
            QUEM CONSTRUIU ESTE MÉTODO REALIZA A GESTÃO DE LIDERANÇAS DE ALTO NÍVEL, TODO DIA
          </h2>
        </Reveal>

        {/* Fotos da Juliene */}
        <div className="flex flex-col gap-6 order-2 md:order-none md:row-span-2 md:col-start-1 md:row-start-1">
          <Reveal>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-[color:var(--laranja)]">
              <img
                src={mentora960.url}
                srcSet={`${mentora640.url} 640w, ${mentora960.url} 960w, ${mentora1440.url} 1440w`}
                sizes="(max-width: 768px) 100vw, 520px"
                alt="Juliene Salvan, diretora de RH e mentora de líderes, em retrato de corpo inteiro com blazer bege e fundo laranja"
                loading="lazy"
                decoding="async"
                width={1920}
                height={1424}
                className="h-full w-full object-contain object-center"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src={autoridade960.url}
                srcSet={`${autoridade640.url} 640w, ${autoridade960.url} 960w, ${autoridade1440.url} 1440w`}
                sizes="(max-width: 768px) 100vw, 520px"
                alt="Juliene Salvan em destaque nos principais veículos de comunicação"
                loading="lazy"
                decoding="async"
                width={1774}
                height={887}
                className="mx-auto h-auto w-full object-contain"
              />
            </div>
          </Reveal>
        </div>

        {/* Bio + indicadores */}
        <div className="order-3 md:order-none md:col-start-2 md:row-start-2">
          <div className="space-y-5 text-[16px] leading-[1.7] text-[color:var(--creme)]/90 sm:text-[17px] sm:leading-[1.75]">
            <Reveal as="p">
              Juliene Salvan é diretora de RH em um dos maiores grupos de
              comunicação do Brasil e atua há mais de 20 anos na gestão de
              pessoas. Liderar líderes e conduzir conversas difíceis fazem
              parte da sua rotina. É dela a responsabilidade de decidir sobre
              gente, conflito e resultado sob a pressão real de um grande
              negócio.
            </Reveal>
            <Reveal as="p">
              Ao longo dessa trajetória, mentorou e desenvolveu mais de 200
              líderes: de gestores recém-promovidos aprendendo a conduzir sua
              primeira equipe a executivos experientes destravando conversas
              difíceis que vinham adiando por meses. Dessa experiência nasceu
              o Método M.A.P.A., que transforma os aprendizados da gestão em
              ferramentas práticas para liderar.
            </Reveal>
            <Reveal as="p">
              Juliene também comanda o podcast Passa lá no RH, do Band
              Jornalismo, onde discute os dilemas de quem lidera. Sua abordagem
              é direta: liderança é técnica. E técnica se aprende, se treina e
              se aplica.
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 md:gap-8">
            {[
              ["20+", "anos em gestão de pessoas"],
              ["200+", "líderes mentorados"],
              ["100+", "episódios de podcast sobre gestão"],
            ].map(([n, l], i) => (
              <Reveal key={i}>
                <div className="text-center md:text-left">
                   <div className="font-display text-[36px] leading-none text-[color:var(--laranja)] min-[390px]:text-[40px] md:text-[64px]">
                    {n}
                  </div>
                  <div className="mt-2 text-[13px] md:text-[14px] text-[color:var(--creme)]/75 uppercase tracking-wide">
                    {l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 15: FAQ ---------------- */
function FAQSection() {
  const items = [
    {
      q: "Não tenho tempo para mais um curso. Como isso encaixa na minha rotina?",
      a: "As 23 aulas são curtas, pensadas para blocos de 15 a 20 minutos, e cada uma termina com um protocolo para aplicar já na próxima conversa ou reunião. O método não ocupa tempo extra na agenda, ele reorganiza o tempo que você já perde hoje com retrabalho, reunião que se repete e decisão que precisa ser refeita.",
    },
    {
      q: "Já fiz outros cursos de liderança e nenhum mudou minha prática. Por que este seria diferente?",
      a: "Porque a maioria entrega conteúdo linear e te deixa sozinho depois. Aqui o Radar do Líder identifica exatamente em qual dos quatro pilares você trava na aplicação, e o Mentor Digital fica com você no momento real da decisão. O que faltava nos cursos anteriores não era conteúdo, era o elo entre o que você aprende e o que você faz na frente da equipe.",
    },
    {
      q: "Minha empresa já oferece treinamento de liderança. Ainda preciso disto?",
      a: "O treinamento corporativo ensina o que a organização precisa que todos os gestores saibam, para uma sala inteira ao mesmo tempo. O Método M.A.P.A. resolve o que você especificamente trava na sua equipe, com diagnóstico individual e uma ferramenta disponível às 22h da véspera da sua reunião mais difícil. Um não substitui o outro, mas só o segundo é sob a sua medida.",
    },
    {
      q: "Tenho medo de comprar e não terminar, como outros cursos parados no meu histórico.",
      a: "Os módulos são independentes: quem conclui só três já aplicou protocolos de mentalidade, delegação e feedback na prática. E o Radar do Líder aponta o pilar de maior urgência para o seu momento, para você ir direto ao que resolve a sua situação, sem precisar seguir uma ordem linear que compete com a sua rotina.",
    },
    {
      q: "Como sei se a Juliene tem experiência real de gestão, e não só teoria?",
      a: "Ela é diretora de RH em um dos maiores grupos de comunicação do país e já mentorou mais de 200 líderes dentro desse contexto, ao longo de mais de 20 anos. O método nasceu dessas situações reais, não apenas de leitura e pesquisa. E os 7 dias de garantia existem para você confirmar essa profundidade prática antes de manter o investimento.",
    },
    {
      q: "Preciso já ser gestor para aproveitar, ou serve para quem vai assumir uma equipe?",
      a: "Serve para os dois. O pilar de Mentalidade prepara a virada de identidade de quem está prestes a assumir, e os pilares de Ação e Pessoas entregam os protocolos para quem já lidera e quer parar de improvisar. O ponto de partida muda, o método é o mesmo.",
    },
    {
      q: "Qual o formato das aulas?",
      a: "São 23 vídeo-aulas organizadas em 6 módulos, 100% online, dentro da plataforma. Cada aula é curta, pensada para blocos de 15 a 20 minutos, e termina com um protocolo prático para você aplicar na sua equipe. Você assiste no seu ritmo, de qualquer dispositivo, quantas vezes precisar.",
    },
    {
      q: "Terei suporte ao longo da formação?",
      a: "Sim, em três frentes. O Mentor Digital M.A.P.A. fica disponível 24 horas por dia durante os 6 primeiros meses para tirar dúvidas de aplicação no momento real da decisão. O Grupo de WhatsApp do curso, com acesso sem prazo, traz as atualizações e novos conteúdos. E o atendimento por e-mail responde questões de acesso, pagamento e plataforma em até 24 horas úteis.",
    },
    {
      q: "É possível parcelar? Quais as formas de pagamento?",
      a: "Sim. Você pode pagar R$ 997 à vista no cartão ou no Pix, ou parcelar no cartão de crédito em até 12 vezes de R$ 103,11.",
    },
    {
      q: "A liberação das aulas é imediata?",
      a: "Sim. Assim que a compra é confirmada, você recebe acesso imediato a todas as aulas e a todos os bônus, sem liberação gotejada. Você começa pelo pilar que a sua situação atual pede, no mesmo dia.",
    },
    {
      q: "Tem certificado e por quanto tempo tenho acesso?",
      a: "Sim, você recebe o certificado de conclusão do Método M.A.P.A. ao concluir os 6 módulos. O acesso à plataforma, às aulas e aos materiais do curso é de 12 meses, com as atualizações incluídas no período. O Mentor Digital e o Radar do Líder ficam disponíveis durante os primeiros 6 meses.",
    },
    {
      q: "A mentoria inclui encontros com Juliene Salvan?",
      a: "Nesta formação, você aprende com Juliene nas aulas gravadas e recebe acompanhamento pelo Mentor Digital: uma inteligência artificial baseada no Método M.A.P.A., com a qual pode conversar sobre seus desafios e explorar como aplicar as ferramentas na sua rotina.\n\nO Mentor Digital fica disponível 24 horas por dia durante os primeiros 6 meses. Esta oferta não inclui encontros ao vivo nem atendimento individual com Juliene Salvan.",
    },
  ];
  return (
    <section className="bg-[color:var(--creme)] px-5 py-16 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="font-display text-[30px] md:text-[46px] leading-[1.1] text-[color:var(--vermelho)] max-w-4xl text-center mx-auto">
            As perguntas que passam pela sua cabeça antes de decidir
          </h2>
        </Reveal>
        <div className="mt-12">
          <FAQ items={items} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 16: OFERTA FINAL ---------------- */
function OfertaFinal() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--vermelho)] px-5 py-16 text-[color:var(--creme)] md:py-32">
      <Brackets size={700} opacity={0.20} />
      <div className="relative z-10 mx-auto max-w-[900px] text-center">
        <Reveal>
          <h2 className="font-display text-[30px] md:text-[50px] leading-[1.1]">
            A CONTA QUE NINGUÉM FAZ: QUANTO CUSTA CONTINUAR LIDERANDO NO
            IMPROVISO?
          </h2>
        </Reveal>

        <div className="mt-8 space-y-5 text-left text-[16px] leading-[1.7] text-[color:var(--creme)]/90 sm:mt-10 sm:space-y-6 sm:text-[18px] sm:leading-[1.75]">
          <Reveal as="p">
            O cargo você já tem. O que ainda não veio junto com ele é a técnica
            de liderar, e é ela que separa quem carrega o crachá de quem a
            equipe segue de verdade. Enquanto essa técnica não chega, a fatura
            corre por fora, na reunião que termina sem decisão, no talento que
            pede demissão, na vaga de diretoria que vai para outra pessoa com o
            mesmo tempo de casa que você, só que com histórico de decisão
            documentado.
          </Reveal>
          <Reveal as="p">
            Por R$ 997 à vista no cartão ou no Pix, ou 12 vezes de R$ 103,11 no cartão, você está entrando em um ecossistema completo de desenvolvimento de liderança: com o curso completo do Método M.A.P.A. com 23 vídeo-aulas, as ferramentas proprietárias, o Mentor Digital treinado no método por 6 meses, o Radar do Líder, o Grupo de WhatsApp sem prazo e Certificado de Conclusão do Método M.A.P.A. emitido ao final dos 6 módulos. E mais: Roteiros, Materiais de apoio, Indicações de leitura, Prompts para usar todo o potencial do Mentor Digital. Um Ecossistema de Desenvolvimento que vale mais de R$ 3.000,00, com liberação para uso imediato assim que a compra é confirmada.
          </Reveal>
          <Reveal as="p">
            E você não decide nada agora no escuro: são 7 dias de garantia para
            testar o método na sua própria equipe. Se não for para você, o
            reembolso é integral.
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-14 font-display text-[26px] md:text-[40px] leading-[1.15] text-[color:var(--laranja)]">
            Liderança não é dom. É técnica.<br />
            E técnica, a partir de hoje, você pode aprender.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-12">
            <CTAButton href={LINK_CHECKOUT} size="lg">
              Quero aprender a técnica de liderar
            </CTAButton>
          </div>
        </Reveal>

        <p className="mt-8 text-[14px] font-light text-[color:var(--creme)]/60">
          Seus dados estão protegidos e não serão compartilhados com terceiros.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--preto)] px-5 pt-10 pb-6 text-[color:var(--creme)]/70 md:py-10">
      <div className="mx-auto max-w-[1100px] flex flex-col items-center gap-4">
        <Logo onDark height={60} />
        <p className="text-[11px] text-center whitespace-pre-line leading-relaxed text-[color:var(--creme)]/50">
          © {new Date().getFullYear()} VC_Líder. Todos os direitos reservados. SDA Educação e Desenvolvimento LTDA | CNPJ: 27.008.329/0001-55 | São Paulo/SP | suporte@julienesalvan.com.br |{" "}
          {"\n"}
          Este produto não garante a obtenção de resultados. Qualquer estratégia mencionada neste site ou no produto não deve ser interpretada como uma promessa ou garantia de resultados. O seu nível de sucesso em atingir os resultados divulgados depende do seu tempo dedicado, dedicação, conhecimento e competência técnica. Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc. A Hotmart é a plataforma que processa os pagamentos e distribui o produto digital. Ela não realiza o controle editorial prévio dos produtos comercializados, tampouco avalia a tecnicidade e experiência daqueles que os produzem.
        </p>
      </div>
    </footer>
  );
}
