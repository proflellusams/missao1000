# ✏️ Missão 1000 — A Trilha da Redação do ENEM

Jogo de trilha (casinhas) com tema de escola. Antes de cada fase, o aluno assiste a uma **mini-aula** com exemplos em linguagem fácil. Depois, responde perguntas, joga o dado e pula as casinhas até vencer o chefe.
Funciona no celular e no computador, direto no navegador.

## O que tem na pasta

| Arquivo | Para que serve |
|---|---|
| `index.html` | O jogo |
| `aulas.js` | Mini-aulas (introdução + uma por competência) e perguntas de Verdadeiro ou Falso |
| `dados.js` | Fases, perguntas de múltipla escolha e “manchas de tinta” (erros) |
| `config.js` | Endereço da planilha da turma |
| `professor.html` | Painel do Professor, com a turma em tempo real |
| `apps-script/Codigo.gs` | Código que liga o jogo à sua Planilha Google |

---

## Como funciona o jogo

1. O aluno digita **nome e turma**.
2. Na primeira vez, vê a **Aula de introdução** (o que é a redação, como é a nota, o que zera, como jogar).
3. Escolhe uma **fase** no mapa. Cada fase é uma competência (C1 a C5) e um lugar da escola.
4. Antes da trilha, vê a **mini-aula** da competência, com exemplos ✔ certos e ✘ errados.
5. Na **trilha**: responde a pergunta da vez → se acertar, joga o dado 🎲 e pula as casinhas. Se errar, lê a explicação e tenta de novo.

**Casas especiais**

| Casa | O que acontece |
|---|---|
| ⭐ Bônus | Avança 2 casas |
| 🖋 Mancha de tinta | Mostra um erro de redação. Responda certo ou volte 2 casas |
| 📖 Dica | Mostra um cartão da mini-aula para revisar |
| 🏆 Chefe | 3 acertos para vencer (com tempo). Errou? O chefe empurra 3 casas para trás (a vida dele não volta) |

**Opções de voltar**
- Botões **Anterior / Próximo** em todas as aulas.
- Botão **📖 Aula** dentro do jogo para rever a mini-aula sem perder o lugar.
- Botão **🗺 Mapa** para sair. O jogo **salva a casa** onde o aluno parou: depois ele escolhe *Continuar*, *Rever a mini-aula* ou *Recomeçar a fase*.
- Fases já concluídas podem ser jogadas de novo para melhorar a nota.

**Nota**: a proporção de acertos da fase vira 0, 40, 80, 120, 160 ou 200 pontos, como no ENEM. As 5 fases somam até 1000. No final há um **certificado** para imprimir.

### Modo professor
Na tela inicial, abra **Professor** e marque “Liberar todas as fases” para mostrar qualquer fase na aula.

### Sugestão de aula (1 aula e meia)
1. **10 min**: aula de introdução projetada para a turma (ou cada um no celular).
2. **60 min**: os alunos jogam. Você acompanha pelo painel quem está na aula, quem está jogando e as notas.
3. **10 min**: revisão das “questões que a turma mais erra”, direto do painel.

---

## Parte 1 — Publicar o jogo no GitHub (10 min)

1. Entre em **github.com** e crie uma conta (se ainda não tiver).
2. Clique em **New** (novo repositório). Nome sugerido: `missao1000`. Marque **Public** e clique em **Create repository**.
3. Clique em **uploading an existing file** e arraste **todos os arquivos desta pasta** (inclusive a pasta `apps-script`). Clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em *Branch*, escolha **main** e **/ (root)** e clique em **Save**.
5. Espere 1 ou 2 minutos. O link aparece no topo da página, algo como:
   `https://SEU-USUARIO.github.io/missao1000/`

Esse é o link para os alunos. O painel fica em:
`https://SEU-USUARIO.github.io/missao1000/professor.html`

> Para ver o painel com dados de exemplo, abra `professor.html?demo`.

**Já tinha subido a versão anterior?** Substitua todos os arquivos (e acrescente o novo `aulas.js`). Se já tinha configurado a planilha, cole de novo o `Codigo.gs` no Apps Script e faça uma *Nova versão* da implantação (veja abaixo) para o painel mostrar quem está “na aula”.

---

## Parte 2 — Acompanhar a turma em tempo real (5 min)

1. Crie uma **Planilha Google** nova (sheets.new). Dê o nome “Missão 1000 — Turmas”.
2. Na planilha, clique em **Extensões → Apps Script**.
3. Apague o que estiver lá, cole todo o conteúdo de `apps-script/Codigo.gs` e clique em **Salvar**.
4. Clique em **Implantar → Nova implantação**.
   - Em “Selecionar tipo” (engrenagem), escolha **App da Web**.
   - *Executar como*: **Eu**.
   - *Quem pode acessar*: **Qualquer pessoa**.
   - Clique em **Implantar** e autorize com sua conta Google (se aparecer “app não verificado”, clique em *Avançado → Acessar*; o app é seu).
5. Copie o **URL do app da Web** (termina em `/exec`).
6. No GitHub, abra o arquivo `config.js`, clique no lápis ✏️, cole o URL entre as aspas e salve:

   ```js
   PLANILHA_URL: "https://script.google.com/macros/s/XXXXXXXX/exec"
   ```

O **Painel do Professor** atualiza a cada 10 segundos e mostra: quem está na aula ou jogando, em qual fase, nota de cada competência, % de acertos e as **questões que a turma mais erra**. Use o seletor **Turma** para ver só uma sala.

> Se alterar o Apps Script depois, use **Implantar → Gerenciar implantações → editar → Nova versão** para manter o mesmo link.

---

## Editar aulas e perguntas

**Mini-aulas** (`aulas.js`): cada slide é `{ t: "título", h: \`conteúdo\` }`. Para exemplos, use:
```html
<div class="ok">✔ exemplo certo</div>
<div class="no">✘ exemplo errado</div>
<div class="dica">💡 dica</div>
```

**Verdadeiro ou Falso** (`aulas.js`, lista `VF`):
```js
{ vf: "Frase para julgar", r: true, e: "Explicação" }   // r: true = verdadeiro, false = falso
```

**Múltipla escolha** (`dados.js`, lista `qs` de cada fase):
```js
{ q: "Pergunta", o: ["resposta CERTA", "errada 1", "errada 2"], e: "Explicação" }
```
A **primeira** opção é sempre a correta (o jogo embaralha). Recomendo pelo menos 12 perguntas por fase, somando os dois tipos.
