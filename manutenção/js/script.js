const equipes = [
  { nome: 'ROBSON e NETO', os: 82 },
  { nome: 'JEAN e MATHEUS', os: 20 },
  { nome: 'RANIERE e MATEUS H', os: 113 },
  { nome: 'GILVANIO e JORGE', os: 52 },
  { nome: 'MARCIO e JEFFERSON', os: 106 },
  { nome: 'LUCAS ER. e GABRIEL', os: 164 },
  { nome: 'MARIO e IGO', os: 106 },
  { nome: 'BONAPARTE e WILL', os: 106 },
  { nome: 'BERLY', os: 92 }
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
