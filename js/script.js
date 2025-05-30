const equipes = [
<<<<<<< HEAD
  { nome: 'ROBSON e NETO', os: 82 },
  { nome: 'JEAN e MATHEUS', os: 20 },
  { nome: 'RANIERE e MATEUS H', os: 113 },
  { nome: 'GILVANIO e JORGE', os: 52 },
  { nome: 'MARCIO e JEFFERSON', os: 106 },
  { nome: 'LUCAS ER. e GABRIEL', os: 164 },
  { nome: 'MARIO e IGO', os: 106 },
  { nome: 'BONAPARTE e WILLAMYS', os: 106 },
  { nome: 'BERLY', os: 92 }
=======
  { nome: 'NETO e WILLAMYS', os: 118 },
  { nome: 'ROBSON e MATHEUS S.', os: 68 },
  { nome: 'JEAN e RANIERE', os: 54 },
  { nome: 'GILVANIO e IGO', os: 121 },
  { nome: 'MARCIO e JORGE', os: 94 },
  { nome: 'LUCAS ER. e GABRIEL', os: 139 },
  { nome: 'MARIO e BONAPARTE', os: 115 },
  { nome: 'MATEUS H.', os: 33 },
  { nome: 'JEFFERSON', os: 74 },
  { nome: 'BERLY', os: 56 }
>>>>>>> a8760a45ebc162d4775c99fc63ba81b691e75179
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
