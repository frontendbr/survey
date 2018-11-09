import Chart from 'chart.js'; 
import RandomColor from 'randomColor';
import { ConvertToPercentage } from '../js/convert-to-percentage';
 
const getLabels = (api) => api.map((item, i) => `${item.answer}: ${ConvertToPercentage(getValues(api)[i])}`);

const getValues = (api) => api.map(item => item.count);
 
const randomBlue = (api) => RandomColor({ 
  count: getValues(api).length,
  hue: '#5891ff'
});

const ChartDoughnut = ({ api, selector }) => new Chart(selector, {
  type: 'doughnut',
  data: {
    labels: getLabels(api),
    datasets: [{ 
      data: getValues(api),
      backgroundColor: randomBlue(api),
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
 
export { ChartDoughnut };