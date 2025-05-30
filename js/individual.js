document.addEventListener("DOMContentLoaded", function () {
  const tecnicos = [
    { nome: 'ROBSON', os: 21 },
    { nome: 'NETO', os: 61 },
    { nome: 'JEAN', os: 18 },
    { nome: 'MATHEUS', os: 2 },
    { nome: 'RANIERE', os: 8 },
    { nome: 'MATEUS H', os: 105 },
    { nome: 'GILVANIO', os: 52 },
    { nome: 'JORGE', os: 0 },
    { nome: 'MARCIO', os: 97 },
    { nome: 'JEFFERSON', os: 9 },
    { nome: 'LUCAS ER.', os: 90 },
    { nome: 'GABRIEL', os: 74 },
    { nome: 'MARIO', os: 73 },
    { nome: 'IGO', os: 33 },
    { nome: 'BONAPARTE', os: 137 },
    { nome: 'WILLAMYS', os: 25 },
    { nome: 'BERLY', os: 92 }
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
