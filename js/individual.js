document.addEventListener("DOMContentLoaded", function () {
  const tecnicos = [
    { nome: 'ROBSON', os: 57 },
    { nome: 'NETO', os: 114 },
    { nome: 'JEAN', os: 34 },
    { nome: 'MATHEUS', os: 11 },
    { nome: 'RANIERE', os: 20 },
    { nome: 'MATEUS H', os: 33 },
    { nome: 'GILVANIO', os: 107 },
    { nome: 'JORGE', os: 0 },
    { nome: 'MARCIO', os: 94 },
    { nome: 'JEFFERSON', os: 74 },
    { nome: 'LUCAS ER.', os: 68 },
    { nome: 'GABRIEL', os: 71 },
    { nome: 'MARIO', os: 114 },
    { nome: 'IGO', os: 14 },
    { nome: 'BONAPARTE', os: 1 },
    { nome: 'WILLAMYS', os: 4 },
    { nome: 'BERLY', os: 56 }
  ];

  tecnicos.sort((a, b) => b.os - a.os);

  const tabela = document.getElementById('tabela-individual');

  tecnicos.forEach((tecnico, index) => {
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
    row.innerHTML = `<td>${medalha}${tecnico.nome}</td><td>${tecnico.os}</td>`;
    tabela.appendChild(row);
  });
});
