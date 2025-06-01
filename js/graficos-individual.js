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

const labels = tecnicos.map(t => t.nome);
const dados = tecnicos.map(t => t.os);

const ctx = document.getElementById('graficoIndividual').getContext('2d');
let chart;

function criarGrafico(tipo) {
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: tipo,
    data: {
      labels: labels,
      datasets: [{
        label: 'O.S por Técnico',
        data: dados,
        backgroundColor: [
          '#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa',
          '#93c5fd', '#1e40af', '#1e3a8a', '#3b82f6',
          '#60a5fa', '#93c5fd', '#1e40af', '#1e3a8a',
          '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd',
          '#1e40af'
        ],
        borderColor: '#1e3a8a',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: tipo !== 'bar'
        }
      }
    }
  });
}

criarGrafico('bar');

document.getElementById('tipoGrafico').addEventListener('change', e => {
  criarGrafico(e.target.value);
});
