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
