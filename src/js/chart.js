import Chart from 'chart.js';
import RandomColor from 'randomcolor';
import { ConvertToPercentage } from './convert-to-percentage';

const getLabels = ({ api, quantity }) => api.map((item, i) => {
  return `${item.answer}: ${ConvertToPercentage({ portion: getValues(api)[i], quantity })}`;
});

const getValues = (api) => api.map(item => item.count);

const randomBlue = (api) => {
  const { length } = getValues(api)
  return RandomColor({
    count: length,
    seed: length,
    luminosity: 'bright'
  });
};

const ChartDoughnut = ({ api, selector, quantity }) => new Chart(selector, {
  type: 'doughnut',
  data: {
    labels: getLabels({ api, quantity }),
    datasets: [{
      data: getValues(api),
      backgroundColor: randomBlue(api),
      borderColor: '#fff',
      borderWidth: 2
    }]
  },
  options: {
    tooltips: {
      titleFontSize: 14,
      bodyFontSize: 14
    }
  }
});

const ChartBar = ({ api, selector, quantity }) => new Chart(selector, {
  type: 'horizontalBar',
  data: {
    labels: getLabels({ api, quantity }),
    datasets: [{
      data: getValues(api),
      backgroundColor: randomBlue(api),
      borderColor: '#fff',
      borderWidth: 2
    }]
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      titleFontSize: 14,
      bodyFontSize: 14
    }
  }
});

export { ChartDoughnut, ChartBar };
