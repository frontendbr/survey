import './blog.styl';
import Api from './blog.json';
import { ChartDoughnut } from '../../js/chart';

const $selector = document.querySelector('[data-chart="blog"]');

ChartDoughnut({ api: Api, selector: $selector, quantity: 1005 });
