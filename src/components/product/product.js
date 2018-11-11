import './product.styl';
import Api from './product.json';
import { ChartDoughnut } from '../../js/chart';

const $selector = document.querySelector('[data-chart="product"]');

ChartDoughnut({ api: Api, selector: $selector, quantity: 1005 });
