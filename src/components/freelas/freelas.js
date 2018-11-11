import './freelas.styl';
import Api from './freelas.json';
import { ChartDoughnut } from '../../js/chart';

const $selector = document.querySelector('[data-chart="freelas"]');

ChartDoughnut({ api: Api, selector: $selector, quantity: 1005 });
