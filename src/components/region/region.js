import './region.styl';
import Api from './region.json';
import { ChartBar } from '../../js/chart';

const $selector = document.querySelector('[data-chart="region"]');

ChartBar({ api: Api, selector: $selector, quantity: 1005 });
