document.addEventListener("DOMContentLoaded", function () {
  const tecnicos = [
    { nome: 'ROBSON', os: 51 },
    { nome: 'NETO', os: 84 },
    { nome: 'JEAN', os: 3 },
    { nome: 'MATHEUS', os: 7 },
    { nome: 'RANIERE', os: 8 },
    { nome: 'MATEUS H', os: 76 },
    { nome: 'GILVANIO', os: 46 },
    { nome: 'JORGE', os: 0 },
    { nome: 'MARCIO', os: 61 },
    { nome: 'JEFFERSON', os: 14 },
    { nome: 'LUCAS ER.', os: 97 },
    { nome: 'GABRIEL', os: 74 },
    { nome: 'MARIO', os: 121 },
    { nome: 'IGO', os: 138 },
    { nome: 'BONAPARTE', os: 10 },
    { nome: 'WILLAMYS ', os: 86 },
    { nome: 'BERLY', os: 52 }
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
  let nomeExibido = tecnico.nome.trim() === 'WILLAMYS'
  ? `<img src="https://media.tenor.com/hDmaZUU2UaIAAAAj/sonic-super-pill-out.gif" alt="Sonic" style="height: 20px; vertical-align: middle; margin-right: 5px;">${tecnico.nome}`
  : tecnico.nome;

row.innerHTML = `<td>${medalha}${nomeExibido}</td><td>${tecnico.os}</td>`;
tabela.appendChild(row);
  });
});
