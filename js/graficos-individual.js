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
