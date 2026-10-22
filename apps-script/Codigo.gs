/**
 * MISSÃO 1000 — Recebe os dados do jogo e alimenta o Painel do Professor.
 * Cole este código no Apps Script de uma Planilha Google
 * (Extensões > Apps Script) e implante como "App da Web".
 */

const ABA = 'Eventos';
const CABECALHO = ['Data/hora', 'Evento', 'Nome', 'Turma', 'ID', 'Mundo', 'Questão', 'Acertou', 'Nota', 'Acertos', 'Total', 'Pontos', 'Tipo'];

function aba_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(ABA);
  if (!sh) {
    sh = ss.insertSheet(ABA);
    sh.appendRow(CABECALHO);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, CABECALHO.length).setFontWeight('bold').setBackground('#2b2d7c').setFontColor('#ffffff');
  }
  return sh;
}

// O jogo envia os eventos para cá
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
    const d = JSON.parse(e.postData.contents);
    const txt = v => (v === undefined || v === null) ? '' : String(v).slice(0, 200);
    const num = v => (v === undefined || v === null || v === '') ? '' : Number(v);
    aba_().appendRow([
      new Date(), txt(d.ev), txt(d.nome), txt(d.turma), txt(d.sid), num(d.mundo),
      txt(d.questao), num(d.acertou), num(d.nota), num(d.acertos), num(d.total), num(d.pontos), txt(d.tipo)
    ]);
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('erro: ' + err);
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

// O Painel do Professor lê os dados resumidos daqui
function doGet(e) {
  const p = (e && e.parameter) || {};
  const filtroTurma = String(p.turma || '').trim().toLowerCase();
  const dados = aba_().getDataRange().getValues().slice(1);
  const alunos = {}, questoes = {}, turmas = {};

  dados.forEach(r => {
    const [data, ev, nome, turma, sid, mundo, questao, acertou, nota, acertos, total, pontos] = r;
    if (!nome) return;
    const t = String(turma).trim();
    if (t) turmas[t] = true;
    if (filtroTurma && t.toLowerCase() !== filtroTurma) return;
    const k = String(nome).trim().toLowerCase() + '|' + t.toLowerCase();
    const a = alunos[k] || (alunos[k] = {
      nome: String(nome).trim(), turma: t, mundo: 0, status: 'no mapa', ultimo: 0,
      notas: [null, null, null, null, null], acertos: [0, 0, 0, 0, 0], erros: [0, 0, 0, 0, 0], tentativas: 0
    });
    const ms = data instanceof Date ? data.getTime() : new Date(data).getTime();
    if (ms > a.ultimo) a.ultimo = ms;
    const m = Number(mundo) || 0, i = m - 1;
    if (ev === 'inicio') { a.mundo = m; a.status = 'jogando'; a.tentativas++; }
    else if (ev === 'aula' && m > 0) { a.mundo = m; a.status = 'na aula da C' + m; }
    else if (ev === 'resposta' && i >= 0) {
      a.mundo = m; a.status = 'jogando';
      const ok = Number(acertou) === 1;
      if (ok) a.acertos[i]++; else a.erros[i]++;
      const q = String(questao);
      const qq = questoes[q] || (questoes[q] = { questao: q, mundo: m, certas: 0, erradas: 0 });
      if (ok) qq.certas++; else qq.erradas++;
    }
    else if (ev === 'fim' && i >= 0) {
      a.status = 'concluiu a fase ' + m;
      const n = Number(nota);
      if (a.notas[i] === null || n > a.notas[i]) a.notas[i] = n;
    }
    else if (ev === 'falhou') a.status = 'perdeu no mundo ' + m;
    else if (ev === 'aula') a.status = 'na aula de introdução';
    else if (ev === 'saiu' || ev === 'entrou') a.status = 'no mapa';
  });

  return ContentService.createTextOutput(JSON.stringify({
    agora: Date.now(),
    turmas: Object.keys(turmas).sort(),
    alunos: Object.values(alunos),
    questoes: Object.values(questoes)
  })).setMimeType(ContentService.MimeType.JSON);
}
