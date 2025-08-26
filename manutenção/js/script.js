const equipes = [
  { nome: 'ROBSON e MATEUS H.', os: 127 },
  { nome: 'JEAN e RANIERE', os: 11 },
  { nome: 'MATHEUS S. e NETO', os: 91 },
  { nome: 'GILVANIO e JORGE', os: 46 },
  { nome: 'MARCIO e BONAPARTE', os: 71 },
  { nome: 'LUCAS ER. e GABRIEL', os: 171 },
  { nome: 'WILLAMYS', os: 86},
  { nome: 'MARIO e JEFFERSON', os: 135 },
  { nome: 'IGO E WESLEI', os: 138 },
  { nome: 'EWAMBERLY', os:52 }
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
