import './hours.styl';
import Api from './hours.json';
import { ChartDoughnut } from '../../js/chart';

const $selector = document.querySelector('[data-chart="hours"]');

ChartDoughnut({ api: Api, selector: $selector, quantity: 1005 });
