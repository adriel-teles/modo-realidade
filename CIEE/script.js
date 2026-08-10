/**
 * MODO REALIDADE // SIMULADOR DE DECISÃO: FORA DA ILUSÃO v3.5
 * Lógica do sistema interativo, suporte a 10 cenários, seletores de profundidade,
 * painel de documentação interna embutido e sintetizador sonoro Web Audio API.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. BASE DE DADOS COMPLETA DOS 10 CENÁRIOS INTERATIVOS
       -------------------------------------------------------------------------- */
    const allScenarios = [
        {
            id: "SIM_CASE_01",
            category: "#REUNIÃO_DE_TECH",
            title: "Ideia Desvalorizada e Repetida por Colega",
            context: "Durante uma reunião de alinhamento de projeto, Mariana propõe uma solução inovadora para otimizar o banco de dados. Ninguém no grupo reage. Dois minutos depois, Lucas diz a mesma frase, e a liderança exclama: 'Excelente ideia, Lucas! É exatamente disso que precisamos!'.",
            speech: "Lucas: 'Pessoal, acho que deveríamos reformular a consulta do banco de dados para acelerar o sistema.' (Palavras idênticas às da Mariana)",
            options: [
                {
                    key: "A",
                    text: "Ignorar o fato e continuar a reunião. O importante é que o problema do projeto foi resolvido.",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "Ao se calar, a contribuição intelectual da mulher é apagada e transferida para um homem. Isso desestimula a participação feminina e perpetua a percepção errônea de que apenas homens geram soluções estratégicas.",
                    concept: "Roubo de Crédito (Bropropriating) & Maninterrupting",
                    conceptExplanation: "Ocorre quando a ideia de uma mulher é ignorada ou desvalorizada, mas ganha imediato aplauso quando repetida por um homem."
                },
                {
                    key: "B",
                    text: "Intervir pontualmente na reunião: 'Lucas, essa é a exata proposta que a Mariana apresentou há 2 minutos. Excelente sacada de ambos.'",
                    isReality: true,
                    verdictText: "PERCEPÇÃO DA REALIDADE",
                    feedback: "Você chamou a atenção para o apagamento da fala feminina com firmeza e elegância, garantindo o devido crédito intelectual a quem teve a ideia original.",
                    concept: "Amplificação de Fala & Visibilidade Feminina",
                    conceptExplanation: "Prática de apoiar e creditar publicamente as ideias de colegas mulheres em ambientes dominados por homens."
                },
                {
                    key: "C",
                    text: "Pensar: 'Mariana provavelmente explicou sem firmeza técnica, por isso não prestaram atenção nela.'",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "Atribuir a falta de atenção à suposta 'falta de firmeza' da mulher mascara um viés inconsciente coletivo que costuma ignorar vozes femininas.",
                    concept: "Culpabilização da Vítima & Viés Inconsciente",
                    conceptExplanation: "Tendência sistemática de exigir postura perfeita das mulheres enquanto se aceita qualquer fala masculina."
                }
            ]
        },
        {
            id: "SIM_CASE_02",
            category: "#AMBIENTE_DE_ESTÁGIO",
            title: "Questionamento de Capacidade Técnica",
            context: "No laboratório de tecnologia, Camila (estagiária) abre o terminal para configurar uma permissão de rede no servidor. Um colega mais experiente se aproxima, apoia as mãos na mesa dela e faz uma pergunta em tom irônico.",
            speech: "Colega: 'Tem certeza de que você sabe usar esse terminal de redes ou quer que eu chame um dos rapazes pra resolver pra você?'",
            options: [
                {
                    key: "A",
                    text: "Achar normal: 'Ele só está tentando ser prestativo, não precisa problematizar.'",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "Confundir condescendência com 'ajuda' valida a premissa sexista de que mulheres são incapazes em tarefas técnicas complexas.",
                    concept: "Mansplaining & Paternalismo de Gênero",
                    conceptExplanation: "Pressupor que uma mulher não domina sua própria área técnica e precisa de tutela ou validação masculina."
                },
                {
                    key: "B",
                    text: "Responder com segurança técnica: 'Estou perfeitamente capacitada e seguindo a documentação. Se eu precisar de apoio, eu aviso.'",
                    isReality: true,
                    verdictText: "PERCEPÇÃO DA REALIDADE",
                    feedback: "Você estabeleceu um limite claro contra a atitude condescendente, reafirmando sua competência profissional e autonomia técnica.",
                    concept: "Combate à Subestimativa Técnica",
                    conceptExplanation: "Desmontar o estereótipo de que exatas e tecnologia são domínios predominantemente masculinos."
                },
                {
                    key: "C",
                    text: "Rir sem jeito, fechar a tela e pedir para o colega assumir a tarefa.",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "A dúvida constante sobre a capacidade técnica feminina induz o recuo e a insegurança na profissional.",
                    concept: "Síndrome da Impostora Induzida",
                    conceptExplanation: "Efeito em que ambientes machistas fazem mulheres capacitadas duvidarem de seu próprio valor e preparo."
                }
            ]
        },
        {
            id: "SIM_CASE_03",
            category: "#TRABALHO_EM_EQUIPE",
            title: "Divisão de Tarefas no Projeto",
            context: "Na distribuição de funções de um projeto importante, o gestor atribui a programação backend e a arquitetura para dois rapazes da equipe e se volta para Amanda (desenvolvedora sênior).",
            speech: "Líder: 'Amanda, como você é mais organizada e detalhista, cuida de anotar a ata, organizar os cafés e formatar os slides da apresentação?'",
            options: [
                {
                    key: "A",
                    text: "Aceitar sem questionar: 'Afinal, mulheres são naturalmente melhores em organização e apoio.'",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "Associar mulheres a tarefas de suporte/cuidado retira delas a oportunidade de atuar no núcleo técnico e crescer na carreira.",
                    concept: "Segregação de Tarefas (Office Housework)",
                    conceptExplanation: "Tendência de delegar tarefas administrativas e de suporte informal desproporcionalmente para mulheres."
                },
                {
                    key: "B",
                    text: "Pontuar o desvio de função: 'Posso colaborar na apresentação, mas minha prioridade técnica é atuar no desenvolvimento do backend.'",
                    isReality: true,
                    verdictText: "PERCEPÇÃO DA REALIDADE",
                    feedback: "Você defendeu o direito de atuar na sua área de especialização técnica, recusando ser remanejada para papéis secundários.",
                    concept: "Equidade nas Atribuições de Trabalho",
                    conceptExplanation: "Garantir que homens e mulheres tenham acesso igual às tarefas estratégicas de alto impacto técnico."
                }
            ]
        },
        {
            id: "SIM_CASE_04",
            category: "#COMUNICAÇÃO_DIGITAL",
            title: "Piada Machista no Grupo da Equipe",
            context: "No aplicativo de mensagens da equipe, um integrante envia um meme inferiorizando o raciocínio das mulheres. Uma colega sinaliza que o comentário foi desrespeitoso. Outro integrante responde imediatamente.",
            speech: "Colega: 'Nossa, como você é dramática! Ninguém disse por mal, foi só uma brincadeira. Hoje em dia não se pode piada com nada!'",
            options: [
                {
                    key: "A",
                    text: "Concordar com o colega: 'Realmente, o pessoal andava muito sensível e sem humor.'",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "Desqualificar a reação de quem sofreu a discriminação como 'drama' é uma forma de invalidar sentimentos e proteger comportamentos sexistas.",
                    concept: "Gaslighting & Tolerância ao Machismo",
                    conceptExplanation: "Fazer a mulher duvidar de sua percepção de desrespeito, tratando discriminação como brincadeira inofensiva."
                },
                {
                    key: "B",
                    text: "Apoiar a colega no grupo: 'Respeito não é drama. Piadas que inferiorizam mulheres reforçam preconceito e não cabem no ambiente profissional.'",
                    isReality: true,
                    verdictText: "PERCEPÇÃO DA REALIDADE",
                    feedback: "Você não se omitiu perante o machismo recreativo, estabelecendo um padrão de respeito coletivo indispensável.",
                    concept: "Combate ao Machismo Recreativo",
                    conceptExplanation: "Uso do humor para veicular conteúdos discriminatórios e desarmar críticas acusando a vítima de falta de humor."
                }
            ]
        },
        {
            id: "SIM_CASE_05",
            category: "#PROGRESSÃO_DE_CARREIRA",
            title: "Avaliação de Promoção & Maternidade",
            context: "Em uma conversa a portas fechadas sobre quem assumirá uma posição de liderança sênior, a indicação de Juliana (com excelentes resultados) é descartada pelo gestor.",
            speech: "Gestor: 'A Juliana é brilhante, mas acabou de se casar. Daqui a pouco vai querer ter filhos e vai perder o foco no trabalho. Melhor promover o Rodrigo.'",
            options: [
                {
                    key: "A",
                    text: "Achar lógico: 'É um risco real para a empresa, o gestor só está pensando no negócio.'",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "Punir antecipadamente uma mulher por uma suposta maternidade futura é discriminação de gênero e viés estrutural.",
                    concept: "Penalidade da Maternidade (Maternal Wall)",
                    conceptExplanation: "Preconceito que pressupõe que mulheres mães ou em idade fértil são menos comprometidas profissionalmente."
                },
                {
                    key: "B",
                    text: "Desafiar o critério: 'Juliana deve ser avaliada exclusivamente por entregas e competência. Presumir perda de foco por vida pessoal é discriminação.'",
                    isReality: true,
                    verdictText: "PERCEPÇÃO DA REALIDADE",
                    feedback: "Você questionou um critério discriminatório e velado, defendendo avaliações justas baseadas em desempenho profissional.",
                    concept: "Meritocracia Real com Equidade",
                    conceptExplanation: "Garantir que a vida pessoal das mulheres não seja usada como pretexto para barrar a ascensão de liderança."
                }
            ]
        },
        {
            id: "SIM_CASE_06",
            category: "#ORGANIZAÇÃO_DE_REUNIÃO",
            title: "Anotações da Reunião e Desvio de Função",
            context: "Na reunião de planejamento técnico, Ana é a desenvolvedora responsável pelo módulo principal do projeto. Antes de a discussão começar, o gestor olha para ela na mesa.",
            speech: "Gestor: 'Ana, você pode ir anotando tudo para a gente? Você é mais organizada com essas coisas de ata.'",
            options: [
                {
                    key: "A",
                    text: "Aceitar sem questionar, pensando que mulheres são naturally mais adequadas para funções de secretariado da equipe.",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "Delegar a ata sempre à mulher da equipe reduz sua participação nas decisões estratégicas e reforça papéis de gênero ultrapassados.",
                    concept: "Estereótipo de Gênero & Desvio de Função",
                    conceptExplanation: "Atribuir automaticamente a mulheres tarefas de secretariado e organização informal em equipes técnicas."
                },
                {
                    key: "B",
                    text: "Propor o revezamento: 'Posso fazer a ata hoje, mas sugiro rodarmos essa responsabilidade entre todos os integrantes a cada reunião para eu focar na arquitetura do módulo.'",
                    isReality: true,
                    verdictText: "PERCEPÇÃO DA REALIDADE",
                    feedback: "Você propôs uma solução justa e coletiva, preservando seu papel técnico e estabelecendo equidade na equipe.",
                    concept: "Divisão Equitativa de Suporte",
                    conceptExplanation: "Garantir que tarefas administrativas secundárias sejam compartilhadas por igual entre homens e mulheres."
                },
                {
                    key: "C",
                    text: "Sentir-se lisonjeada por ter sido escolhida para organizar o grupo.",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "Encobrir o desvio de função como 'elogio à organização' mascara a perda de espaço da mulher na discussão técnica.",
                    concept: "Naturalização do Papel de Apoio",
                    conceptExplanation: "Aceitar como elogio atribuições que afastam a profissional de sua área principal de atuação."
                }
            ]
        },
        {
            id: "SIM_CASE_07",
            category: "#VISIBILIDADE_PROFISSIONAL",
            title: "Dúvida Técnica Direcionada ao Homem",
            context: "Beatriz é a especialista que configurou toda a automação do sistema. Durante a apresentação técnica para visitantes, um cliente faz uma pergunta complexa, mas se dirige apenas ao colega homem ao lado dela.",
            speech: "Cliente: 'Talvez você consiga me explicar melhor como funciona essa parte técnica difícil...'",
            options: [
                {
                    key: "A",
                    text: "O colega homem responder imediatamente, assumindo o protagonismo da explicação sem mencionar Beatriz.",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "Ao assumir a resposta, o colega valida a suposição do cliente de que a autoridade técnica é masculina, invisibilizando a autora do trabalho.",
                    concept: "Invisibilização Profissional & Apropriação",
                    conceptExplanation: "Permitir que a autoridade sobre um projeto seja transferida para um homem por viés do interlocutor."
                },
                {
                    key: "B",
                    text: "O colega homem redirecionar: 'A Beatriz foi a responsável por toda essa automação e é a pessoa mais qualificada para te detalhar a solução.'",
                    isReality: true,
                    verdictText: "PERCEPÇÃO DA REALIDADE",
                    feedback: "O redirecionamento imediato combate o viés do cliente e devolve o protagonismo e a autoridade técnica a quem desenvolveu a solução.",
                    concept: "Reconhecimento da Autoridade Técnica",
                    conceptExplanation: "Intervir para que especialistas mulheres sejam reconhecidas publicamente pelo trabalho que executaram."
                },
                {
                    key: "C",
                    text: "Beatriz se calar por achar que homens se entendem melhor em conversas de negócios.",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "O silêncio diante do viés externo perpetua o mito de que mulheres não ocupam posições de liderança técnica.",
                    concept: "Auto-Silenciamento por Pressão Social",
                    conceptExplanation: "Recuo involuntário de profissionais capacitadas devido a ambientes estruturalmente excludentes."
                }
            ]
        },
        {
            id: "SIM_CASE_08",
            category: "#MÉRITO_PROFISSIONAL",
            title: "Promoção Colocada em Dúvida por 'Diversidade'",
            context: "Carla foi promovida a especialista após liderar entregas críticas com métricas impecáveis por meses. No café da empresa, um colega faz um comentário sarcástico.",
            speech: "Colega: 'Nossa, ela subiu rápido demais... deve ser porque a empresa está querendo mostrar índices de diversidade no relatório.'",
            options: [
                {
                    key: "A",
                    text: "Concordar: 'É verdade, hoje em dia promovem mulheres só para bater cota de marketing.'",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "Atribuir conquistas femininas apenas a 'cotas' ou 'politicamente correto' deslegitima o esforço e a capacidade real das profissionais.",
                    concept: "Deslegitimação do Mérito Feminino",
                    conceptExplanation: "Desqualificar o sucesso profissional de mulheres sugerindo privilégios injustos em vez de competência."
                },
                {
                    key: "B",
                    text: "Intervir no comentário: 'Carla entregou os projetos mais complexos do ano com excelência. O mérito da promoção é 100% da competência dela.'",
                    isReality: true,
                    verdictText: "PERCEPÇÃO DA REALIDADE",
                    feedback: "Você rebateu um boato sexista com fatos e métricas reais, defendendo o mérito e a dignidade profissional da colega.",
                    concept: "Combate ao Preconceito Estrutural",
                    conceptExplanation: "Enfrentar narrativas que tentam desvalorizar promoções e conquistas de mulheres no ambiente corporativo."
                },
                {
                    key: "C",
                    text: "Ficar em silêncio por achar que não vale a pena discutir conversas de corredor.",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "O silêncio diante de insinuações sexistas permite que a imagem da profissional seja corroída injustamente.",
                    concept: "Conivência com a Descredibilização",
                    conceptExplanation: "Permitir que boatos que desmerecem a capacidade feminina circulem sem contestação."
                }
            ]
        },
        {
            id: "SIM_CASE_09",
            category: "#CULTURA_DE_EQUIPE",
            title: "Piada Sexista no Grupo de Mensagens",
            context: "Em um grupo de trabalho no WhatsApp, alguém envia uma imagem com o texto: 'Mulher em TI só resolve bug quando pede ajuda para um homem'. Quando uma colega reclama, o autor responde.",
            speech: "Autor: 'É só brincadeira, não precisa problematizar tudo e estragar o clima do grupo!'",
            options: [
                {
                    key: "A",
                    text: "Enviar um emoji de risada para não parecer uma pessoa chata ou sem humor.",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "Rir de piadas preconceituosas valida a inferiorização da mulher e desencoraja ambientes profissionais saudáveis.",
                    concept: "Cumplicidade com o Preconceito",
                    conceptExplanation: "Apoiar ou rir de piadas que depreciam mulheres para ser aceito no grupo social de trabalho."
                },
                {
                    key: "B",
                    text: "Posicionar-se no chat: 'Esse tipo de meme reforça estereótipos ultrapassados e desrespeita as profissionais da equipe. Respeito vem antes da piada.'",
                    isReality: true,
                    verdictText: "PERCEPÇÃO DA REALIDADE",
                    feedback: "Você estabeleceu um limite firme contra a normalização do machismo, demonstrando que humor desrespeitoso não é aceitável.",
                    concept: "Desconstrução do Machismo Recreativo",
                    conceptExplanation: "Recusar a justificativa de 'brincadeira' para atitudes que atacam a capacidade de um grupo histórico."
                },
                {
                    key: "C",
                    text: "Ignorar a mensagem e achar que comentários virtuais não afetam o mundo real.",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "O machismo recreativo no ambiente virtual cria um clima hostil que se reflete diretamente nas atitudes presenciais.",
                    concept: "Normalização da Hostilidade Digital",
                    conceptExplanation: "Subestimar o impacto de piadas e conteúdos discriminatórios compartilhados em canais corporativos."
                }
            ]
        },
        {
            id: "SIM_CASE_10",
            category: "#OPORTUNIDADES_E_FUTURO",
            title: "Licença, Maternidade e Limitação de Carreira",
            context: "Durante o planejamento anual de novos projetos internacionais, a diretoria analisa indicações de nomes. Quando o nome de Juliana é citado por seus excelentes resultados, um gestor pondera.",
            speech: "Gestor: 'Juliana é ótima, mas talvez não seja o momento ideal para colocá-la nesse projeto longo... vai que ela queira ter filhos em breve e não consiga manter o ritmo.'",
            options: [
                {
                    key: "A",
                    text: "Concordar com o gestor: 'É verdade, prevenir é melhor. Homens não correm esse risco de se ausentar.'",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "Usar suposições sobre a vida pessoal e a maternidade para barrar o crescimento profissional da mulher é discriminação de gênero.",
                    concept: "Viés de Maternidade & Discriminação",
                    conceptExplanation: "Punir e limitar a carreira das mulheres com base em projeções arbitrárias sobre gravidez ou família."
                },
                {
                    key: "B",
                    text: "Questionar o argumento: 'Avaliar projetos com base em especulações sobre a vida pessoal é discriminatório. Juliana é a mais qualificada e deve ter a oportunidade.'",
                    isReality: true,
                    verdictText: "PERCEPÇÃO DA REALIDADE",
                    feedback: "Você defendeu o direito de acesso igualitário a grandes projetos, refutando estereótipos sobre maternidade na carreira.",
                    concept: "Garantia de Igualdade de Oportunidades",
                    conceptExplanation: "Assegurar que escolhas pessoais ou hipóteses de família não sejam barreiras para a promoção profissional."
                },
                {
                    key: "C",
                    text: "Sugerir perguntar discretamente a Juliana se ela planeja ter filhos antes de decidir.",
                    isReality: false,
                    verdictText: "PERMANÊNCIA NA ILUSÃO",
                    feedback: "Perguntar sobre planos de maternidade em processos de seleção ou promoção viola a privacidade e é prática discriminatória.",
                    concept: "Invasão de Privacidade & Viés de Seleção",
                    conceptExplanation: "Submeter apenas mulheres a questionamentos sobre planos familiares em avaliações de trabalho."
                }
            ]
        }
    ];

    /* --------------------------------------------------------------------------
       2. ESTADO DA APLICAÇÃO E VARIÁVEIS DE CONTROLE
       -------------------------------------------------------------------------- */
    let selectedScenarioLimit = 8;
    let activeScenarios = [];
    let currentScenarioIndex = 0;
    let realityScoreCount = 0;
    let soundEnabled = true;
    let userChoicesHistory = [];

    // DOM Elements
    const bootScreen = document.getElementById('bootScreen');
    const simulatorScreen = document.getElementById('simulatorScreen');
    const resultScreen = document.getElementById('resultScreen');

    const startBtn = document.getElementById('startBtn');
    const soundToggle = document.getElementById('soundToggle');
    const soundLabel = document.getElementById('soundLabel');
    const headerPerceptionVal = document.getElementById('headerPerceptionVal');

    const modeBtns = document.querySelectorAll('.mode-btn');
    const scenarioTracker = document.getElementById('scenarioTracker');
    const perceptionStatusText = document.getElementById('perceptionStatusText');
    const progressFill = document.getElementById('progressFill');
    
    const scenarioCategory = document.getElementById('scenarioCategory');
    const scenarioIdCode = document.getElementById('scenarioIdCode');
    const scenarioTitle = document.getElementById('scenarioTitle');
    const scenarioContext = document.getElementById('scenarioContext');
    const scenarioSpeech = document.getElementById('scenarioSpeech');
    const optionsList = document.getElementById('optionsList');

    const feedbackDrawer = document.getElementById('feedbackDrawer');
    const feedbackVerdictBadge = document.getElementById('feedbackVerdictBadge');
    const feedbackConceptBadge = document.getElementById('feedbackConceptBadge');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackText = document.getElementById('feedbackText');
    const feedbackConceptExplanation = document.getElementById('feedbackConceptExplanation');
    const nextScenarioBtn = document.getElementById('nextScenarioBtn');

    const finalScoreVal = document.getElementById('finalScoreVal');
    const gaugeCircle = document.getElementById('gaugeCircle');
    const finalVerdictTitle = document.getElementById('finalVerdictTitle');
    const finalVerdictSubtitle = document.getElementById('finalVerdictSubtitle');
    const impactQuote = document.getElementById('impactQuote');
    const conceptsGrid = document.getElementById('conceptsGrid');
    const restartBtn = document.getElementById('restartBtn');
    const copySummaryBtn = document.getElementById('copySummaryBtn');
    const toast = document.getElementById('toast');

    // Elementos da Documentação Interna (Modal)
    const docsModal = document.getElementById('docsModal');
    const docsToggleBtn = document.getElementById('docsToggleBtn');
    const docsResultBtn = document.getElementById('docsResultBtn');
    const closeDocsBtn = document.getElementById('closeDocsBtn');
    const closeDocsHeaderBtn = document.getElementById('closeDocsHeaderBtn');

    /* --------------------------------------------------------------------------
       3. SÍNTESE SONORA WEB AUDIO API
       -------------------------------------------------------------------------- */
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    function playSynthBeep(freq, type = 'sine', duration = 0.1, gainVal = 0.15) {
        if (!soundEnabled) return;
        try {
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            console.warn('AudioContext ready', e);
        }
    }

    function soundClick() {
        playSynthBeep(800, 'sine', 0.05, 0.1);
    }

    function soundIllusion() {
        playSynthBeep(220, 'sawtooth', 0.25, 0.2);
    }

    function soundReality() {
        playSynthBeep(587.33, 'triangle', 0.1, 0.15);
        setTimeout(() => playSynthBeep(880, 'sine', 0.2, 0.18), 80);
    }

    function soundCompletion() {
        const notes = [440, 554.37, 659.25, 880];
        notes.forEach((freq, idx) => {
            setTimeout(() => playSynthBeep(freq, 'sine', 0.3, 0.2), idx * 120);
        });
    }

    /* --------------------------------------------------------------------------
       4. DOCUMENTAÇÃO INTERNA DO SISTEMA (MODAL MANAGEMENT)
       -------------------------------------------------------------------------- */
    function openDocsModal() {
        soundClick();
        docsModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeDocsModal() {
        soundClick();
        docsModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    docsToggleBtn.addEventListener('click', openDocsModal);
    if (docsResultBtn) docsResultBtn.addEventListener('click', openDocsModal);
    closeDocsBtn.addEventListener('click', closeDocsModal);
    closeDocsHeaderBtn.addEventListener('click', closeDocsModal);

    // Fechar ao clicar fora do card ou pressionar ESC
    docsModal.addEventListener('click', (e) => {
        if (e.target === docsModal) {
            closeDocsModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !docsModal.classList.contains('hidden')) {
            closeDocsModal();
        }
    });

    /* --------------------------------------------------------------------------
       5. CONTROLES E SELETOR DE MODO
       -------------------------------------------------------------------------- */
    soundToggle.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        soundLabel.textContent = soundEnabled ? "SOM: LIGADO" : "SOM: DESLIGADO";
        if (soundEnabled) soundClick();
    });

    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            soundClick();
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedScenarioLimit = parseInt(btn.getAttribute('data-count'), 10);
        });
    });

    function showScreen(screenToShow) {
        [bootScreen, simulatorScreen, resultScreen].forEach(scr => {
            scr.classList.remove('active');
        });
        screenToShow.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* --------------------------------------------------------------------------
       6. INICIALIZAÇÃO DA SIMULAÇÃO
       -------------------------------------------------------------------------- */
    startBtn.addEventListener('click', () => {
        soundClick();
        currentScenarioIndex = 0;
        realityScoreCount = 0;
        userChoicesHistory = [];
        
        activeScenarios = allScenarios.slice(0, selectedScenarioLimit);

        updatePerceptionHeader(0);
        showScreen(simulatorScreen);
        renderScenario(currentScenarioIndex);
    });

    /* --------------------------------------------------------------------------
       7. RENDERIZAÇÃO DO CENÁRIO ATUAL
       -------------------------------------------------------------------------- */
    function renderScenario(index) {
        const scenario = activeScenarios[index];
        
        feedbackDrawer.classList.add('hidden');
        feedbackDrawer.className = 'feedback-drawer hidden';
        document.body.className = 'mode-default';

        const progressPct = ((index + 1) / activeScenarios.length) * 100;
        progressFill.style.width = `${progressPct}%`;
        scenarioTracker.textContent = `SITUAÇÃO ${index + 1} DE ${activeScenarios.length}`;
        
        const runningPct = index > 0 ? Math.round((realityScoreCount / index) * 100) : 0;
        perceptionStatusText.textContent = `NÍVEL DE PERCEPÇÃO ATUAL: ${runningPct}%`;

        scenarioCategory.textContent = scenario.category;
        scenarioIdCode.textContent = scenario.id;
        scenarioTitle.textContent = scenario.title;
        scenarioContext.textContent = scenario.context;
        scenarioSpeech.textContent = scenario.speech;

        optionsList.innerHTML = '';
        scenario.options.forEach((opt) => {
            const btn = document.createElement('button');
            btn.className = 'option-card';
            btn.setAttribute('tabindex', '0');
            btn.innerHTML = `
                <span class="option-key">${opt.key}</span>
                <span class="option-text">${opt.text}</span>
            `;
            btn.addEventListener('click', () => handleOptionSelect(opt, scenario));
            optionsList.appendChild(btn);
        });
    }

    /* --------------------------------------------------------------------------
       8. PROCESSAMENTO DA ESCOLHA E FEEDBACK
       -------------------------------------------------------------------------- */
    function handleOptionSelect(option, scenario) {
        const optionBtns = optionsList.querySelectorAll('.option-card');
        optionBtns.forEach(btn => btn.style.pointerEvents = 'none');

        if (option.isReality) {
            realityScoreCount++;
            soundReality();
            document.body.className = 'mode-reality';
        } else {
            soundIllusion();
            document.body.className = 'mode-illusion';
        }

        userChoicesHistory.push({
            scenarioId: scenario.id,
            category: scenario.category,
            concept: option.concept,
            isReality: option.isReality
        });

        const currentPct = Math.round((realityScoreCount / (currentScenarioIndex + 1)) * 100);
        updatePerceptionHeader(currentPct);
        perceptionStatusText.textContent = `NÍVEL DE PERCEPÇÃO ATUAL: ${currentPct}%`;

        showFeedback(option);
    }

    function updatePerceptionHeader(pct) {
        headerPerceptionVal.textContent = `${pct}%`;
    }

    /* --------------------------------------------------------------------------
       9. EXIBIÇÃO DO FEEDBACK
       -------------------------------------------------------------------------- */
    function showFeedback(option) {
        feedbackDrawer.classList.remove('hidden');

        if (option.isReality) {
            feedbackDrawer.className = 'feedback-drawer reality-verdict';
            feedbackVerdictBadge.innerHTML = `🟥 PERCEPÇÃO DA REALIDADE`;
            feedbackTitle.textContent = "Consciência Ativa: Você identificou e combateu o preconceito invisível.";
        } else {
            feedbackDrawer.className = 'feedback-drawer illusion-verdict';
            feedbackVerdictBadge.innerHTML = `🟦 PERMANÊNCIA NA ILUSÃO`;
            feedbackTitle.textContent = "Atenção ao Sistema: A atitude naturaliza o machismo ou se omite.";
        }

        feedbackConceptBadge.textContent = `CONCEITO: ${option.concept.toUpperCase()}`;
        feedbackText.textContent = option.feedback;
        feedbackConceptExplanation.textContent = option.conceptExplanation;

        feedbackDrawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    /* --------------------------------------------------------------------------
       10. NAVEGAÇÃO E CONCLUSÃO
       -------------------------------------------------------------------------- */
    nextScenarioBtn.addEventListener('click', () => {
        soundClick();
        currentScenarioIndex++;

        if (currentScenarioIndex < activeScenarios.length) {
            renderScenario(currentScenarioIndex);
        } else {
            finishSimulation();
        }
    });

    /* --------------------------------------------------------------------------
       11. TELA FINAL DE RESULTADO
       -------------------------------------------------------------------------- */
    function finishSimulation() {
        showScreen(resultScreen);
        soundCompletion();

        const finalPercentage = Math.round((realityScoreCount / activeScenarios.length) * 100);
        animateScoreGauge(finalPercentage);

        if (finalPercentage >= 80) {
            document.body.className = 'mode-reality';
            finalVerdictTitle.textContent = "MENTE DESPERTA: PERCEPÇÃO CRÍTICA EXCELENTE";
            finalVerdictSubtitle.textContent = "Sua percepção está afiada para identificar o machismo invisível e intervir ativamente por equidade.";
            impactQuote.textContent = '"A verdadeira transformação ocorre quando nos recusamos a achar normal o desrespeito sutil do cotidiano."';
        } else if (finalPercentage >= 50) {
            document.body.className = 'mode-default';
            finalVerdictTitle.textContent = "PERCEPÇÃO EM CONSTRUÇÃO: ATENÇÃO AOS DETALHES";
            finalVerdictSubtitle.textContent = "Você percebe várias formas de preconceito, mas ainda deixa passar piadas ou tarefas desproporcionais por hábito.";
            impactQuote.textContent = '"Questionar o cotidiano é um exercício contínuo de empatia e responsabilidade social."';
        } else {
            document.body.className = 'mode-illusion';
            finalVerdictTitle.textContent = "DOMINADO PELA ILUSÃO: NECESSIDADE URGENTE DE REFLEXÃO";
            finalVerdictSubtitle.textContent = "Suas escolhas mantêm a ilusão da normalidade perante falas condescendentes, interrupções e estereótipos.";
            impactQuote.textContent = '"Sair da ilusão é reconhecer que pequenas frases e atitudes moldam a realidade das pessoas ao nosso redor."';
        }

        conceptsGrid.innerHTML = '';
        userChoicesHistory.forEach((item, idx) => {
            const card = document.createElement('div');
            card.className = 'concept-item-card';
            card.innerHTML = `
                <div>
                    <strong>${item.category}</strong>
                    <p style="color: #fff; font-weight: 600; margin-top: 2px;">${activeScenarios[idx].title}</p>
                </div>
                <div style="margin-top: 6px;">
                    <span class="${item.isReality ? 'badge-red' : 'badge-blue'}">
                        ${item.isReality ? '🟥 REALIDADE' : '🟦 ILUSÃO'}
                    </span>
                    <span style="font-size: 0.75rem; color: var(--text-secondary); margin-left: 6px;">${item.concept}</span>
                </div>
            `;
            conceptsGrid.appendChild(card);
        });
    }

    function animateScoreGauge(targetPct) {
        let currentPct = 0;
        const interval = setInterval(() => {
            if (currentPct >= targetPct) {
                currentPct = targetPct;
                clearInterval(interval);
            }
            finalScoreVal.textContent = `${currentPct}%`;
            
            const angle = (currentPct / 100) * 360;
            const color = targetPct >= 60 ? 'var(--accent-reality)' : 'var(--accent-illusion)';
            gaugeCircle.style.background = `conic-gradient(${color} ${angle}deg, rgba(255,255,255,0.08) ${angle}deg)`;

            currentPct++;
        }, 15);
    }

    /* --------------------------------------------------------------------------
       12. AÇÕES DA TELA FINAL
       -------------------------------------------------------------------------- */
    restartBtn.addEventListener('click', () => {
        soundClick();
        currentScenarioIndex = 0;
        realityScoreCount = 0;
        userChoicesHistory = [];
        updatePerceptionHeader(0);
        document.body.className = 'mode-default';
        showScreen(bootScreen);
    });

    copySummaryBtn.addEventListener('click', () => {
        soundClick();
        const finalPercentage = Math.round((realityScoreCount / activeScenarios.length) * 100);
        const summaryText = `[ MODO REALIDADE // SIMULADOR DE DECISÃO v3.5 ]
Diagnóstico Concluído: ${finalPercentage}% de Percepção Crítica da Realidade sobre preconceito e machismo invisível no cotidiano.
Total de situações analisadas: ${activeScenarios.length} casos.
Aprenda a identificar Mansplaining, Bropropriating, Gaslighting e estereótipos de gênero no estudo e trabalho!`;

        navigator.clipboard.writeText(summaryText).then(() => {
            showToast("SÍNTESE EDUCATIVA COPIADA PARA A ÁREA DE TRANSFERÊNCIA!");
        }).catch(err => {
            console.error("Erro ao copiar", err);
        });
    });

    function showToast(message) {
        toast.textContent = message;
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3200);
    }

});
