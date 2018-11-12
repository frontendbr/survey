import './backend.styl';
import Api from './backend.json';
import { ChartDoughnut } from '../../js/chart';

const $selector = document.querySelector('[data-chart="backend"]');

ChartDoughnut({ api: Api, selector: $selector, quantity: 1005 });
