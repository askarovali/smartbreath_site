// js/map.js
// Загрузка данных станций из локального JSON и инициализация Leaflet-карты

// Инициализация карты
const map = L.map('map').setView([43.238949, 76.889709], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Загрузка данных станций из JSON
fetch('assets/data/stations.json')
  .then(response => response.json())
  .then(stations => {
    stations.forEach((station, idx) => {
      const marker = L.marker(station.coords).addTo(map);
      const chartId = `chart-${idx}`;

      const popupContent = `
        <div class="popup-content">
          <h3>${station.name}</h3>
          <p>Текущий уровень PM2.5: <strong>${station.after} μg/m³</strong></p>
          <canvas id="${chartId}" width="200" height="100"></canvas>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on('popupopen', () => {
        initBarChart(
          chartId,
          ['До установки', 'После установки'],
          [station.before, station.after],
          ['rgba(135,163,48,0.7)', 'rgba(42,60,36,0.7)'],
          { datasetLabel: 'PM2.5 (μg/m³)' }
        );
      });
    });
  })
  .catch(err => console.error('Ошибка загрузки данных станций:', err));
