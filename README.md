# Survey Front-end Brasil

> Pesquisa salarial entre frontenders do Brasil
 
[![license](https://img.shields.io/github/license/frontendbr/survey.svg)](license)
[![GitHub contributors](https://img.shields.io/github/contributors/frontendbr/survey.svg)](https://github.com/frontendbr/survey/graphs/contributors) 

## Getting Started

```sh
# install dependencies
$ npm i

# Run the project
$ npm start
```

With the commands above, you have everything to start.

## About API

```
https://gist.githubusercontent.com/diogomoretti/b010baa011ba8a29b31a48ce80d3b623/raw/44213f1036c3d037947ebc3732be31f6eecb1b49/survey2018.json
```

## About libs

This project use [ChartJS](http://www.chartjs.org/) to make a charts.

## About CSS
 
### Post CSS libs

For grid system uses [Autoprefixer](https://github.com/postcss/autoprefixer) to make easy use browser prefixes, [Lost](https://github.com/peterramsing/lost) with some help from, [Rucksack](https://www.rucksackcss.org/) for animations, reset and a lot of great mixins, [Rupture](https://github.com/jenius/rupture) for responsive utilities. And [Font Magician](https://github.com/jonathantneal/postcss-font-magician/) to get the webfonts.

### CSS Modules

To make easier create your components and avoid a lot of problems, it boilerplate use [CSS Modules](https://github.com/css-modules/css-modules).

Example

```css
.host
  text-align center

.title
  font-size 4rem

.description
  font-size 2rem
```

After the transformation it will become like this

```css
._host_4897k_1 {
  text-align: center;
}

._title_4897k_9 {
  font-size: 4rem;
}

._description_4897k_12 {
  font-size: 2rem;
}
```

## Tasks

- `npm start`: run all tasks and initialize watch for changes and a server
- `npm run build`: run all production tasks create a `dist` folder to deploy
- `npm run lint`: lint javascript and css
- `npm run fix`: command to fix all eslint errors
- `npm run deploy`: run all tasks to build and deploy on gh-pages

## License

MIT License © Felipe Fialho
