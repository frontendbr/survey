import './events.styl';
import ApiEventsTotal from './events-total.json';
import ApiEventsOut from './events-out.json';
import ApiEventsImportance from './events-importance.json';
import { ChartBar, ChartDoughnut } from '../../js/chart'; 

const $selector = (selector) => document.querySelector(selector);

ChartBar({ api: ApiEventsTotal, selector: $selector('[data-chart="events-total"]'), quantity: 1005 });
ChartDoughnut({ api: ApiEventsOut, selector: $selector('[data-chart="events-out"]'), quantity: 1005 });
ChartBar({ api: ApiEventsImportance, selector: $selector('[data-chart="events-importance"]'), quantity: 1005 });
