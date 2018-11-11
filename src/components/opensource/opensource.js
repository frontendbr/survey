import './opensource.styl';
import Api from './opensource.json';
import { ChartDoughnut } from '../../js/chart';

const $selector = document.querySelector('[data-chart="opensource"]');

ChartDoughnut({ api: Api, selector: $selector, quantity: 1005 });
