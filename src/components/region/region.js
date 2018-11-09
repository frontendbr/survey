import './region.styl'; 
import Chart from 'chart.js';
import Api from './region.json';
import RandomColor from 'randomColor';
import { ConvertToPercentage } from '../../js/convert-to-percentage';

const $selector = document.querySelector('[data-chart="region"]'); 
 
const getLabels = () => Api.map((item, i) => `${item.answer}: ${ConvertToPercentage(getValues()[i])}`);

const getValues = () => Api.map(item => item.count);

const arrayCount = getValues().length;

const randomBlue = () => RandomColor({ 
  count: arrayCount,
  hue: '#5891ff'
});

const startChart = ()=> new Chart($selector, {
  type: 'doughnut',
  data: {
    labels: getLabels(),
    datasets: [{ 
      data: getValues(),
      backgroundColor: randomBlue(),
      borderColor: '#fff',
      borderWidth: 2
    }]
  }, 
  options: {
    legend: {
      position: 'left'
    }
  }
});

startChart();