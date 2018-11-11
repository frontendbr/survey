import './salary.styl';
import Api from './salary.json';
import { ChartDoughnut } from '../../js/chart-doughnut';

const $selector = document.querySelector('[data-chart="salary"]');

ChartDoughnut({ api: Api, selector: $selector, quantity: 1005 });
