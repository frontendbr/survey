import './experience.styl';
import Api from './experience.json';
import { ChartBar } from '../../js/chart';

const $selector = document.querySelector('[data-chart="experience"]');

ChartBar({ api: Api, selector: $selector, quantity: 1005 });
