import './region.styl';
import * as css from './region-css.json';
import * as data from '../../data.json';
import slug from '../../js/slug.js';
import Chart from 'chart.js';

const brazilStates = {
  'acre': 'AC',
  'alagoas': 'AL',
  'amapa': 'AP',
  'amazonas': 'AM',
  'bahia': 'BA',
  'ceara': 'CE',
  'distrito-federal': 'DF',
  'espirito-santo': 'ES',
  'goias': 'GO',
  'maranhao': 'MA',
  'mato-grosso': 'MT',
  'mato-grosso-do-sul': 'MS',
  'minas-gerais': 'MG',
  'para': 'PA',
  'paraiba': 'PB',
  'parana': 'PR',
  'pernambuco': 'PE',
  'piaui': 'PI',
  'rio-de-janeiro': 'RJ',
  'rio-grande-do-norte': 'RN',
  'rio-grande-do-sul': 'RS',
  'rondonia': 'RO',
  'roraima': 'RR',
  'santa-catarina': 'SC',
  'sao-paulo': 'SP',
  'sergipe': 'SE',
  'tocantins': 'TO',
}

const regions = data
  .body
  .reduce(
    (acc, value) => {
      const name = slug(value[0])
      acc[name] = acc[name] || [];
      acc[name].push(value);

      return acc;
    },
    {},
  )

const brazilianRegions = Object.keys(brazilStates)
  .reduce(
    (acc, value) => {
      if (regions[value]) {
        acc[value] = regions[value]
      }
      return acc;
    },
    {}
  )

const ctx = document
  .querySelector(`.${css.graph}`)
  .getContext('2d');

const myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: Object.keys(brazilianRegions),
    datasets: [{
      label: 'Numero de Pessoas',
      data: Object.values(brazilianRegions).map(x => x.length),
      backgroundColor: '#aceff9',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 0
    }]
  },
  options: {
    barThickness: 0,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          display: false
        },
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        },
      }]
    }
  }
});

const estados = document.querySelector(`.estados-brasil`)

const createGender = (data) => {
  const genders = document.createElement('ol')

  const genderData = data
    .reduce(
      (acc, value) => {
        const gender = value[1]
        if (acc[gender]) {
          acc[gender] = acc[gender] + 1
        } else {
          acc[gender] = 1
        }

        return acc;
      },
      {}
    )
  const totalGender = Object.values(genderData).reduce((acc, value) => acc + value, 0)

  console.log(genderData)
  for (let key in genderData ) {
    const gender = document.createElement('li')
    const percent = (genderData[key] / totalGender) * 100

    gender.innerText = `${key} ${percent.toFixed(2)}%`

    genders.appendChild(gender)
  }

  genders.className = 'estado__genero'

  return genders
}

const createState = (state, data) => {
  const title = document.createElement('h1')
  title.innerText = state
  title.className = 'estado__nome'

  const byGender = createGender(data)

  return [ title, byGender ]
}

Object.keys(brazilianRegions)
  .forEach((x) => {
    const estado = document.createElement('section')
    estado.classList.add(css.estado, `estado__${x}`)

    estado.append(...createState(x, brazilianRegions[x]))

    estados.appendChild(estado)
  })


