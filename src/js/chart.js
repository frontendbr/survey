import Chart from 'chart.js';
import RandomColor from 'randomColor';
import { ConvertToPercentage } from './convert-to-percentage';

const getLabels = ({ api, quantity }) => api.map((item, i) => {
  return `${item.answer}: ${ConvertToPercentage({ portion: getValues(api)[i], quantity })}`;
});

const getValues = (api) => api.map(item => item.count);

const randomBlue = (api) => RandomColor({
  count: getValues(api).length,
  hue: '#5891ff'
});

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
    legend: {
      position: 'left',
    },
    tooltips: {
      titleFontSize: 20,
      bodyFontSize: 20
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
    tooltips: {
      titleFontSize: 20,
      bodyFontSize: 20
    }
  }
});

export { ChartDoughnut, ChartBar };
