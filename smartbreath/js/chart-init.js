// js/chart-init.js
// Универсальные функции для инициализации графиков Chart.js

/**
 * Инициализация столбчатой диаграммы
 * @param {string} canvasId - id тега <canvas>
 * @param {Array<string>} labels - подписи по оси X
 * @param {Array<number>} data - значения набора данных
 * @param {Array<string>} backgroundColor - цвета столбцов
 * @param {Object} [options] - дополнительные опции Chart.js
 */
function initBarChart(canvasId, labels, data, backgroundColor, options = {}) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: options.datasetLabel || '',
          data: data,
          backgroundColor: backgroundColor
        }]
      },
      options: Object.assign({
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } }
      }, options.chartOptions || {})
    });
  }
  
  /**
   * Инициализация линейного графика
   * @param {string} canvasId - id тега <canvas>
   * @param {Array<string>} labels - подписи по оси X
   * @param {Array<number>} data - значения набора данных
   * @param {string} borderColor - цвет линии
   * @param {Object} [options] - дополнительные опции Chart.js
   */
  function initLineChart(canvasId, labels, data, borderColor, options = {}) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: options.datasetLabel || '',
          data: data,
          fill: options.fill || false,
          borderColor: borderColor
        }]
      },
      options: Object.assign({
        responsive: true,
        maintainAspectRatio: false
      }, options.chartOptions || {})
    });
  }
  
  // Примеры использования:
  // initBarChart('chart-0', ['До','После'], [48,32], ['rgba(135,163,48,0.7)','rgba(42,60,36,0.7)']);
  // initLineChart('researchChart', ['Пн','Вт',...], [45,42,...], 'rgba(135,163,48,0.8)');
  
  /*
   * В каждом HTML-файле (map.html, education.html, pilot.html) подключите chart-init.js:
   * <script src="libs/chartjs/chart.min.js"></script>
   * <script src="js/chart-init.js"></script>
   * <script src="js/map.js"></script> // или другой скрипт, где вызываются init* функции
   */
  