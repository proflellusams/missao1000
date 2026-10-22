// =====================================================================
//  MISSÃO 1000 — Mini-aulas e perguntas de Verdadeiro ou Falso
//  Professor: pode editar os textos à vontade.
//  Cada aula é uma lista de "slides": { t: "título", h: `conteúdo em HTML` }
//  Classes úteis no conteúdo:
//    <div class="ok">✔ exemplo certo</div>   <div class="no">✘ exemplo errado</div>
//    <div class="dica">💡 dica em post-it</div>
// =====================================================================

const AULA_INTRO = [
  { t: "O que é a redação do ENEM?", h: `
    <p>É um texto em que você <b>dá a sua opinião</b> sobre um tema e <b>prova</b> que ela faz sentido.</p>
    <p>O nome desse tipo de texto é <b>dissertativo-argumentativo</b>. Parece difícil, mas é assim:</p>
    <div class="steps"><span>🧠 Você pensa</span><span>✍️ Dá sua opinião</span><span>🔎 Explica o porquê</span><span>🛠 Propõe uma solução</span></div>
    <div class="dica">💡 <b>Exemplo de tema:</b> “O uso do celular nas escolas”.<br>
    <b>Opinião:</b> o celular deve ser usado com limites.<br>
    <b>Por quê?</b> Ele distrai nas aulas, mas pode ajudar nas pesquisas.</div>` },
  { t: "Como a redação é organizada", h: `
    <p>A redação tem até <b>30 linhas</b> e, quase sempre, <b>4 parágrafos</b>:</p>
    <div class="para p1"><b>1. Introdução</b> · apresenta o tema e a sua opinião (a <b>tese</b>).</div>
    <div class="para p2"><b>2. Desenvolvimento 1</b> · primeiro argumento, bem explicado.</div>
    <div class="para p3"><b>3. Desenvolvimento 2</b> · segundo argumento, bem explicado.</div>
    <div class="para p4"><b>4. Conclusão</b> · retoma a ideia e traz uma <b>proposta de solução</b>.</div>` },
  { t: "Como é a nota", h: `
    <p>A nota vai de <b>0 a 1000</b>. Ela é dividida em <b>5 competências</b> (habilidades). Cada uma vale até <b>200 pontos</b>:</p>
    <table class="tbl">
      <tr><td><b>C1</b></td><td>Escrever certo, de acordo com a gramática</td></tr>
      <tr><td><b>C2</b></td><td>Entender o tema e mostrar o que você sabe (repertório)</td></tr>
      <tr><td><b>C3</b></td><td>Organizar e explicar os argumentos</td></tr>
      <tr><td><b>C4</b></td><td>Ligar as ideias com conectivos</td></tr>
      <tr><td><b>C5</b></td><td>Propor uma solução para o problema</td></tr>
    </table>
    <div class="dica">💡 No jogo, cada fase é uma competência. Juntando as 5, você busca o <b>1000</b>!</div>` },
  { t: "O que ZERA a redação", h: `
    <p>Cuidado! Estes erros fazem a redação valer <b>zero</b>:</p>
    <div class="no">✘ Fugir totalmente do tema</div>
    <div class="no">✘ Não escrever um texto dissertativo-argumentativo (ex.: poema, história, carta)</div>
    <div class="no">✘ Escrever 7 linhas ou menos</div>
    <div class="no">✘ Copiar só os textos motivadores da prova</div>
    <div class="no">✘ Colocar partes sem relação com o tema de propósito (piadas, receitas, desenhos)</div>` },
  { t: "Como funciona o jogo", h: `
    <p>Cada fase é uma <b>trilha de casinhas</b>. Antes de começar, tem uma <b>mini-aula</b> rápida.</p>
    <div class="legend">
      <span><i class="c n">5</i> Casinha comum</span>
      <span><i class="c bonus">⭐</i> Bônus: avance 2 casas</span>
      <span><i class="c trap">🖋</i> Mancha de tinta: acerte ou volte 2 casas</span>
      <span><i class="c tip">📖</i> Dica do caderno</span>
      <span><i class="c end">🏆</i> Chefe da fase</span>
    </div>
    <p><b>Na sua vez:</b> responda uma pergunta. Acertou? Joga o dado 🎲 e pula as casinhas. Errou? Leia a explicação e tente de novo.</p>
    <p>No fim da trilha, vença o <b>chefe</b> com 3 acertos. Se errar, ele empurra você <b>3 casas para trás</b>!</p>` }
];

const AULAS = [
  // ---------------- C1 ----------------
  [
    { t: "C1 · Escrever certo", h: `
      <p>A Competência 1 olha se você escreve de acordo com a <b>língua formal</b> (a gramática da escola).</p>
      <p>Nada de gíria, abreviação ou “internetês”.</p>
      <div class="no">✘ A galera tá ligada que vc precisa estudar.</div>
      <div class="ok">✔ Os jovens sabem que precisam estudar.</div>` },
    { t: "Concordância: o verbo combina com quem faz a ação", h: `
      <div class="no">✘ Os jovens <u>precisa</u> de apoio.</div>
      <div class="ok">✔ Os jovens <u>precisam</u> de apoio.</div>
      <p>Dois verbos são especiais e ficam sempre no <b>singular</b>:</p>
      <div class="ok">✔ <b>Havia</b> muitos problemas. (haver = existir)</div>
      <div class="ok">✔ <b>Faz</b> dois anos que estudo. (fazer = tempo)</div>
      <div class="no">✘ Haviam muitos problemas. · ✘ Fazem dois anos.</div>` },
    { t: "Crase e acentos", h: `
      <p><b>Crase (à)</b> é a junção de <b>a + a</b>.</p>
      <div class="dica">💡 Truque: troque a palavra por uma masculina. Se virar <b>“ao”</b>, tem crase!<br>
      Vou <b>à</b> escola → Vou <b>ao</b> colégio ✔</div>
      <div class="no">✘ Fui à pé. (não existe “ao pé”) → ✔ Fui a pé.</div>
      <p><b>Acento no plural:</b> ele <b>tem</b> → eles <b>têm</b>; ele <b>vem</b> → eles <b>vêm</b>.</p>` },
    { t: "Palavras que confundem", h: `
      <table class="tbl">
        <tr><td><b>mas</b> = porém</td><td>Estudei, <b>mas</b> esqueci.</td></tr>
        <tr><td><b>mais</b> = quantidade</td><td>Preciso de <b>mais</b> tempo.</td></tr>
        <tr><td><b>porque</b> = explicação</td><td>Faltei <b>porque</b> choveu.</td></tr>
        <tr><td><b>por que</b> = pergunta</td><td><b>Por que</b> você faltou?</td></tr>
        <tr><td><b>com certeza</b></td><td>sempre separado</td></tr>
        <tr><td><b>para eu fazer</b></td><td>e não “pra mim fazer”</td></tr>
      </table>` }
  ],
  // ---------------- C2 ----------------
  [
    { t: "C2 · Entender o tema", h: `
      <p>Leia o tema com calma e <b>sublinhe as palavras-chave</b>.</p>
      <div class="dica">Tema: “Democratização do <u>acesso</u> ao <u>cinema</u> no <u>Brasil</u>”</div>
      <div class="no">✘ Falar só que “o cinema é legal”. Isso é <b>tangenciar</b>: ficar na beirada do tema.</div>
      <div class="ok">✔ Falar por que muitos brasileiros <b>não conseguem ir ao cinema</b> (preço, distância) e como mudar isso.</div>` },
    { t: "O tipo de texto certo", h: `
      <p>O ENEM pede um texto <b>dissertativo-argumentativo</b>: você defende uma opinião com argumentos.</p>
      <div class="no">✘ “Era uma vez uma cidade sem esgoto...” (isso é uma história)</div>
      <div class="no">✘ “Querido prefeito, venho pedir...” (isso é uma carta)</div>
      <div class="ok">✔ “A falta de saneamento prejudica a saúde, <b>pois</b> espalha doenças.”</div>` },
    { t: "Repertório: mostre o que você sabe", h: `
      <p><b>Repertório</b> é um conhecimento que ajuda a provar sua opinião: <b>leis, livros, filmes, dados, fatos históricos, pensadores</b>.</p>
      <div class="ok">✔ “A Constituição de 1988 garante a educação a todos.”</div>
      <div class="ok">✔ “Segundo o IBGE, ...”</div>
      <div class="no">✘ “Minha vizinha disse que...” · ✘ “Todo mundo sabe que...”</div>
      <div class="dica">💡 Não basta citar: <b>explique</b> como o repertório se liga ao tema.</div>` },
    { t: "Cuidado com cópia e senso comum", h: `
      <div class="no">✘ Copiar frases dos textos motivadores (essas linhas não contam).</div>
      <div class="no">✘ “Hoje em dia todo mundo só pensa em celular.” (generalização)</div>
      <div class="ok">✔ Use suas próprias palavras e informações que você conhece.</div>` }
  ],
  // ---------------- C3 ----------------
  [
    { t: "C3 · A tese é a sua opinião principal", h: `
      <p>A <b>tese</b> aparece na introdução e diz o que você defende.</p>
      <div class="dica">Tema: celular nas escolas<br>
      <b>Tese:</b> o celular deve ter limites na escola, <b>pois distrai</b> os alunos e <b>expõe a riscos</b> na internet.</div>
      <p>Repare: a tese já anuncia os <b>dois argumentos</b> que você vai explicar depois.</p>` },
    { t: "Planeje antes: o projeto de texto", h: `
      <p>Antes de escrever, faça um mini-plano no rascunho:</p>
      <div class="steps"><span>1. Tese</span><span>2. Argumento 1</span><span>3. Argumento 2</span><span>4. Solução</span></div>
      <p>Isso se chama <b>projeto de texto</b>. O corretor percebe quando o texto foi planejado.</p>` },
    { t: "Como montar um parágrafo de argumento", h: `
      <p class="parts"><span class="p1">Em primeiro lugar, o celular distrai os estudantes.</span>
      <span class="p2">Segundo pesquisas da área de educação, notificações atrapalham a concentração.</span>
      <span class="p3">Assim, o aluno perde partes da explicação e aprende menos.</span>
      <span class="p4">Logo, limitar o uso em sala ajuda o aprendizado.</span></p>
      <div class="legend small"><span><i class="c p1"></i>Ideia (tópico frasal)</span><span><i class="c p2"></i>Repertório</span><span><i class="c p3"></i>Explicação</span><span><i class="c p4"></i>Fechamento</span></div>` },
    { t: "Erros que derrubam a C3", h: `
      <div class="no">✘ <b>Contradição:</b> defender uma ideia e depois dizer o contrário.</div>
      <div class="no">✘ <b>Argumento circular:</b> “A violência é ruim porque é ruim.”</div>
      <div class="no">✘ <b>Só citar:</b> colocar um repertório e não explicar.</div>
      <div class="ok">✔ Dois argumentos bem explicados valem mais que cinco jogados.</div>` }
  ],
  // ---------------- C4 ----------------
  [
    { t: "C4 · Conectivos são pontes", h: `
      <p>Os <b>conectivos</b> ligam as ideias. Cada um tem uma função:</p>
      <table class="tbl">
        <tr><td>➕ Somar</td><td>além disso, ademais, também</td></tr>
        <tr><td>↔ Opor</td><td>porém, contudo, entretanto, no entanto</td></tr>
        <tr><td>❓ Causa</td><td>pois, porque, uma vez que, visto que</td></tr>
        <tr><td>🎯 Finalidade</td><td>para, a fim de, para que</td></tr>
        <tr><td>✅ Concluir</td><td>portanto, logo, dessa forma, diante do exposto</td></tr>
      </table>` },
    { t: "Use o conectivo certo", h: `
      <p>O conectivo precisa combinar com o sentido da frase:</p>
      <div class="no">✘ Estudei muito; <b>portanto</b>, não passei.</div>
      <div class="ok">✔ Estudei muito; <b>contudo</b>, não passei.</div>
      <div class="no">✘ Choveu, <b>além disso</b> o jogo foi cancelado.</div>
      <div class="ok">✔ O jogo foi cancelado, <b>pois</b> choveu.</div>` },
    { t: "Evite repetir palavras", h: `
      <div class="no">✘ Os jovens usam redes sociais. Os jovens ficam ansiosos. Os jovens dormem mal.</div>
      <div class="ok">✔ Os jovens usam redes sociais; por isso, <b>esses estudantes</b> ficam ansiosos e <b>muitos deles</b> dormem mal.</div>
      <div class="dica">💡 Troque por <b>pronomes</b> (eles, esses) ou <b>sinônimos</b> (estudantes, adolescentes).</div>` },
    { t: "Ligando os parágrafos", h: `
      <div class="para p1"><b>Introdução</b> · “No Brasil, ...”</div>
      <div class="para p2"><b>Desenvolvimento 1</b> · “<b>Em primeiro lugar,</b> ...”</div>
      <div class="para p3"><b>Desenvolvimento 2</b> · “<b>Além disso,</b> ...”</div>
      <div class="para p4"><b>Conclusão</b> · “<b>Portanto,</b> ...”</div>` }
  ],
  // ---------------- C5 ----------------
  [
    { t: "C5 · A proposta de intervenção", h: `
      <p>É a <b>solução</b> que você propõe para o problema do tema. Normalmente fica na <b>conclusão</b>.</p>
      <p>Ela precisa ter relação com o que você discutiu e <b>respeitar os direitos humanos</b>.</p>
      <div class="no">✘ “É preciso que algo seja feito.” (vago demais)</div>` },
    { t: "Os 5 elementos", h: `
      <table class="tbl">
        <tr><td><b>QUEM?</b></td><td>Agente: Ministério da Educação, escolas, mídia, família, ONGs...</td></tr>
        <tr><td><b>O QUÊ?</b></td><td>Ação: o que vai ser feito</td></tr>
        <tr><td><b>COMO?</b></td><td>Meio/modo: por meio de, mediante...</td></tr>
        <tr><td><b>PARA QUÊ?</b></td><td>Finalidade: a fim de, para que...</td></tr>
        <tr><td><b>+ DETALHE</b></td><td>Uma informação a mais sobre um dos elementos</td></tr>
      </table>` },
    { t: "Exemplo completo", h: `
      <p class="parts"><span class="p1">O Ministério da Educação</span>
      <span class="p2">deve criar aulas de educação digital nas escolas,</span>
      <span class="p3">por meio de oficinas semanais</span>
      <span class="p5">conduzidas por professores capacitados,</span>
      <span class="p4">a fim de que os jovens aprendam a identificar notícias falsas.</span></p>
      <div class="legend small"><span><i class="c p1"></i>Quem</span><span><i class="c p2"></i>O quê</span><span><i class="c p3"></i>Como</span><span><i class="c p5"></i>Detalhe</span><span><i class="c p4"></i>Para quê</span></div>` },
    { t: "Monte a sua!", h: `
      <p>Use este modelo na sua redação:</p>
      <div class="dica"><b>[Quem]</b> deve <b>[fazer o quê]</b>, por meio de <b>[como]</b>, <b>[detalhe]</b>, a fim de <b>[para quê]</b>.</div>
      <div class="ok">✔ As escolas devem promover rodas de leitura, por meio de encontros mensais, abertos às famílias, a fim de incentivar o hábito de ler.</div>` }
  ]
];

// Verdadeiro (r: true) ou Falso (r: false)
const VF = [
  [
    { vf: "“Fazem dois anos que estudo aqui” está correto.", r: false, e: "O certo é “FAZ dois anos”: o verbo fazer, indicando tempo, fica no singular." },
    { vf: "Gírias como “tá ligado” devem ser evitadas na redação.", r: true, e: "A redação pede a língua formal, sem gírias." },
    { vf: "Em “Vou à escola” há crase, porque dá para trocar por “Vou ao colégio”.", r: true, e: "Virou “ao”? Então tem crase!" },
    { vf: "“Mais” e “mas” têm o mesmo sentido.", r: false, e: "MAS = porém (oposição). MAIS = quantidade." },
    { vf: "No plural, escrevemos “eles têm”, com acento.", r: true, e: "Ele tem / eles têm." }
  ],
  [
    { vf: "Fugir totalmente do tema zera a redação.", r: true, e: "Fuga total ao tema = nota zero." },
    { vf: "Uma história que começa com “Era uma vez...” é aceita no ENEM.", r: false, e: "Narração não é o tipo de texto pedido. O ENEM pede texto dissertativo-argumentativo." },
    { vf: "Um filme pode ser usado como repertório, se tiver relação com o tema.", r: true, e: "Filmes, livros, séries e músicas valem, se forem bem explicados." },
    { vf: "Copiar os textos motivadores aumenta a nota.", r: false, e: "Trechos copiados não são considerados na correção." },
    { vf: "“Todo mundo sabe que...” é um bom repertório.", r: false, e: "Isso é senso comum. Use dados, leis, autores ou fatos." }
  ],
  [
    { vf: "A tese é a opinião principal do texto.", r: true, e: "Ela aparece na introdução e guia toda a redação." },
    { vf: "É melhor ter muitos argumentos curtos do que dois bem explicados.", r: false, e: "Profundidade vale mais que quantidade." },
    { vf: "Dizer uma coisa na introdução e o contrário depois é contradição.", r: true, e: "Contradição prejudica a Competência 3." },
    { vf: "Basta citar um autor; não precisa explicar.", r: false, e: "O repertório precisa ser explicado e ligado ao argumento." }
  ],
  [
    { vf: "“Portanto” é usado para concluir.", r: true, e: "Portanto, logo, dessa forma: conectivos de conclusão." },
    { vf: "“Contudo” serve para somar ideias.", r: false, e: "Contudo indica OPOSIÇÃO (= porém)." },
    { vf: "Repetir a mesma palavra várias vezes deixa o texto melhor.", r: false, e: "Use pronomes e sinônimos para evitar repetição." },
    { vf: "“Uma vez que” indica causa.", r: true, e: "Ex.: Faltei, uma vez que estava doente." }
  ],
  [
    { vf: "O agente é QUEM vai realizar a ação.", r: true, e: "Ex.: Ministério da Educação, escolas, mídia, família." },
    { vf: "“Alguém precisa fazer algo” é uma proposta completa.", r: false, e: "Falta dizer quem, o quê, como e para quê." },
    { vf: "A finalidade responde à pergunta: PARA QUÊ?", r: true, e: "Use “a fim de”, “para que”, “com o objetivo de”." },
    { vf: "A proposta deve ter relação com os problemas discutidos no texto.", r: true, e: "Isso mostra que a solução está bem articulada." },
    { vf: "Uma proposta pode desrespeitar os direitos humanos, se for eficaz.", r: false, e: "O ENEM exige respeito aos direitos humanos." }
  ]
];

// Textos curtos da fase (aparecem no mapa)
const FASE_TXT = [
  "Corrija as manchas de erro e aprenda a escrever na língua formal.",
  "Descubra as palavras-chave do tema e use bons repertórios.",
  "Monte tese e argumentos bem explicados.",
  "Ligue as ideias com os conectivos certos.",
  "Monte propostas de solução completas."
];
