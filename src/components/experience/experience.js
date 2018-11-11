import './experience.styl';
import Api from './experience.json';
import { ChartDoughnut } from '../../js/chart-doughnut';

const $selector = document.querySelector('[data-chart="experience"]');

ChartDoughnut({ api: Api, selector: $selector, quantity: 1005 });
