const equipes = [
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
