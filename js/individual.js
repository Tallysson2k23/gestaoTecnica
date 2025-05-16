document.addEventListener("DOMContentLoaded", function () {
  const tecnicos = [
    { nome: 'ROBSON', os: 6 },
    { nome: 'NETO', os: 6 },
    { nome: 'JEAN', os: 4 },
    { nome: 'MATHEUS', os: 4 },
    { nome: 'RANIERE', os: 8 },
    { nome: 'MATEUS H', os: 7 },
    { nome: 'GILVANIO', os: 5 },
    { nome: 'JORGE', os: 4 },
    { nome: 'MARCIO', os: 6 },
    { nome: 'JEFFERSON', os: 5 },
    { nome: 'LUCAS ER.', os: 5 },
    { nome: 'GABRIEL', os: 5 },
    { nome: 'MARIO', os: 7 },
    { nome: 'IGO', os: 7 },
    { nome: 'BONAPARTE', os: 6 },
    { nome: 'WILLAMYS', os: 13 },
    { nome: 'BERLY', os: 7 }
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
