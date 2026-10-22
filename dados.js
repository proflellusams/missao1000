// =====================================================================
//  MISSÃO 1000 — Conteúdo do jogo (mundos, questões, inimigos)
//  Professor: você pode editar este arquivo à vontade.
//  Em cada questão, a PRIMEIRA opção de "o" é sempre a correta
//  (o jogo embaralha as opções na hora de mostrar).
// =====================================================================

const PROPOSTA = "“Cabe ao Ministério da Educação criar programas de educação midiática nas escolas, por meio de oficinas semanais conduzidas por professores capacitados, a fim de que os jovens aprendam a identificar notícias falsas.”";

const WORLDS = [
  {
    name: "Sala da Norma", place: "Sala de aula", theme: "sala", floor: "wood",
    short: "Escrita formal",
    title: "Competência 1 — Domínio da modalidade escrita formal",
    accent: "#2f80ed", enemyColor: "#3a2a8c", bossColor: "#2b1d6b",
    chalk: ["Norma-padrão", "acesso à educação", "havia ✓   haviam ✗"],
    boss: "Rei dos Desvios",
    what: [
      "Ortografia e acentuação (com certeza, têm, porque…)",
      "Concordância, regência e crase",
      "Pontuação (nada de vírgula entre sujeito e verbo!)",
      "Registro formal: sem gírias nem marcas de oralidade"
    ],
    game: "Os inimigos são <b>Desvios</b> da norma-padrão. Pule em cima deles para corrigi-los!",
    tip: "Na redação, poucos desvios = nota alta. Releia o texto procurando acentos, crases e concordância.",
    enemies: [
      ["concerteza", "“concerteza” ➜ com certeza"],
      ["haviam erros", "“haviam erros” ➜ havia erros (haver = existir)"],
      ["mais (=mas)", "oposição se escreve MAS, não “mais”"],
      ["a gente vamos", "“a gente vamos” ➜ a gente vai / nós vamos"],
      ["fazem 2 anos", "“fazem dois anos” ➜ faz dois anos"],
      ["pra mim fazer", "“pra mim fazer” ➜ para eu fazer"],
      ["tá ligado", "gíria! use registro formal"]
    ],
    qs: [
      { q: "Qual frase segue a norma-padrão?", o: ["Faz dois anos que o problema persiste.", "Fazem dois anos que o problema persiste.", "Fazem-se dois anos que o problema persiste."], e: "O verbo FAZER indicando tempo decorrido é impessoal: fica sempre no singular." },
      { q: "Complete: “O acesso ___ educação deve ser garantido ___ todos.”", o: ["à / a", "a / à", "à / à"], e: "“Acesso a” + “a educação” = à (crase). Antes de “todos” (pronome) não há artigo, logo não há crase." },
      { q: "Qual frase está correta?", o: ["Havia muitos obstáculos ao projeto.", "Haviam muitos obstáculos ao projeto.", "Houveram muitos obstáculos ao projeto."], e: "HAVER no sentido de “existir” é impessoal: fica no singular (havia, houve)." },
      { q: "Qual grafia está correta?", o: ["com certeza", "concerteza", "com serteza"], e: "“Com certeza” são duas palavras: a preposição COM + o substantivo CERTEZA." },
      { q: "Qual trecho é ADEQUADO ao registro formal da redação?", o: ["Os jovens demonstram pouco interesse pela política.", "A galera não tá nem aí pra política.", "Tipo assim, ninguém liga pra política."], e: "Gírias, abreviações e marcas de oralidade (“tá”, “pra”, “tipo”) devem ser evitadas no texto formal." },
      { q: "Complete: “___ muitas lacunas na legislação brasileira.”", o: ["Existem", "Existe", "Existiu"], e: "Diferente de HAVER, o verbo EXISTIR é pessoal: concorda com o sujeito (“muitas lacunas”)." },
      { q: "Complete: “O governo investiu, ___ os resultados foram tímidos.”", o: ["mas", "mais", "más"], e: "MAS indica oposição (= porém). MAIS indica quantidade/intensidade. MÁS é o plural de “má”." },
      { q: "Qual frase está pontuada corretamente?", o: ["Os jovens brasileiros enfrentam dificuldades no mercado de trabalho.", "Os jovens brasileiros, enfrentam dificuldades no mercado de trabalho.", "Os jovens, brasileiros enfrentam, dificuldades no mercado de trabalho."], e: "Não se separa o sujeito do verbo com vírgula." },
      { q: "Complete conforme a norma-padrão: “Muitos cidadãos preferem a informação confiável ___ notícias falsas.”", o: ["a", "do que", "mais do que"], e: "PREFERIR pede “preferir uma coisa A outra”. “Preferir mais do que” é redundante e foge à norma." },
      { q: "Complete: “A desigualdade persiste ___ faltam políticas públicas eficazes.”", o: ["porque", "por que", "porquê"], e: "PORQUE (junto, sem acento) introduz causa/explicação. “Por que” aparece em perguntas; “porquê” é substantivo." },
      { q: "Complete: “Os governos ___ responsabilidade sobre o tema.”", o: ["têm", "tem", "teem"], e: "No plural, o verbo TER leva acento circunflexo: ele tem / eles têm." },
      { q: "Complete: “A década de 1980 foi um período ___ o país enfrentou grave crise.”", o: ["em que", "onde", "aonde"], e: "ONDE só deve retomar lugar físico. Para tempo, use “em que” ou “no qual”." }
    ]
  },
  {
    name: "Biblioteca do Tema", place: "Biblioteca", theme: "biblioteca", floor: "wood2",
    short: "Tema e repertório",
    title: "Competência 2 — Compreender a proposta e usar repertório",
    accent: "#16a085", enemyColor: "#7b2d8e", bossColor: "#4d1a5c",
    chalk: ["Leia o tema inteiro!"],
    boss: "Fantasma da Fuga ao Tema",
    what: [
      "Abordar o tema COMPLETO, sem tangenciar",
      "Escrever um texto dissertativo-argumentativo (não narração, não carta, não poema)",
      "Usar repertório sociocultural legitimado, pertinente e produtivo",
      "Atenção: fuga total ao tema = nota zero na redação"
    ],
    game: "Os inimigos aqui são <b>armadilhas da proposta</b>: fuga ao tema, senso comum, cópia…",
    tip: "Sublinhe as palavras-chave do tema e use todas elas na sua tese.",
    enemies: [
      ["fuga ao tema", "fuga total ao tema zera a redação!"],
      ["senso comum", "troque “todo mundo sabe” por dados e autores"],
      ["era uma vez…", "narração não é o tipo textual pedido"],
      ["cópia", "trechos copiados dos textos motivadores não contam"],
      ["tangenciou", "aborde o recorte do tema, não só o assunto geral"]
    ],
    qs: [
      { q: "Qual trecho pertence a um texto dissertativo-argumentativo?", o: ["A falta de saneamento básico compromete a saúde pública, pois favorece a propagação de doenças.", "Era uma vez uma cidade sem esgoto, onde vivia uma menina chamada Ana.", "Prezado prefeito, venho por meio desta solicitar melhorias no bairro."], e: "O ENEM exige o tipo dissertativo-argumentativo: defender um ponto de vista com argumentos. Narração e carta fogem ao tipo textual." },
      { q: "Tema (ENEM 2023): “Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil”. Qual abordagem TANGENCIA o tema (fica só na beirada)?", o: ["Falar apenas da desigualdade entre homens e mulheres em geral.", "Discutir por que o cuidado com filhos, idosos e a casa, feito por mulheres, não é reconhecido.", "Propor medidas para valorizar o trabalho de cuidado realizado pelas mulheres."], e: "Tangenciar é falar só do assunto amplo (desigualdade de gênero) sem focar no recorte do tema (a invisibilidade do trabalho de cuidado)." },
      { q: "Qual é um repertório LEGITIMADO?", o: ["Segundo o sociólogo Zygmunt Bauman, as relações na modernidade são cada vez mais frágeis.", "Meu tio sempre diz que as relações de hoje são frágeis.", "Todo mundo sabe que as relações de hoje são frágeis."], e: "Repertório legitimado vem de uma área do conhecimento: autores, dados, leis, fatos históricos, obras. Opinião pessoal e “todo mundo sabe” não contam." },
      { q: "Quando um repertório é PRODUTIVO?", o: ["Quando se relaciona ao tema e é usado para sustentar o argumento.", "Quando é de um autor famoso, mesmo sem relação com o tema.", "Quando aparece logo na primeira linha do texto."], e: "Não basta citar: o repertório precisa ser pertinente ao tema e ser explicado e ligado ao argumento." },
      { q: "O que acontece com uma redação que FOGE totalmente ao tema?", o: ["Recebe nota zero.", "Perde apenas 40 pontos.", "Perde pontos só na Competência 1."], e: "A fuga total ao tema anula a redação: a nota final é zero." },
      { q: "O candidato pode copiar trechos dos textos motivadores?", o: ["Não: trechos copiados são desconsiderados na correção.", "Sim, quanto mais cópia, melhor.", "Sim, desde que coloque aspas no texto inteiro."], e: "Os textos motivadores servem de inspiração. Linhas copiadas são desconsideradas e, se sobrarem poucas linhas autorais, a redação pode até zerar." },
      { q: "Se o aluno escrever um POEMA no lugar da redação, ele…", o: ["recebe nota zero por não atender ao tipo textual.", "ganha pontos extras pela criatividade.", "perde só a Competência 5."], e: "Textos que não são dissertativo-argumentativos (poema, narração, carta) recebem nota zero." },
      { q: "Tema (ENEM 2019): “Democratização do acesso ao cinema no Brasil”. Qual tese aborda o tema COMPLETO?", o: ["O acesso ao cinema no Brasil é desigual, pois as salas se concentram nas grandes cidades e os ingressos são caros.", "O cinema é uma forma de arte muito importante.", "Os filmes estrangeiros são melhores que os nacionais."], e: "A tese precisa conter as palavras-chave do tema: aqui, o ACESSO ao cinema e sua DEMOCRATIZAÇÃO." },
      { q: "Um filme ou uma série pode ser usado como repertório?", o: ["Sim, se for pertinente ao tema e bem articulado ao argumento.", "Não, só vale citar filósofos.", "Sim, basta citar o nome da série."], e: "Obras de ficção valem como repertório sociocultural, desde que relacionadas ao tema e usadas para fundamentar o argumento." },
      { q: "Qual frase é um exemplo de SENSO COMUM, que deve ser evitado?", o: ["Hoje em dia, todo mundo só pensa em celular.", "Segundo o IBGE, o acesso à internet cresceu entre os idosos.", "A Constituição de 1988 garante o direito à educação."], e: "Generalizações sem fundamento (“todo mundo”, “hoje em dia”) enfraquecem o texto. Prefira dados, leis e fontes reconhecidas." },
      { q: "Qual é a estrutura básica do texto dissertativo-argumentativo?", o: ["Introdução, desenvolvimento e conclusão.", "Apresentação, conflito, clímax e desfecho.", "Saudação, corpo da mensagem e despedida."], e: "Narrativas têm conflito e clímax; cartas têm saudação e despedida. A dissertação tem introdução (tese), desenvolvimento (argumentos) e conclusão." }
    ]
  },
  {
    name: "Laboratório dos Argumentos", place: "Laboratório", theme: "lab", floor: "tile",
    short: "Argumentação",
    title: "Competência 3 — Selecionar e organizar argumentos",
    accent: "#7e57c2", enemyColor: "#c0392b", bossColor: "#7b1d12",
    chalk: ["Tese", "Argumento 1 + repertório", "Argumento 2 + análise"],
    boss: "Senhor da Contradição",
    what: [
      "Tese clara e projeto de texto visível",
      "Argumentos relacionados à tese e bem desenvolvidos",
      "Progressão: cada parágrafo avança a discussão",
      "Sem contradições, sem informações soltas — com autoria"
    ],
    game: "Os inimigos são <b>falhas de argumentação</b>. Derrote-os e mostre organização!",
    tip: "Desenvolvimento eficiente: tópico frasal → repertório → análise → fechamento.",
    enemies: [
      ["contradição", "não diga o contrário do que defendeu!"],
      ["argumento circular", "explique causas e consequências"],
      ["info solta", "toda informação deve servir à tese"],
      ["generalização", "evite “sempre”, “nunca”, “todos”"]
    ],
    qs: [
      { q: "Leia: “A Constituição de 1988 garante a todos o direito à saúde. Contudo, a obesidade infantil ainda cresce no Brasil, impulsionada pela publicidade de alimentos ultraprocessados e pela falta de educação alimentar nas escolas.” Qual é a TESE?", o: ["A obesidade infantil cresce por causa da publicidade de ultraprocessados e da falta de educação alimentar.", "A Constituição de 1988 existe.", "A saúde é importante."], e: "A tese é o ponto de vista defendido, geralmente acompanhado dos argumentos que serão desenvolvidos." },
      { q: "O que é “projeto de texto”?", o: ["O planejamento visível da redação: tese e argumentos anunciados e depois desenvolvidos em ordem.", "O rascunho que o candidato entrega junto com a redação.", "O título da redação."], e: "Um bom projeto de texto mostra planejamento: o que é anunciado na introdução é desenvolvido e retomado." },
      { q: "Qual a ordem mais eficiente para um parágrafo de desenvolvimento?", o: ["Tópico frasal → repertório → análise → fechamento.", "Fechamento → análise → tópico frasal.", "Repertório → outro repertório → outro repertório."], e: "O tópico frasal apresenta o argumento; o repertório fundamenta; a análise explica; o fechamento liga tudo à tese." },
      { q: "A introdução defende que as redes sociais prejudicam os jovens, mas o desenvolvimento diz que elas só trazem benefícios. Isso é:", o: ["Uma contradição, que prejudica a coerência.", "Um bom contra-argumento.", "Algo que não influencia a nota."], e: "Contradições quebram a lógica do texto e prejudicam a Competência 3." },
      { q: "Qual informação melhor sustenta a tese “A educação financeira deve ser ensinada nas escolas”?", o: ["O alto número de famílias endividadas no Brasil revela falta de planejamento financeiro.", "A matemática é uma matéria difícil.", "Os bancos têm prédios grandes."], e: "O argumento precisa ter relação direta com a tese e ajudar a comprová-la." },
      { q: "O que é “progressão” no texto?", o: ["Cada parágrafo acrescenta informações novas e faz o texto avançar.", "Repetir a tese em todos os parágrafos com outras palavras.", "Escrever parágrafos cada vez mais longos."], e: "Um texto que só repete a mesma ideia “anda em círculos”. A progressão mostra desenvolvimento." },
      { q: "“A violência é um problema porque é algo muito ruim.” Esse argumento é:", o: ["Circular e superficial: não explica nada de novo.", "Bem desenvolvido e aprofundado.", "Um ótimo repertório."], e: "Argumento circular repete a ideia com outras palavras. Explique causas, consequências e dê exemplos." },
      { q: "O que é mais eficiente na redação?", o: ["Dois argumentos bem desenvolvidos.", "Cinco argumentos citados em uma linha cada.", "Nenhum argumento, só citações."], e: "Profundidade vale mais que quantidade: argumentos bem explicados mostram autoria." },
      { q: "Um parágrafo traz curiosidades sobre o assunto, mas sem relação com a tese. O problema é:", o: ["Informação irrelevante, que desvia o foco do projeto de texto.", "Nenhum: curiosidade sempre ganha ponto.", "Erro de ortografia."], e: "Toda informação precisa servir à defesa do ponto de vista." },
      { q: "O que demonstra AUTORIA na Competência 3?", o: ["Defender um ponto de vista próprio com argumentos consistentes e bem organizados.", "Copiar a opinião dos textos motivadores.", "Usar palavras difíceis em todas as frases."], e: "Autoria aparece quando o candidato seleciona, relaciona e interpreta informações em defesa da própria tese." }
    ]
  },
  {
    name: "Corredor dos Conectivos", place: "Corredor", theme: "corredor", floor: "checker",
    short: "Coesão",
    title: "Competência 4 — Mecanismos de coesão",
    accent: "#e67e22", enemyColor: "#1f3a5f", bossColor: "#10233d",
    chalk: ["Além disso", "Portanto", "Contudo", "Ademais", "Uma vez que"],
    boss: "Repetidor Repetitivo",
    what: [
      "Conectivos adequados à relação de sentido (oposição, causa, conclusão…)",
      "Retomadas com pronomes e sinônimos, sem repetição",
      "Ligação entre parágrafos (Ademais, Diante do exposto…)",
      "Referências claras, sem ambiguidade"
    ],
    game: "Os inimigos são <b>quebras de coesão</b>: repetições, frases soltas, “e… e… e…”.",
    tip: "Varie os conectivos e confira se a relação de sentido está certa.",
    enemies: [
      ["repetição", "use pronomes e sinônimos: “esses indivíduos”"],
      ["e… e… e…", "varie: além disso, ademais, também"],
      ["frase solta", "ligue as ideias com conectivos"],
      ["“ele” quem?", "evite pronomes ambíguos"]
    ],
    qs: [
      { q: "Complete: “O Brasil avançou no saneamento; ___, milhões ainda vivem sem esgoto tratado.”", o: ["entretanto", "portanto", "além disso"], e: "ENTRETANTO indica oposição. PORTANTO indica conclusão; ALÉM DISSO, adição." },
      { q: "Qual expressão é mais adequada para iniciar a CONCLUSÃO?", o: ["Diante do exposto,", "Em primeiro lugar,", "Por exemplo,"], e: "“Diante do exposto”, “Portanto”, “Dessa forma” retomam a discussão e encaminham o fechamento." },
      { q: "Complete: “A falta de leitura prejudica a escrita. ___, limita o senso crítico.”", o: ["Além disso", "No entanto", "Embora"], e: "ALÉM DISSO acrescenta uma nova ideia na mesma direção." },
      { q: "Complete: “Muitos jovens abandonam a escola, ___ precisam trabalhar para ajudar a família.”", o: ["uma vez que", "contudo", "a fim de que"], e: "UMA VEZ QUE introduz CAUSA. “Contudo” é oposição; “a fim de que”, finalidade." },
      { q: "“Os jovens usam muito as redes. Os jovens ficam ansiosos. Os jovens dormem mal.” Qual reescrita tem melhor coesão?", o: ["Os jovens usam muito as redes; por isso, esses indivíduos ficam ansiosos e dormem mal.", "Os jovens usam muito as redes e os jovens ficam ansiosos e os jovens dormem mal.", "Usam redes. Ficam ansiosos. Dormem mal."], e: "Retome termos com pronomes e sinônimos (“esses indivíduos”) e use conectivos para ligar as ideias." },
      { q: "“O governo e a escola precisam agir, mas ele não investe.” Qual é o problema?", o: ["Ambiguidade: não se sabe a quem “ele” se refere.", "Erro de crase.", "Falta de repertório."], e: "Pronomes precisam de referente claro. Melhor: “mas o governo não investe”." },
      { q: "Complete: “Campanhas devem ser feitas ___ conscientizar a população.”", o: ["a fim de", "visto que", "embora"], e: "A FIM DE indica FINALIDADE. “Visto que” indica causa; “embora”, concessão." },
      { q: "Qual conectivo introduz a ideia de um autor?", o: ["Segundo", "Portanto", "Ademais"], e: "SEGUNDO, CONFORME e DE ACORDO COM indicam conformidade com a ideia de alguém." },
      { q: "Complete: “___ haja leis contra o racismo, o preconceito ainda persiste.”", o: ["Embora", "Porque", "Logo"], e: "EMBORA (concessão) apresenta um fato contrário que não impede o principal. Pede verbo no subjuntivo (“haja”)." },
      { q: "Qual é a função da expressão “isto é”?", o: ["Explicar ou reformular uma ideia anterior.", "Indicar oposição.", "Encerrar o texto."], e: "“Isto é”, “ou seja” e “em outras palavras” esclarecem o que foi dito." },
      { q: "Qual opção conecta bem dois parágrafos de desenvolvimento?", o: ["Ademais, outro fator relevante é…", "Era uma vez outro fator…", "Enfim, para concluir…"], e: "ADEMAIS (= além disso) acrescenta um novo argumento e mantém a progressão entre parágrafos." }
    ]
  },
  {
    name: "Pátio da Intervenção", place: "Pátio", theme: "patio", floor: "paving",
    short: "Proposta de intervenção",
    title: "Competência 5 — Proposta de intervenção",
    accent: "#27ae60", enemyColor: "#8e1b1b", bossColor: "#5a0f0f",
    chalk: ["Agente · Ação · Meio · Finalidade · Detalhamento"],
    boss: "Vilão do “Algo Deve Ser Feito”",
    what: [
      "5 elementos: AGENTE, AÇÃO, MODO/MEIO, FINALIDADE e DETALHAMENTO",
      "Proposta ligada ao tema e aos problemas discutidos",
      "Respeito aos direitos humanos",
      "Agentes específicos (não vale “alguém” ou “eles”)"
    ],
    game: "Os inimigos são <b>propostas incompletas</b>. Monte intervenções completas para vencer!",
    tip: "Pergunte: QUEM faz? O QUÊ? COMO? PARA QUÊ? E detalhe um desses elementos.",
    enemies: [
      ["agente vago", "diga QUEM: Ministério, escola, mídia, ONGs…"],
      ["algo deve ser feito", "proposta vaga não pontua"],
      ["sem finalidade", "diga PARA QUE: a fim de…"],
      ["fere direitos", "a proposta deve respeitar os direitos humanos"]
    ],
    qs: [
      { q: PROPOSTA + " Qual é o AGENTE?", o: ["O Ministério da Educação", "Os jovens", "As notícias falsas"], e: "Agente é QUEM vai executar a ação. Evite agentes vagos como “alguém” ou “eles”." },
      { q: PROPOSTA + " Qual é a AÇÃO?", o: ["Criar programas de educação midiática nas escolas", "O Ministério da Educação", "Identificar notícias falsas"], e: "Ação é O QUE será feito para resolver o problema." },
      { q: PROPOSTA + " Qual é o MODO/MEIO?", o: ["Por meio de oficinas semanais", "A fim de que os jovens aprendam", "Cabe ao Ministério"], e: "Modo/meio responde COMO a ação será realizada (por meio de, mediante, através de)." },
      { q: PROPOSTA + " Qual é a FINALIDADE?", o: ["Que os jovens aprendam a identificar notícias falsas", "Oficinas semanais", "Professores capacitados"], e: "Finalidade responde PARA QUE serve a ação (a fim de, para que, com o objetivo de)." },
      { q: PROPOSTA + " Qual trecho é o DETALHAMENTO?", o: ["“conduzidas por professores capacitados”", "“Cabe ao Ministério da Educação”", "“a fim de que”"], e: "Detalhamento é uma informação extra sobre um dos elementos. Aqui, ele detalha COMO são as oficinas." },
      { q: "Quantos elementos uma proposta precisa ter para chegar a 200 pontos na C5?", o: ["5: agente, ação, modo/meio, finalidade e detalhamento", "2: problema e solução", "1: basta dizer que é preciso mudar"], e: "A nota máxima exige proposta completa, com os 5 elementos válidos e articulados à discussão." },
      { q: "Qual proposta está VAGA e INCOMPLETA?", o: ["É preciso que algo seja feito para mudar essa realidade.", "O Congresso Nacional deve aprovar leis de acessibilidade, por meio de projetos construídos com pessoas com deficiência, para garantir a inclusão.", "As prefeituras devem ampliar as ciclovias, mediante parcerias público-privadas, a fim de reduzir a poluição."], e: "“Algo deve ser feito” não tem agente, ação, meio nem finalidade." },
      { q: "Uma proposta que desrespeita os direitos humanos (ex.: “castigar fisicamente os infratores”)…", o: ["não é considerada válida e prejudica a Competência 5.", "ganha nota máxima por ser rigorosa.", "não muda nada na nota."], e: "O ENEM exige respeito aos direitos humanos. Propostas violentas ou discriminatórias não são aceitas." },
      { q: "A proposta de intervenção deve estar relacionada a quê?", o: ["Ao tema e aos problemas discutidos no desenvolvimento.", "A qualquer problema do Brasil.", "Apenas à opinião dos textos motivadores."], e: "A proposta precisa resolver os problemas apresentados no texto: isso mostra articulação." },
      { q: "Qual é o agente MAIS adequado para “combater a evasão escolar”?", o: ["O Ministério da Educação, em parceria com as secretarias estaduais", "Alguém", "Eles"], e: "Agentes específicos (órgãos públicos, escolas, mídia, ONGs, família) deixam a proposta clara e realizável." },
      { q: "Onde a proposta de intervenção costuma aparecer?", o: ["Na conclusão.", "No título.", "Antes da introdução."], e: "Ela costuma aparecer na conclusão, retomando a tese e propondo soluções para os problemas discutidos." }
    ]
  }
];
