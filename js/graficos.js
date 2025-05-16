const equipes = [
  { nome: 'ROBSON e NETO', os: 12 },
  { nome: 'JEAN e MATHEUS', os: 8 },
  { nome: 'RANIERE e MATEUS H', os: 15 },
  { nome: 'GILVANIO e JORGE', os: 9 },
  { nome: 'MARCIO e JEFFERSON', os: 11 },
  { nome: 'LUCAS ER. e GABRIEL', os: 10 },
  { nome: 'MARIO e IGO', os: 14 },
  { nome: 'BONAPARTE', os: 6 },
  { nome: 'WILLAMYS', os: 13 },
  { nome: 'BERLY', os: 7 }
];

const labels = equipes.map(e => e.nome);
const dados = equipes.map(e => e.os);

const ctx = document.getElementById('graficoEquipes').getContext('2d');
let chart;

function criarGrafico(tipo) {
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: tipo,
    data: {
      labels: labels,
      datasets: [{
        label: 'Quantidade de O.S',
        data: dados,
        backgroundColor: [
          '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd',
          '#1e3a8a', '#1d4ed8', '#3b82f6', '#60a5fa',
          '#93c5fd', '#1e40af'
        ],
        borderColor: '#1e3a8a',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: tipo !== 'bar' // ocultar legenda em barras
        }
      }
    }
  });
}

// Carrega gráfico padrão
criarGrafico('bar');

// Altera tipo de gráfico com base na seleção
document.getElementById('tipoGrafico').addEventListener('change', e => {
  criarGrafico(e.target.value);
});
