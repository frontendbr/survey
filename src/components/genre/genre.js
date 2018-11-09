import './genre.styl';
import Api from './genre.json';
import { ChartDoughnut } from '../../js/chart-doughnut';

const $selector = document.querySelector('[data-chart="genre"]');

ChartDoughnut({ api: Api, selector: $selector, quantity: 1005 });
