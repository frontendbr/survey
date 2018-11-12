import './salary.styl';
import Api from './salary.json';
import ApiWomenEstag from './salary-women-estag.json';
import ApiMenEstag from './salary-men-estag.json';
import ApiWomenJr from './salary-women-jr.json';
import ApiMenJr from './salary-men-jr.json';
import ApiWomenPlann from './salary-women-plann.json';
import ApiMenPlann from './salary-men-plann.json';
import ApiWomenSenior from './salary-women-senior.json';
import ApiMenSenior from './salary-men-senior.json';
import ApiMenSpecialist from './salary-men-senior.json';
import ApiWomenTechlead from './salary-women-techlead.json';
import ApiMenTechlead from './salary-men-techlead.json';
import { ChartBar, ChartDoughnut } from '../../js/chart';

const $selector = (selector) => document.querySelector(selector);

ChartBar({ api: Api, selector: $selector('[data-chart="salary"]'), quantity: 1005 });
ChartDoughnut({ api: ApiWomenEstag, selector: $selector('[data-chart="women-estag"]'), quantity: 13 });
ChartDoughnut({ api: ApiMenEstag, selector: $selector('[data-chart="men-estag"]'), quantity: 68 });
ChartBar({ api: ApiWomenJr, selector: $selector('[data-chart="women-jr"]'), quantity: 36 });
ChartBar({ api: ApiMenJr, selector: $selector('[data-chart="men-jr"]'), quantity: 432 });
ChartBar({ api: ApiWomenPlann, selector: $selector('[data-chart="women-plann"]'), quantity: 42 });
ChartBar({ api: ApiMenPlann, selector: $selector('[data-chart="men-plann"]'), quantity: 730 });
ChartBar({ api: ApiWomenSenior, selector: $selector('[data-chart="women-senior"]'), quantity: 16 });
ChartBar({ api: ApiMenSenior, selector: $selector('[data-chart="men-senior"]'), quantity: 730 });
ChartBar({ api: ApiMenSpecialist, selector: $selector('[data-chart="men-specialist"]'), quantity: 35 });
ChartBar({ api: ApiWomenTechlead, selector: $selector('[data-chart="women-techlead"]'), quantity: 2 });
ChartBar({ api: ApiMenTechlead, selector: $selector('[data-chart="men-techlead"]'), quantity: 40 });
