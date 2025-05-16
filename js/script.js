const equipes = [
  { nome: 'ROBSON e NETO', os: 12 },
  { nome: 'JEAN e MATHEUS', os: 8 },
  { nome: 'RANIERE e MATEUS H', os: 15 },
  { nome: 'GILVANIO e JORGE', os: 9 },
  { nome: 'MARCIO e JEFFERSON', os: 11 },
  { nome: 'LUCAS ER. e GABRIEL', os: 10 },
  { nome: 'MARIO e IGO', os: 14 },
  { nome: 'BONAPARTE', os: 6 },
  { nome: 'WILLAMYS', os: 13 },
  { nome: 'BERLY', os: 7 }
];

// Ordena do maior para o menor
equipes.sort((a, b) => b.os - a.os);

const tabela = document.getElementById('tabela-equipes');

equipes.forEach((equipe, index) => {
  const row = document.createElement('tr');

  let classe = '';
  let medalha = '';
  if (index === 0) {
    classe = 'primeiro';
    medalha = '🥇 ';
  } else if (index === 1) {
    classe = 'segundo';
    medalha = '🥈 ';
  } else if (index === 2) {
    classe = 'terceiro';
    medalha = '🥉 ';
  }

  row.className = classe;
  row.innerHTML = `<td>${medalha}${equipe.nome}</td><td>${equipe.os}</td>`;
  tabela.appendChild(row);
});
