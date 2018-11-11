import './freelas.styl';
import Api from './freelas.json';
import { ChartBar } from '../../js/chart';

const $selector = document.querySelector('[data-chart="freelas"]');

ChartBar({ api: Api, selector: $selector, quantity: 1005 });
