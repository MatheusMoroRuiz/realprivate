/**
 * Conteúdo institucional do site.
 *
 * Os textos derivam do "Documento de Direcionamento Estratégico Institucional"
 * da Real Private — propósito, visão, missão, valores, posicionamento,
 * diferenciais, perfil de cliente ideal e governança de atendimento.
 *
 * Manter a copy em dados (e não espalhada no JSX) permite revisar a
 * comunicação institucional sem tocar em componentes.
 */

export type Pilar = {
  readonly rotulo: string;
  readonly titulo: string;
  readonly texto: string;
};

/** Faixa de credibilidade da home — §2.6 Diferenciais competitivos. */
export const pilaresDeAtendimento: readonly Pilar[] = [
  {
    rotulo: "Atendimento",
    titulo: "Personalizado",
    texto:
      "Cada empresa possui uma realidade própria. Não atuamos de forma padronizada: buscamos compreender o perfil, a necessidade e o contexto de cada cliente.",
  },
  {
    rotulo: "Análise",
    titulo: "Criteriosa",
    texto:
      "Antes de qualquer solução, uma avaliação responsável do perfil da empresa, da finalidade da operação e da sua viabilidade.",
  },
  {
    rotulo: "Relacionamento",
    titulo: "Direto",
    texto:
      "Aqui, empresas falam com pessoas. Proximidade, diálogo direto e vínculos construídos para o longo prazo.",
  },
  {
    rotulo: "Sigilo",
    titulo: "Discrição",
    texto:
      "Operações conduzidas com seriedade e confidencialidade, respeitando as informações e as relações envolvidas.",
  },
] as const;

export type Solucao = {
  readonly slug: string;
  readonly rotulo: string;
  readonly titulo: string;
  readonly resumo: string;
  readonly detalhe: string;
};

/** Frentes de atuação. */
export const solucoes: readonly Solucao[] = [
  {
    slug: "gestao-de-capital",
    rotulo: "Gestão",
    titulo: "Gestão de capital",
    resumo:
      "Organizamos e estruturamos o capital da empresa de forma estratégica, com previsibilidade financeira e continuidade operacional.",
    detalhe:
      "Ajudamos empresas a organizar e gerenciar seu capital de forma estratégica, garantindo previsibilidade financeira e continuidade operacional. O ponto de partida é sempre entender o momento da empresa, não empurrar um produto.",
  },
  {
    slug: "antecipacao-de-recebiveis",
    rotulo: "Antecipação",
    titulo: "Antecipação de recebíveis",
    resumo:
      "Antecipação como ferramenta de apoio à gestão financeira, sempre precedida de análise e critério.",
    detalhe:
      "Oferecemos soluções de antecipação de recebíveis como ferramenta de apoio à gestão financeira, sempre com análise e critério. Nem toda situação exige antecipação, e nem toda empresa deve utilizá-la, parte do nosso trabalho é dizer isso com clareza.",
  },
  {
    slug: "apoio-ao-fluxo-financeiro",
    rotulo: "Fluxo",
    titulo: "Apoio ao fluxo financeiro",
    resumo:
      "Equilíbrio do fluxo financeiro, evitando decisões impulsivas e riscos desnecessários.",
    detalhe:
      "Atuamos para equilibrar o fluxo financeiro das empresas, evitando decisões impulsivas e riscos desnecessários. A urgência é considerada, mas nunca substitui a análise e a responsabilidade.",
  },
  {
    slug: "relacao-com-empresas",
    rotulo: "Relação",
    titulo: "Relação com empresas",
    resumo:
      "Relacionamento direto, proximidade e entendimento real do negócio de cada empresa atendida.",
    detalhe:
      "Nosso trabalho é baseado em relacionamento direto, proximidade e entendimento real do negócio de cada empresa atendida. A relação não termina na operação: acompanhamos o pós, porque parceria se constrói com continuidade.",
  },
] as const;

/** §2.4 Valores. */
export const valores: readonly Pilar[] = [
  {
    rotulo: "Valor",
    titulo: "Confiança",
    texto:
      "Relações construídas sobre credibilidade, transparência e responsabilidade. Cada operação preserva a confiança entre empresa, cliente, parceiros e mercado.",
  },
  {
    rotulo: "Valor",
    titulo: "Agilidade responsável",
    texto:
      "Velocidade no atendimento e na condução das operações, sem abrir mão da análise criteriosa e da segurança de cada decisão.",
  },
  {
    rotulo: "Valor",
    titulo: "Atendimento personalizado",
    texto:
      "Cada empresa possui uma realidade própria. Por isso não atuamos de forma padronizada ou engessada.",
  },
  {
    rotulo: "Valor",
    titulo: "Relacionamento de longo prazo",
    texto:
      "Vínculos consistentes, construídos por indicação, proximidade e reputação — não por operações pontuais.",
  },
  {
    rotulo: "Valor",
    titulo: "Ética e discrição",
    texto:
      "Seriedade, confidencialidade e respeito às informações, necessidades e particularidades de cada cliente.",
  },
  {
    rotulo: "Valor",
    titulo: "Flexibilidade com critério",
    texto:
      "Flexibilidade não é informalidade. É capacidade de adaptação com responsabilidade, governança e análise adequada.",
  },
] as const;

/** §2.5 Posicionamento — os quatro pilares. */
export const pilaresDePosicionamento: readonly Pilar[] = [
  {
    rotulo: "01",
    titulo: "Relacionamento de confiança",
    texto:
      "Crescemos por confiança, não por volume desorganizado. A maior parte das operações nasce de indicação e reputação.",
  },
  {
    rotulo: "02",
    titulo: "Agilidade na condução",
    texto:
      "Respostas e encaminhamentos rápidos, reduzindo burocracias desnecessárias sempre que possível.",
  },
  {
    rotulo: "03",
    titulo: "Personalização por perfil",
    texto:
      "Abordagem consultiva e seletiva, adaptada ao perfil, à necessidade e ao histórico de cada cliente.",
  },
  {
    rotulo: "04",
    titulo: "Credibilidade de mercado",
    texto:
      "Mais de duas décadas de atuação no mercado financeiro sustentam a segurança que oferecemos a clientes e parceiros.",
  },
] as const;

/** §6.2 Etapas mínimas da operação — governança de atendimento. */
export type Etapa = {
  readonly numero: string;
  readonly titulo: string;
  readonly texto: string;
};

export const etapasDaOperacao: readonly Etapa[] = [
  {
    numero: "01",
    titulo: "Primeiro contato",
    texto:
      "Registramos a origem da demanda — cliente atual, parceiro estratégico ou indicação — e retornamos rapidamente.",
  },
  {
    numero: "02",
    titulo: "Entendimento da necessidade",
    texto:
      "Antes de pedir documentos, entendemos a finalidade da operação, o prazo, o valor envolvido e o contexto da empresa.",
  },
  {
    numero: "03",
    titulo: "Análise e documentação",
    texto:
      "Solicitamos apenas o necessário para a análise inicial. A documentação é proporcional ao tipo, ao valor e à complexidade da operação.",
  },
  {
    numero: "04",
    titulo: "Encaminhamento e formalização",
    texto:
      "Você sabe em que etapa a operação está, quais pendências existem e quais são os próximos passos — avançando ou não.",
  },
  {
    numero: "05",
    titulo: "Acompanhamento pós-operação",
    texto:
      "Mantemos contato para confirmar a conclusão, entender novas necessidades e preservar o relacionamento.",
  },
] as const;

/** §6.4 Checklist documental inicial. */
export const checklistDocumental: readonly string[] = [
  "Dados cadastrais da empresa e CNPJ",
  "Contrato social ou documento societário aplicável",
  "Documentos dos sócios ou responsáveis",
  "Comprovante de endereço",
  "Informações financeiras básicas",
  "Documentos relacionados à operação",
  "Histórico ou contexto da demanda",
  "Dados bancários, quando aplicável",
] as const;

/** §3.6 Segmentos com aderência. */
export const segmentos: readonly string[] = [
  "Comércio",
  "Indústria",
  "Serviços",
  "Distribuição",
  "Construção",
  "Agronegócio",
  "Transportes",
  "Empresas familiares estruturadas",
] as const;

/** §3.1 e §3.4 — perfil de cliente ideal. */
export const perfilDeCliente: readonly string[] = [
  "Empresa formalizada, com operação ativa",
  "Necessidade financeira legítima e finalidade objetiva",
  "Documentação disponível para análise",
  "Abertura para um relacionamento transparente",
  "Reputação comercial preservada",
  "Intenção de construir relacionamento de longo prazo",
] as const;

/** Situações comuns que levam empresas até a Real Private. */
export const situacoesComuns: readonly string[] = [
  "Crescimento acelerado",
  "Necessidade de capital de giro",
  "Reorganização financeira",
  "Demandas financeiras pontuais ou recorrentes",
] as const;

/** §6 — princípios que sustentam cada operação. */
export const principiosDeSeguranca: readonly Pilar[] = [
  {
    rotulo: "Princípio",
    titulo: "Transparência",
    texto:
      "Clareza, alinhamento e responsabilidade, garantindo que todas as partes compreendam a relação estabelecida.",
  },
  {
    rotulo: "Princípio",
    titulo: "Responsabilidade",
    texto:
      "Cada decisão é tomada com foco na segurança financeira das empresas e dos parceiros envolvidos.",
  },
  {
    rotulo: "Princípio",
    titulo: "Critério",
    texto:
      "Nenhuma operação avança apenas pela urgência. A urgência é considerada, nunca substitui a análise.",
  },
  {
    rotulo: "Princípio",
    titulo: "Confidencialidade",
    texto:
      "Discrição e sigilo, respeitando as informações e as relações envolvidas em cada operação.",
  },
] as const;

/** §4.2 Parceiros estratégicos — o modelo comercial por indicação. */
export const parceirosEstrategicos: readonly string[] = [
  "Contadores",
  "Advogados empresariais",
  "Consultores financeiros e empresariais",
  "Escritórios de assessoria empresarial",
  "Profissionais do mercado financeiro",
  "Clientes e empresas que já operaram conosco",
] as const;

/** Perguntas frequentes — SEO (FAQPage) e redução de fricção no funil. */
export type Pergunta = { readonly pergunta: string; readonly resposta: string };

export const perguntasFrequentes: readonly Pergunta[] = [
  {
    pergunta: "O que a Real Private faz?",
    resposta:
      "A Real Private é uma securitizadora que atua com soluções financeiras personalizadas para empresas: gestão estratégica de capital, antecipação de recebíveis e apoio ao fluxo financeiro, sempre precedidos de análise criteriosa.",
  },
  {
    pergunta: "Quais empresas a Real Private atende?",
    resposta:
      "Empresas formalizadas, com operação ativa, necessidade financeira legítima e documentação disponível para análise. Atendemos diferentes portes e segmentos — comércio, indústria, serviços, distribuição, construção, agronegócio e transportes, entre outros.",
  },
  {
    pergunta: "Em quanto tempo recebo um retorno?",
    resposta:
      "O primeiro retorno ao cliente ou parceiro acontece em até 24 horas úteis. A triagem inicial ocorre em até 24 horas úteis após o recebimento das informações básicas, e a validação documental preliminar em até 48 horas úteis, conforme a complexidade da operação.",
  },
  {
    pergunta: "Quais documentos são necessários para uma análise inicial?",
    resposta:
      "Dados cadastrais e CNPJ, contrato social ou documento societário aplicável, documentos dos sócios, comprovante de endereço, informações financeiras básicas e os documentos relacionados à operação. Solicitamos apenas o necessário: a documentação é proporcional ao tipo, ao valor e à complexidade da operação.",
  },
  {
    pergunta: "A análise tem custo ou compromisso?",
    resposta:
      "Não. A conversa inicial e a análise de viabilidade são feitas sem compromisso, com diálogo direto e confidencialidade sobre as informações compartilhadas.",
  },
  {
    pergunta: "Onde a Real Private fica?",
    resposta:
      "Nossa sede fica na Rua Siqueira Campos, 699, Centro, Presidente Prudente / SP. O atendimento também acontece por WhatsApp e por telefone.",
  },
] as const;
