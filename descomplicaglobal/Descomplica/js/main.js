const servicos = [
  { icone: "⌂", titulo: "Benefícios sociais", descricao: "Conheça programas sociais e os caminhos oficiais para consultar os critérios." },
  { icone: "▤", titulo: "Documentos", descricao: "Encontre orientações sobre emissão e regularização de documentos." },
  { icone: "✚", titulo: "Saúde", descricao: "Acesse informações sobre serviços e atendimentos do SUS." },
  { icone: "⚖", titulo: "Direitos", descricao: "Consulte conteúdos introdutórios sobre direitos e serviços ao cidadão." },
  { icone: "◷", titulo: "Trabalho e renda", descricao: "Encontre informações sobre trabalho, renda e proteção ao trabalhador." },
  { icone: "⌂", titulo: "Moradia", descricao: "Veja informações sobre programas e políticas habitacionais." }
];

const containerServicos = document.querySelector("#servicos-container");

if (containerServicos) {
  servicos.forEach((servico) => {
    const card = document.createElement("a");
    card.className = "service-card";
    card.href = "pages/solucao.html";
    card.setAttribute("aria-label", `Explorar orientações: ${servico.titulo}`);

    const icone = document.createElement("div");
    icone.className = "service-icon";
    icone.setAttribute("aria-hidden", "true");
    icone.textContent = servico.icone;

    const titulo = document.createElement("h3");
    titulo.textContent = servico.titulo;

    const descricao = document.createElement("p");
    descricao.textContent = servico.descricao;

    const action = document.createElement("span");
    action.className = "service-card-action";
    action.textContent = "Explorar orientações →";
    card.append(icone, titulo, descricao, action);
    containerServicos.appendChild(card);
  });
}


// Expande e recolhe a seção "Nossa causa" com suporte a teclado e leitores de tela.
const purposeToggle = document.querySelector("#purpose-toggle");
const purposeContent = document.querySelector("#purpose-content");

if (purposeToggle && purposeContent) {
  purposeToggle.addEventListener("click", () => {
    const isExpanded = purposeToggle.getAttribute("aria-expanded") === "true";
    purposeToggle.setAttribute("aria-expanded", String(!isExpanded));
    purposeContent.hidden = isExpanded;
    purposeToggle.querySelector(".toggle-icon").textContent = isExpanded ? "＋" : "−";
    purposeToggle.querySelector(".toggle-label").textContent = isExpanded
      ? "Conheça nossa causa"
      : "Fechar nossa causa";
  });
}


// Assistente Brasileirinho: base de orientações públicas e buscas nacionais.
// Conteúdo consultivo: confirme sempre regras e disponibilidade nos canais oficiais.
const perguntasBrasileirinho = [
  {
    id: "rg", pergunta: "Como tirar o RG?", icone: "id",
    resumo: "O antigo RG está sendo substituído pela Carteira de Identidade Nacional (CIN), que utiliza o CPF como número único. A emissão da primeira via em papel é gratuita.",
    quemPode: "Brasileiros e pessoas naturalizadas que atendam aos requisitos de identificação civil. Crianças também podem ter a CIN, com acompanhamento do responsável legal.",
    documentos: ["Certidão de nascimento ou casamento, conforme o estado civil, em bom estado e com dados legíveis.", "CPF regularizado. Leve também documento anterior, se tiver.", "Documentos complementares podem ser solicitados pelo órgão estadual."],
    etapas: ["Acesse a página oficial da Carteira de Identidade Nacional e selecione seu estado na lista de locais de emissão.", "Confira se o atendimento exige agendamento e faça-o somente no portal indicado pelo governo estadual.", "Compareça no dia marcado com a certidão e os documentos solicitados.", "Acompanhe a emissão e, quando disponível, acesse a versão digital pelo aplicativo GOV.BR."],
    canais: [{nome:"Orientações nacionais sobre a CIN", telefone:"Portal GOV.BR"}],
    busca: "como tirar a Carteira de Identidade Nacional CIN documentos e agendamento site:gov.br",
    link: "https://www.gov.br/governodigitalfale-conosco/pt-br/identidade/cin/duvidas-frequentes-sobre-a-cin-campanha", linkTexto: "Ver onde emitir a CIN no seu estado",
    observacao: "A emissão é feita pelos órgãos estaduais. Agendamento e documentos adicionais variam conforme o estado. A primeira via em papel é gratuita."
  },
  {
    id: "cadunico", pergunta: "Como fazer o CadÚnico?", icone: "people",
    resumo: "O Cadastro Único reúne informações de famílias de baixa renda e é utilizado como porta de entrada para mais de 40 programas sociais. O cadastro é gratuito e presencial.",
    quemPode: "Em regra, famílias com renda mensal de até meio salário-mínimo por pessoa. Famílias com renda maior também podem ser cadastradas quando algum programa específico exigir.",
    documentos: ["Do responsável familiar: CPF (preferencialmente) ou título de eleitor, documento com foto e comprovante de endereço ou declaração de residência.", "Dos demais moradores: pelo menos um documento de cada pessoa, preferencialmente CPF; também podem ser apresentados RG, certidão, carteira de trabalho ou título de eleitor.", "Leve os documentos de todos os integrantes que moram na residência."],
    etapas: ["Localize o CRAS ou posto do Cadastro Único responsável pela sua região.", "Confira se a unidade exige agendamento e quais documentos recomenda levar.", "O responsável familiar deve comparecer presencialmente para responder à entrevista sobre a família, renda, moradia e composição da casa.", "Guarde o comprovante e mantenha os dados atualizados sempre que houver mudança e, no mínimo, conforme convocação do programa."],
    canais: [{nome:"Disque Social do Ministério do Desenvolvimento Social", telefone:"121"}],
    busca: "Cadastro Único documentos inscrição atualização site:gov.br/mds",
    link: "https://www.gov.br/mds/pt-br/acoes-e-programas/cadastro-unico", linkTexto: "Consultar regras oficiais do Cadastro Único",
    observacao: "A inscrição não garante entrada automática em benefícios. O atendimento é gratuito; não pague intermediários."
  },
  {
    id: "bolsa-familia", pergunta: "O que é o Bolsa Família?", icone: "money",
    resumo: "É um programa federal de transferência de renda para famílias em situação de pobreza, com critérios de renda, cadastro e compromissos nas áreas de saúde e educação.",
    quemPode: "A regra de entrada considera renda mensal de até R$ 218 por pessoa da família, além de inscrição no Cadastro Único. A seleção é feita pelo Governo Federal e não é automática.",
    documentos: ["CPF dos integrantes da família e documentos pessoais para manter o Cadastro Único correto.", "Comprovante de residência, se disponível.", "Cartão do benefício ou dados de acesso aos aplicativos oficiais, se a família já for beneficiária."],
    etapas: ["Se ainda não tiver Cadastro Único, procure o CRAS ou posto municipal para realizar a inscrição.", "Mantenha endereço, renda, escola e composição familiar atualizados.", "Aguarde a seleção federal; estar no Cadastro Único não significa aprovação imediata.", "Se já recebe, acompanhe calendário, parcelas e mensagens pelos canais oficiais do MDS e da Caixa."],
    canais: [{nome:"Disque Social (MDS)", telefone:"121"},{nome:"Atendimento Caixa", telefone:"111"}],
    busca: "Bolsa Família critérios renda cadastro atualização site:gov.br/mds",
    link: "https://www.gov.br/mds/pt-br/acoes-e-programas/bolsa-familia", linkTexto: "Acessar informações oficiais do Bolsa Família",
    observacao: "Valores, calendário e critérios podem ser atualizados. Confirme no MDS ou na Caixa; não compartilhe senhas ou códigos recebidos por SMS."
  },
  {
    id: "sus", pergunta: "Como usar o SUS?", icone: "heart",
    resumo: "O Sistema Único de Saúde oferece atendimento público. A UBS é a principal porta de entrada para consultas, vacinação, acompanhamento e prevenção; urgências são atendidas em serviços apropriados.",
    quemPode: "Todas as pessoas podem utilizar o SUS. O atendimento não depende de plano de saúde.",
    documentos: ["Documento de identificação com foto, se tiver.", "Cartão Nacional de Saúde (Cartão SUS), se tiver; a ausência dele não deve impedir a busca por orientação e atendimento.", "Exames, receitas e lista de medicamentos em uso, quando relevantes."],
    etapas: ["Para consultas de rotina, vacinação e acompanhamento, procure a Unidade Básica de Saúde (UBS) de referência.", "Para situações de urgência, procure UPA ou pronto-socorro.", "Em emergência com risco à vida, ligue 192 (SAMU). Não use esse número para consultas ou informações administrativas.", "Para dúvidas, reclamações ou orientações sobre o SUS, utilize a Ouvidoria/Disque Saúde 136."],
    canais: [{nome:"Disque Saúde / Ouvidoria do SUS", telefone:"136"},{nome:"SAMU — urgência e emergência", telefone:"192 (24 horas)"}],
    busca: "como ser atendido pelo SUS UBS UPA documentos site:gov.br/saude",
    link: "https://www.gov.br/saude/pt-br", linkTexto: "Acessar o portal oficial do Ministério da Saúde",
    observacao: "Em emergência, não espere resposta do site: procure atendimento imediatamente ou ligue 192. A rede e os fluxos podem variar por município."
  },
  {
    id: "ctps", pergunta: "Como emitir a Carteira de Trabalho Digital?", icone: "briefcase",
    resumo: "A Carteira de Trabalho Digital é gratuita e pode ser acessada pela internet ou aplicativo, com CPF e conta GOV.BR. Ela reúne contratos e informações trabalhistas.",
    quemPode: "Pessoas inscritas no CPF que precisem consultar ou utilizar a Carteira de Trabalho Digital.",
    documentos: ["CPF.", "Conta GOV.BR e senha de acesso.", "Dados pessoais atualizados. A carteira física antiga deve ser guardada para comprovar vínculos anteriores quando necessário."],
    etapas: ["Acesse o serviço oficial ou instale o aplicativo Carteira de Trabalho Digital pela loja oficial do celular.", "Entre com sua conta GOV.BR.", "Confira seus dados pessoais e os contratos registrados.", "Se houver divergência, procure orientação do Ministério do Trabalho pelo canal 158."],
    canais: [{nome:"Central Alô Trabalho", telefone:"158 — segunda a sábado, das 7h às 22h"}],
    busca: "Carteira de Trabalho Digital como acessar corrigir dados site:gov.br/trabalho-e-emprego",
    link: "https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho", linkTexto: "Acessar o serviço oficial da Carteira de Trabalho Digital",
    observacao: "A emissão e o acesso digital são gratuitos. Não informe sua senha GOV.BR a terceiros."
  },
  {
    id: "cnh", pergunta: "Como renovar a CNH?", icone: "car",
    resumo: "A renovação da Carteira Nacional de Habilitação é feita pelo Detran do estado responsável pelo registro da habilitação. O procedimento pode começar online em alguns estados.",
    quemPode: "Condutores com CNH vencida ou próxima do vencimento, observadas as regras de prazo, categoria, idade e eventuais restrições médicas.",
    documentos: ["CNH atual e CPF.", "Documento de identificação e comprovante de endereço, se solicitados pelo Detran.", "Exames médicos e, para algumas categorias e situações, exames adicionais previstos na legislação."],
    etapas: ["Acesse o site oficial do Detran do estado onde sua CNH está registrada.", "Procure o serviço Renovação da CNH e confira requisitos, taxas e possibilidade de solicitação online.", "Realize os exames indicados e siga as instruções de pagamento e agendamento.", "Acompanhe o processo no portal ou aplicativo oficial do Detran."],
    canais: [{nome:"Atendimento do Detran", telefone:"Consulte o telefone do Detran do seu estado"}],
    busca: "renovar CNH requisitos exames taxas Detran site:gov.br",
    link: "https://www.gov.br/transportes/pt-br/assuntos/transito", linkTexto: "Consultar informações oficiais de trânsito",
    observacao: "Taxas, exames e etapas são estaduais e podem mudar. Não utilize despachantes ou páginas não oficiais sem verificar a legitimidade."
  },
  {
    id: "certidao", pergunta: "Como tirar a Certidão de Nascimento?", icone: "document",
    resumo: "O registro de nascimento é feito em Cartório de Registro Civil. A primeira certidão é gratuita. A segunda via pode ser solicitada no cartório ou pelos canais oficiais de registro civil.",
    quemPode: "O registro inicial é solicitado pelos pais ou responsáveis, conforme a situação. A própria pessoa ou representante autorizado pode solicitar uma segunda via, observadas as regras de identificação e representação.",
    documentos: ["Para o primeiro registro: Declaração de Nascido Vivo (DNV), quando o nascimento ocorreu em estabelecimento de saúde.", "Documentos de identificação dos pais e, quando aplicável, certidão de casamento.", "Para segunda via: dados do registro, como nome completo, data e local de nascimento e filiação. O cartório pode pedir informações adicionais."],
    etapas: ["Para primeiro registro, procure o cartório de registro civil competente; confirme a documentação antes de ir.", "Para segunda via, localize o cartório onde o nascimento foi registrado ou utilize a plataforma oficial do Registro Civil.", "Preencha os dados solicitados e confira o tipo de certidão e forma de entrega.", "Se não puder pagar a segunda via, informe-se no cartório sobre a declaração de hipossuficiência e as hipóteses legais de gratuidade."],
    canais: [{nome:"Registro Civil do Brasil", telefone:"Atendimento e solicitações pelo portal oficial"}],
    busca: "como solicitar certidão de nascimento primeira via segunda via cartório registro civil site:registrocivil.org.br",
    link: "https://www.registrocivil.org.br/", linkTexto: "Acessar a plataforma oficial do Registro Civil",
    observacao: "A primeira via é gratuita. Custos e documentos da segunda via dependem do pedido e das regras aplicáveis; confirme antes de pagar."
  },
  {
    id: "moradia", pergunta: "Como solicitar o Minha Casa, Minha Vida?", icone: "home",
    resumo: "O Minha Casa, Minha Vida oferece linhas de atendimento habitacional com regras diferentes para famílias urbanas e rurais. A forma de acesso depende da faixa de renda e da modalidade.",
    quemPode: "O Ministério das Cidades informa limites de renda familiar bruta de até R$ 13 mil por mês na área urbana e até R$ 162.500 por ano na área rural. Faixas, condições e restrições devem ser conferidas na regra vigente.",
    documentos: ["Documento de identificação e CPF dos integrantes considerados na composição familiar.", "Comprovantes de renda e de estado civil, conforme a modalidade.", "Outros documentos podem ser solicitados pela prefeitura, entidade organizadora ou instituição financeira."],
    etapas: ["Consulte as faixas de renda e modalidades na página oficial do Ministério das Cidades.", "Identifique se a modalidade é subsidiada ou financiada; os caminhos de inscrição são diferentes.", "Para modalidade subsidiada, consulte os canais da prefeitura ou entidade responsável por seleção local.", "Para modalidade financiada, procure instituição financeira habilitada e faça simulação e análise de crédito.", "Acompanhe convocações somente em canais oficiais e não pague para garantir vaga."],
    canais: [{nome:"Ministério das Cidades", telefone:"Consulte os canais oficiais na página do programa"}],
    busca: "Minha Casa Minha Vida faixas renda como se inscrever regras atuais site:gov.br/cidades",
    link: "https://www.gov.br/cidades/pt-br/acesso-a-informacao/perguntas-frequentes/habitacao", linkTexto: "Consultar perguntas frequentes do Ministério das Cidades",
    observacao: "Faixas de renda e regras podem mudar. A inscrição não garante contemplação; aprovação depende da modalidade e dos critérios oficiais."
  },
  {
    id: "estudantes", pergunta: "Quais benefícios existem para estudantes?", icone: "education",
    resumo: "Há programas federais e locais de apoio à permanência escolar, transporte, alimentação e acesso à educação. O Pé-de-Meia é um incentivo federal voltado a estudantes elegíveis do ensino médio público.",
    quemPode: "Depende do programa. No Pé-de-Meia, a elegibilidade considera matrícula no ensino médio público, critérios de renda e Cadastro Único, CPF regular e frequência escolar mínima, conforme as regras vigentes.",
    documentos: ["CPF do estudante.", "Dados de matrícula e frequência escolar.", "Cadastro Único atualizado, quando exigido pelo programa.", "Documentos do responsável legal para estudantes menores, quando solicitados."],
    etapas: ["Converse com a secretaria da escola para identificar benefícios disponíveis e confirmar seus dados escolares.", "Consulte a página oficial do MEC sobre o Pé-de-Meia e confira se atende aos critérios.", "Verifique a situação e os pagamentos nos canais oficiais do MEC e da Caixa.", "Para outros apoios, consulte a secretaria de educação do estado ou município e a instituição de ensino."],
    canais: [{nome:"MEC — Fale Conosco", telefone:"0800 616 161"},{nome:"Caixa — atendimento Pé-de-Meia", telefone:"4004 0104 (capitais e regiões metropolitanas) / 0800 104 0104 (demais regiões)"}],
    busca: "benefícios para estudantes programas educacionais requisitos site:gov.br/mec",
    link: "https://www.gov.br/mec/pt-br/pe-de-meia", linkTexto: "Acessar informações oficiais do Pé-de-Meia",
    observacao: "Nem todo estudante recebe o Pé-de-Meia. Critérios, calendário e programas estaduais ou municipais devem ser confirmados na escola e nos portais oficiais."
  },
  {
    id: "seguro", pergunta: "Como acessar o seguro-desemprego?", icone: "shield",
    resumo: "O seguro-desemprego é uma assistência financeira temporária para trabalhadores que perderam o emprego sem justa causa e atendem aos requisitos legais.",
    quemPode: "Trabalhadores dispensados sem justa causa que cumpram os requisitos de tempo de trabalho, não tenham renda própria suficiente e não recebam benefício previdenciário incompatível. As exigências variam conforme o número de solicitações e o tipo de trabalhador.",
    documentos: ["Número do CPF.", "Requerimento do Seguro-Desemprego fornecido pelo empregador na dispensa.", "Dados de identificação e informações bancárias, quando solicitadas pelo sistema."],
    etapas: ["Confira os requisitos e o prazo aplicável ao seu tipo de vínculo.", "Faça a solicitação pelo portal GOV.BR/Emprega Brasil ou pelo aplicativo Carteira de Trabalho Digital.", "Informe os dados do requerimento e acompanhe o andamento pelo aplicativo ou portal.", "Se precisar de atendimento presencial ou tiver dificuldade, ligue 158 para orientação sobre os canais disponíveis."],
    canais: [{nome:"Central Alô Trabalho", telefone:"158 — segunda a sábado, das 7h às 22h"}],
    busca: "como solicitar seguro desemprego prazo documentos site:gov.br/trabalho-e-emprego",
    link: "https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego", linkTexto: "Acessar o serviço oficial de seguro-desemprego",
    observacao: "Para trabalhador formal, o pedido costuma ser feito do 7º ao 120º dia após a dispensa. Confirme o prazo específico no serviço oficial."
  }
];

const faqGrid = document.querySelector("#faq-grid");
const answerPanel = document.querySelector("#orientacao");
let lastAnswerTrigger = null;

const faqIcons = {
  id: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="2"/><path d="M5.5 15c.8-2 5.2-2 6 0M14 9h4M14 13h4"/></svg>',
  people: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 19c0-3 2.5-5 6-5s6 2 6 5M16 5a3 3 0 0 1 0 6M17 14c2.5.3 4 2 4 4"/></svg>',
  money: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M7 5h10l3 4-2 12H6L4 9z"/><path d="M9 13c.5 2 5.5 2 6 0s-5.5-2-5-4 4.5-1.5 5 0"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 8.8c0 5-8.8 11-8.8 11s-8.8-6-8.8-11A4.8 4.8 0 0 1 12 6.5a4.8 4.8 0 0 1 8.8 2.3z"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 11 2-5h10l2 5 2 2v5H3v-5zM5 11h14M6 18v2m12-2v2"/><circle cx="7" cy="15" r="1"/><circle cx="17" cy="15" r="1"/></svg>',
  document: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h9l4 4v14H6zM15 3v5h4M9 12h7M9 16h7"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7"/></svg>',
  education: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m2 9 10-5 10 5-10 5zM6 11v6c3 3 9 3 12 0v-6M22 9v7"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>'
};

if (faqGrid && answerPanel) {
  perguntasBrasileirinho.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "faq-card";
    button.dataset.questionId = item.id;
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = `<span class="faq-icon">${faqIcons[item.icone]}</span><span class="faq-label"></span>`;
    button.querySelector(".faq-label").textContent = item.pergunta;
    button.addEventListener("click", () => { lastAnswerTrigger = button; mostrarOrientacao(item.id); });
    faqGrid.appendChild(button);
  });


  const categoryQuestions = {
    beneficios: { label: "Benefícios sociais", ids: ["cadunico","bolsa-familia","estudantes"] },
    documentos: { label: "Documentos", ids: ["rg","ctps","cnh","certidao"] },
    saude: { label: "Saúde", ids: ["sus"] },
    trabalho: { label: "Trabalho e renda", ids: ["ctps","seguro"] },
    moradia: { label: "Moradia", ids: ["moradia"] },
    educacao: { label: "Educação", ids: ["estudantes"] }
  };
  function filterQuestions(category = null) {
    const filterBar = document.querySelector("#faq-filter-bar");
    const filterLabel = document.querySelector("#faq-filter-label");
    const allowed = category ? categoryQuestions[category]?.ids : null;
    faqGrid.querySelectorAll(".faq-card").forEach((card) => {
      card.hidden = Boolean(allowed && !allowed.includes(card.dataset.questionId));
    });
    if (filterBar) filterBar.hidden = !category;
    if (filterLabel && category) filterLabel.textContent = `Perguntas sobre: ${categoryQuestions[category].label}`;
    if (!category) answerPanel.hidden = true;
  }
  document.querySelectorAll("[data-service-category]").forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.serviceCategory;
      showAssistantView("assistant");
      filterQuestions(category);
      document.querySelector("#perguntas")?.scrollIntoView({behavior:"smooth",block:"start"});
    });
  });
  document.querySelector("#clear-faq-filter")?.addEventListener("click", () => {
    filterQuestions(null);
    document.querySelector("#perguntas")?.scrollIntoView({behavior:"smooth",block:"start"});
  });

  function criarLista(titulo, itens) {
    const bloco = document.createElement("section");
    bloco.className = "answer-section";
    const h3 = document.createElement("h3"); h3.textContent = titulo;
    const ul = document.createElement("ul");
    itens.forEach((texto) => { const li = document.createElement("li"); li.textContent = texto; ul.appendChild(li); });
    bloco.append(h3, ul); return bloco;
  }

  function mostrarOrientacao(id) {
    const item = perguntasBrasileirinho.find((pergunta) => pergunta.id === id);
    if (!item) return;
    faqGrid.querySelectorAll(".faq-card").forEach((card) => card.setAttribute("aria-pressed", String(card.dataset.questionId === id)));
    const title = document.querySelector("#answer-title");
    title.textContent = item.pergunta;
    const content = document.querySelector("#answer-content");
    content.replaceChildren();

    const intro = document.createElement("p"); intro.className = "answer-summary"; intro.textContent = item.resumo;
    const who = document.createElement("section"); who.className = "answer-section";
    const whoTitle = document.createElement("h3"); whoTitle.textContent = "Quem pode solicitar?";
    const whoText = document.createElement("p"); whoText.textContent = item.quemPode; who.append(whoTitle, whoText);
    const steps = document.createElement("section"); steps.className = "answer-section";
    const stepsTitle = document.createElement("h3"); stepsTitle.textContent = "Como resolver";
    const ol = document.createElement("ol"); item.etapas.forEach((step) => { const li = document.createElement("li"); li.textContent = step; ol.appendChild(li); }); steps.append(stepsTitle, ol);
    const links = document.createElement("div"); links.className = "answer-actions";
    const official = document.createElement("a"); official.className = "answer-official-link"; official.href = item.link; official.target = "_blank"; official.rel = "noopener noreferrer"; official.textContent = item.linkTexto;
    const google = document.createElement("a"); google.className = "answer-search-link"; google.href = "https://www.google.com/search?q=" + encodeURIComponent(item.busca); google.target = "_blank"; google.rel = "noopener noreferrer"; google.textContent = "Pesquisar esta informação no Google ↗";
    const favorite = document.createElement("button"); favorite.type = "button"; favorite.className = "answer-favorite";
    const currentFavorites = JSON.parse(localStorage.getItem("brasileirinho-favoritos") || "[]");
    favorite.textContent = currentFavorites.includes(item.id) ? "★ Remover dos favoritos" : "☆ Salvar nos favoritos";
    favorite.setAttribute("aria-pressed", String(currentFavorites.includes(item.id)));
    favorite.addEventListener("click", () => {
      const favorites = JSON.parse(localStorage.getItem("brasileirinho-favoritos") || "[]");
      const updated = favorites.includes(item.id) ? favorites.filter((savedId) => savedId !== item.id) : [...favorites, item.id];
      localStorage.setItem("brasileirinho-favoritos", JSON.stringify(updated));
      favorite.textContent = updated.includes(item.id) ? "★ Remover dos favoritos" : "☆ Salvar nos favoritos";
      favorite.setAttribute("aria-pressed", String(updated.includes(item.id)));
    });
    links.append(official, google, favorite);
    const contactBlock = document.createElement("section"); contactBlock.className = "answer-section";
    const contactTitle = document.createElement("h3"); contactTitle.textContent = "Canais de atendimento";
    const contactList = document.createElement("ul");
    item.canais.forEach((channel) => { const li = document.createElement("li"); const strong = document.createElement("strong"); strong.textContent = channel.nome + ": "; li.append(strong, document.createTextNode(channel.telefone)); contactList.appendChild(li); });
    contactBlock.append(contactTitle, contactList);
    const note = document.createElement("p"); note.className = "answer-note"; note.textContent = item.observacao;
    const disclaimer = document.createElement("p"); disclaimer.className = "answer-disclaimer"; disclaimer.textContent = "Antes de sair de casa, confirme endereço, horário, agendamento e documentos diretamente com a unidade responsável.";
    content.append(intro, who, criarLista("Documentos que podem ser necessários", item.documentos), steps, contactBlock, links, note, disclaimer);
    answerPanel.hidden = false;
    atualizarRecentes(item);
    answerPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    title.setAttribute("tabindex", "-1"); title.focus();
  }

  function atualizarRecentes(item) {
    const recentList = document.querySelector("#recent-questions"); if (!recentList) return;
    const ids = JSON.parse(sessionStorage.getItem("brasileirinho-recentes") || "[]");
    const updated = [item.id, ...ids.filter((id) => id !== item.id)].slice(0, 4);
    sessionStorage.setItem("brasileirinho-recentes", JSON.stringify(updated)); renderizarRecentes(updated);
  }
  function renderizarRecentes(ids) {
    const recentList = document.querySelector("#recent-questions"); if (!recentList) return;
    recentList.replaceChildren();
    ids.forEach((id) => { const item = perguntasBrasileirinho.find((q) => q.id === id); if (!item) return; const li = document.createElement("li"); const button = document.createElement("button"); button.type = "button"; button.textContent = `◷  ${item.pergunta}`; button.addEventListener("click", () => mostrarOrientacao(item.id)); li.appendChild(button); recentList.appendChild(li); });
    if (!ids.length) { const empty = document.createElement("li"); empty.className = "recent-empty"; empty.textContent = "Suas perguntas acessadas aparecerão aqui."; recentList.appendChild(empty); }
  }
  renderizarRecentes(JSON.parse(sessionStorage.getItem("brasileirinho-recentes") || "[]"));
  document.querySelector("#close-answer")?.addEventListener("click", () => { answerPanel.hidden = true; faqGrid.querySelectorAll(".faq-card").forEach((card) => card.setAttribute("aria-pressed", "false")); if (lastAnswerTrigger && !lastAnswerTrigger.closest("[hidden]")) lastAnswerTrigger.focus(); else faqGrid.querySelector(".faq-card")?.focus(); });

  const setFont = (action) => { const root = document.documentElement; const current = Number(root.dataset.fontScale || 100); const next = action === "up" ? Math.min(125, current + 10) : action === "down" ? Math.max(90, current - 10) : 100; root.dataset.fontScale = String(next); };
  document.querySelectorAll("[data-font]").forEach((button) => button.addEventListener("click", () => setFont(button.dataset.font)));
  document.querySelector("#theme-toggle")?.addEventListener("click", (event) => { const active = document.body.classList.toggle("high-contrast"); event.currentTarget.setAttribute("aria-pressed", String(active)); event.currentTarget.setAttribute("aria-label", active ? "Desativar alto contraste" : "Ativar modo de alto contraste"); });
  const showAccessibilityHelp = () => { const title = document.querySelector("#answer-title"); title.textContent = "Ajuda e acessibilidade"; const content = document.querySelector("#answer-content"); content.replaceChildren(); const p = document.createElement("p"); p.textContent = "Use Tab para navegar, Enter ou Espaço para ativar os controles e os botões A−, A e A+ para ajustar o tamanho do texto. O botão de contraste reforça a diferença entre texto e fundo. Os links abrem em nova aba."; content.appendChild(p); answerPanel.hidden = false; answerPanel.scrollIntoView({ behavior: "smooth", block: "start" }); title.setAttribute("tabindex", "-1"); title.focus(); };
  document.querySelector("#accessibility-help")?.addEventListener("click", showAccessibilityHelp);

  document.querySelector("#accessibility-top")?.addEventListener("click", showAccessibilityHelp);

  // Navegação entre áreas da página, sem recarregar o site.
  const assistantSections = [
    document.querySelector(".assistant-welcome"),
    document.querySelector("#perguntas"),
    document.querySelector("#orientacao"),
    document.querySelector("#contato"),
    document.querySelector(".assistant-disclaimer")
  ];
  const views = {
    info: document.querySelector("#information-view"),
    services: document.querySelector("#services-view"),
    favorites: document.querySelector("#favorites-view"),
    recent: document.querySelector("#recent-view")
  };
  function showAssistantView(viewName = "assistant") {
    assistantSections.forEach((section) => { if (section) section.hidden = viewName !== "assistant"; });
    Object.entries(views).forEach(([name, section]) => { if (section) section.hidden = name !== viewName; });
    document.querySelectorAll(".assistant-nav .sidebar-link").forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });
    const activeId = ({assistant:"nav-assistant",services:"nav-services",info:"nav-info",favorites:"show-favorites",recent:"nav-recent"})[viewName];
    const activeLink = activeId ? document.getElementById(activeId) : null;
    if (activeLink) { activeLink.classList.add("active"); activeLink.setAttribute("aria-current","page"); }
    if (viewName !== "assistant") {
      const heading = views[viewName]?.querySelector("h1");
      heading?.setAttribute("tabindex","-1");
      heading?.focus({preventScroll:true});
      views[viewName]?.scrollIntoView({behavior:"smooth",block:"start"});
    } else {
      document.querySelector("#conteudo-principal")?.scrollTo?.({top:0,behavior:"smooth"});
      window.scrollTo({top:0,behavior:"smooth"});
    }
  }
  document.querySelector("#nav-assistant")?.addEventListener("click", () => showAssistantView("assistant"));
  document.querySelector("#nav-services")?.addEventListener("click", () => showAssistantView("services"));
  document.querySelector("#nav-info")?.addEventListener("click", () => showAssistantView("info"));
  document.querySelector("#nav-recent")?.addEventListener("click", () => {
    const list = document.querySelector("#recent-view-list"); list.replaceChildren();
    const ids = JSON.parse(sessionStorage.getItem("brasileirinho-recentes") || "[]");
    const recentItems = ids.map((id) => perguntasBrasileirinho.find((item) => item.id === id)).filter(Boolean);
    if (!recentItems.length) { list.textContent = "Você ainda não acessou nenhuma orientação nesta sessão."; }
    recentItems.forEach((item) => {
      const button = document.createElement("button"); button.className = "saved-item"; button.type = "button"; button.textContent = item.pergunta;
      button.addEventListener("click", () => { lastAnswerTrigger = button; showAssistantView("assistant"); mostrarOrientacao(item.id); }); list.appendChild(button);
    });
    showAssistantView("recent");
  });
  document.querySelectorAll("[data-back-assistant]").forEach((button) => button.addEventListener("click", () => showAssistantView("assistant")));

  const documentLibrary = [
    ["cin","CIN — Carteira de Identidade Nacional","Documento oficial de identificação civil. O número de identificação da CIN é o CPF.","É o novo modelo nacional de identidade. A primeira via em papel é gratuita. A emissão é feita pelos órgãos de identificação de cada estado."],
    ["rg","RG — Registro Geral","Documento de identidade utilizado tradicionalmente para identificar pessoas no Brasil.","O RG antigo continua válido durante o período de transição previsto para a implantação da CIN. Verifique as regras atuais do seu estado."],
    ["cnh","CNH — Carteira Nacional de Habilitação","Documento que comprova a habilitação de uma pessoa para conduzir veículos.","A emissão e renovação são realizadas pelos órgãos estaduais de trânsito. Também existe a versão digital na Carteira Digital de Trânsito."],
    ["nascimento","Certidão de Nascimento","Registra oficialmente o nascimento e os dados básicos de uma pessoa.","É o primeiro registro civil e costuma ser solicitado para emitir outros documentos."],
    ["agua","Comprovante de Endereço — Conta de água","Conta de água é um exemplo comum de documento utilizado para comprovar endereço.","A aceitação depende do órgão ou serviço. Alguns locais exigem que a conta esteja em nome do próprio solicitante ou aceitam declaração complementar."],
    ["alistamento","Certificado de Alistamento Militar","Comprova que o cidadão realizou o alistamento militar.","O alistamento é obrigatório para brasileiros do sexo masculino no ano em que completam 18 anos, conforme as regras do serviço militar."],
    ["cpf","CPF — Cadastro de Pessoas Físicas","Número que identifica o cidadão nos cadastros da Receita Federal.","O CPF é utilizado em serviços públicos, operações financeiras e diversos cadastros. A inscrição e a consulta podem ser feitas pelos canais oficiais da Receita Federal."],
    ["titulo","Título de Eleitor","Documento que comprova a inscrição da pessoa na Justiça Eleitoral.","Permite exercer o direito ao voto quando a pessoa está em situação regular. A versão digital pode ser acessada pelo e-Título."],
    ["ctps","Carteira de Trabalho Digital","Reúne informações sobre contratos e vínculos de trabalho do cidadão.","É acessada pelo aplicativo ou portal gov.br, usando a conta do trabalhador."],
    ["sus","Cartão Nacional de Saúde — Cartão SUS","Identifica o usuário no Sistema Único de Saúde.","O número do Cartão Nacional de Saúde ajuda a localizar registros de atendimento na rede pública."],
    ["reservista","Certificado de Reservista","Documento que comprova a situação militar de quem foi dispensado ou concluiu o serviço militar, conforme o caso.","A situação militar regular pode ser necessária para alguns atos da vida civil. Consulte a Junta de Serviço Militar para orientações."]
  ];
  const documentGrid = document.querySelector("#document-grid");
  if (documentGrid) {
    documentLibrary.forEach(([imageName,title,summary,detail]) => {
      const card = document.createElement("article"); card.className = "document-card";
      const image = document.createElement("img"); image.src = `../img/documentos/${imageName}.svg`; image.alt = `Modelo ilustrativo de ${title}`; image.loading = "lazy";
      const body = document.createElement("div"); body.className = "document-card-body";
      const heading = document.createElement("h2"); heading.textContent = title;
      const text = document.createElement("p"); text.textContent = summary;
      const details = document.createElement("details"); details.className = "document-details";
      const summaryEl = document.createElement("summary"); summaryEl.textContent = "Saiba mais";
      const detailText = document.createElement("p"); detailText.textContent = detail;
      details.append(summaryEl,detailText); body.append(heading,text,details); card.append(image,body); documentGrid.appendChild(card);
    });
  }
  document.querySelector("#show-favorites")?.addEventListener("click", () => {
    const list = document.querySelector("#favorites-list"); list.replaceChildren();
    const favorites = JSON.parse(localStorage.getItem("brasileirinho-favoritos") || "[]");
    const saved = perguntasBrasileirinho.filter((item) => favorites.includes(item.id));
    if (!saved.length) list.textContent = "Você ainda não salvou nenhuma orientação como favorita.";
    saved.forEach((item) => {
      const button = document.createElement("button"); button.className = "saved-item"; button.type = "button"; button.textContent = item.pergunta;
      button.addEventListener("click", () => { showAssistantView("assistant"); mostrarOrientacao(item.id); }); list.appendChild(button);
    });
    showAssistantView("favorites");
  });

  // Formulário demonstrativo com validação no próprio navegador.
  const contactToggle = document.querySelector("#contact-toggle");
  const contactPanel = document.querySelector("#contact-form-panel");
  const contactForm = document.querySelector("#contact-form");
  if (contactToggle && contactPanel && contactForm) {
    contactToggle.addEventListener("click", () => {
      const expanded = contactToggle.getAttribute("aria-expanded") === "true";
      contactToggle.setAttribute("aria-expanded", String(!expanded));
      contactPanel.hidden = expanded;
      contactToggle.querySelector("span").textContent = expanded ? "＋" : "−";
      if (!expanded) {
        contactPanel.scrollIntoView({ behavior: "smooth", block: "start" });
        document.querySelector("#contact-name").focus({ preventScroll: true });
      }
    });

    const subjectField = document.querySelector("#contact-subject");
    const otherSubjectField = document.querySelector("#other-subject-field");
    const otherSubjectInput = document.querySelector("#contact-other-subject");
    const showOtherSubject = () => {
      const isOther = subjectField.value === "outro";
      otherSubjectField.hidden = !isOther;
      otherSubjectInput.required = isOther;
      if (!isOther) {
        otherSubjectInput.value = "";
        setFieldError(otherSubjectInput, "");
      }
    };

    const errorIds = {
      "contact-name": "name-error",
      "contact-email": "email-error",
      "contact-phone": "phone-error",
      "contact-subject": "subject-error",
      "contact-other-subject": "other-subject-error"
    };
    const setFieldError = (field, message) => {
      const error = document.getElementById(errorIds[field.id]);
      if (error) error.textContent = message;
      field.setAttribute("aria-invalid", String(Boolean(message)));
    };
    const phoneDigits = (value) => value.replace(/\D/g, "");
    const validators = {
      "contact-name": (field) => field.value.trim().length >= 3 ? "" : "Informe seu nome completo (mínimo de 3 caracteres).",
      "contact-email": (field) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(field.value.trim()) ? "" : "Digite um e-mail válido.",
      "contact-phone": (field) => [10, 11].includes(phoneDigits(field.value).length) ? "" : "Digite um telefone com DDD.",
      "contact-subject": (field) => field.value ? "" : "Selecione um assunto.",
      "contact-other-subject": (field) => subjectField.value !== "outro" || field.value.trim().length >= 10 ? "" : "Descreva sua dúvida (mínimo de 10 caracteres)."
    };
    subjectField.addEventListener("change", () => {
      showOtherSubject();
      setFieldError(subjectField, validators["contact-subject"](subjectField));
    });
    showOtherSubject();

    Object.keys(validators).forEach((id) => {
      const field = document.getElementById(id);
      field.addEventListener("blur", () => setFieldError(field, validators[id](field)));
      field.addEventListener("input", () => {
        if (field.getAttribute("aria-invalid") === "true") setFieldError(field, validators[id](field));
      });
      field.addEventListener("change", () => setFieldError(field, validators[id](field)));
    });

    const phoneField = document.querySelector("#contact-phone");
    phoneField.addEventListener("input", () => {
      const digits = phoneDigits(phoneField.value).slice(0, 11);
      let formatted = digits;
      if (digits.length > 2) formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      if (digits.length > 7) formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
      phoneField.value = formatted;
    });

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let firstInvalid = null;
      Object.entries(validators).forEach(([id, validate]) => {
        const field = document.getElementById(id);
        if (id === "contact-other-subject" && subjectField.value !== "outro") {
          setFieldError(field, "");
          return;
        }
        const message = validate(field);
        setFieldError(field, message);
        if (message && !firstInvalid) firstInvalid = field;
      });
      const feedback = document.querySelector("#form-feedback");
      if (firstInvalid) {
        feedback.textContent = "Revise os campos destacados antes de continuar.";
        feedback.classList.remove("is-success");
        firstInvalid.focus();
        return;
      }
      feedback.textContent = "Sua solicitação foi enviada para o Departamento de Equipe Descomplica. E-mail: equipedescomplica@gmail.com."
      feedback.classList.add("is-success");
      contactForm.reset();
      showOtherSubject();
      Object.keys(validators).forEach((id) => setFieldError(document.getElementById(id), ""));
    });
  }
}
