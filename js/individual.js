document.addEventListener("DOMContentLoaded", function () {
  const tecnicos = [
    { nome: 'ROBSON', os: 21 },
    { nome: 'NETO', os: 68 },
    { nome: 'JEAN', os: 18 },
    { nome: 'MATHEUS', os: 2 },
    { nome: 'RANIERE', os: 8 },
    { nome: 'MATEUS H', os: 110 },
    { nome: 'GILVANIO', os: 53 },
    { nome: 'JORGE', os: 0 },
    { nome: 'MARCIO', os: 103 },
    { nome: 'JEFFERSON', os: 9 },
    { nome: 'LUCAS ER.', os: 92 },
    { nome: 'GABRIEL', os: 78 },
    { nome: 'MARIO', os: 76 },
    { nome: 'IGO', os: 42 },
    { nome: 'BONAPARTE', os: 144 },
    { nome: 'WILLAMYS ', os: 28 },
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
  let nomeExibido = tecnico.nome.trim() === 'WILLAMYS'
  ? `<img src="https://media.tenor.com/hDmaZUU2UaIAAAAj/sonic-super-pill-out.gif" alt="Sonic" style="height: 20px; vertical-align: middle; margin-right: 5px;">${tecnico.nome}`
  : tecnico.nome;

row.innerHTML = `<td>${medalha}${nomeExibido}</td><td>${tecnico.os}</td>`;
tabela.appendChild(row);
  });
});
