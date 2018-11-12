import './level.styl';
import Api from './level.json';
import { ChartDoughnut } from '../../js/chart';

const $selector = document.querySelector('[data-chart="level"]');

ChartDoughnut({ api: Api, selector: $selector, quantity: 1005 });
