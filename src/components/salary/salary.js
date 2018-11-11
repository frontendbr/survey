import './salary.styl';
import Api from './salary.json';
import { ChartBar } from '../../js/chart';

const $selector = document.querySelector('[data-chart="salary"]');

ChartBar({ api: Api, selector: $selector, quantity: 1005 });
