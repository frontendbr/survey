import './region.styl';
import Api from './region.json';
import { ChartDoughnut } from '../../js/chart';

const $selector = document.querySelector('[data-chart="region"]');

ChartDoughnut({ api: Api, selector: $selector, quantity: 1005 });
