(function() {

  "use strict";

  // ==================================================
  // Arrays
  // ==================================================

  var dataCity = [{
    value: 1,
    label: 'Amazonas'
  }, {
    value: 1,
    label: 'Pará'
  }, {
    value: 1,
    label: 'Paraíba'
  }, {
    value: 1,
    label: 'Goiás'
  }, {
    value: 1,
    label: 'Roraima'
  }, {
    value: 1,
    label: 'Espírito Santo'
  }, {
    value: 1,
    label: 'Distrito Federal'
  }, {
    value: 2,
    label: 'Alagoas'
  }, {
    value: 2,
    label: 'Ceará'
  }, {
    value: 3,
    label: 'Pernambuco'
  }, {
    value: 5,
    label: 'Bahia'
  }, {
    value: 8,
    label: 'Minas Gerais'
  }, {
    value: 8,
    label: 'Santa Catarina'
  }, {
    value: 10,
    label: 'Rio de Janeiro'
  }, {
    value: 13,
    label: 'Paraná'
  }, {
    value: 14,
    label: 'Rio Grande do Sul'
  }, {
    value: 84,
    label: 'São Paulo'
  }];

  var dataRegions = [{
    value: 67,
    label: 'Sudeste'
  }, {
    value: 1,
    label: 'Centro-Oeste'
  }, {
    value: 8,
    label: 'Nordeste'
  }, {
    value: 2,
    label: 'Norte'
  }, {
    value: 22,
    label: 'Sul'
  }];

  var dataLevels = [{
    value: 46,
    label: 'Pleno'
  }, {
    value: 18,
    label: 'Senior'
  }, {
    value: 35,
    label: 'Junior'
  }, {
    value: 1,
    label: 'Estagiário'
  }];

  var dataLevelsSudeste = [{
    value: 46,
    label: 'Pleno'
  }, {
    value: 20,
    label: 'Senior'
  }, {
    value: 34,
    label: 'Junior'
  }, {
    value: 2,
    label: 'Estagiário'
  }];

  var dataLevelsSul = [{
    value: 17,
    label: 'Pleno'
  }, {
    value: 6,
    label: 'Senior'
  }, {
    value: 11,
    label: 'Junior'
  }, {
    value: 1,
    label: 'Estagiário'
  }];

  var dataLevelsNordeste = [{
    value: 7,
    label: 'Pleno'
  }, {
    value: 2,
    label: 'Senior'
  }, {
    value: 4,
    label: 'Junior'
  }, {
    value: 0,
    label: 'Estagiário'
  }];

  var dataLevelsNorte = [{
    value: 1,
    label: 'Pleno'
  }, {
    value: 0,
    label: 'Senior'
  }, {
    value: 4,
    label: 'Junior'
  }, {
    value: 0,
    label: 'Estagiário'
  }];

  var dataSchemes = [{
    value: 48,
    label: 'CLT'
  }, {
    value: 11.5,
    label: 'CLT/Freelancer/Empresa Própria'
  }, {
    value: 5.5,
    label: 'Estagiário'
  }, {
    value: 3.2,
    label: 'Estagiário/Freelancer/Empresa Própria'
  }, {
    value: 12.8,
    label: 'Freelancer/Empresa Própria'
  }, {
    value: 14,
    label: 'PJ'
  }, {
    value: 5,
    label: 'PJ/Freelancer/Empresa Própria'
  }];

  var dataSalary = [{
    value: 0.6,
    label: 'Acima de R$10 mil'
  }, {
    value: 14.7,
    label: 'Até R$1 mil'
  }, {
    value: 14.7,
    label: 'R$1 mil a R$1,5 mil'
  }, {
    value: 14.7,
    label: 'R$1,5 mil a R$2 mil'
  }, {
    value: 11.5,
    label: 'R$2 mil a R$2,5 mil'
  }, {
    value: 16.5,
    label: 'R$2,5 mil a R$3,5 mil'
  }, {
    value: 10.2,
    label: 'R$3,5 mil a R$4,5 mil'
  }, {
    value: 7.6,
    label: 'R$4,5 mil a R$5,5 mil'
  }, {
    value: 3.8,
    label: 'R$5,5 mil a R$7 mil'
  }, {
    value: 5.7,
    label: 'R$7 mil a R$10 mil'
  }];

  var dataSalarySudeste = [{
    value: 1,
    label: 'Acima de R$10 mil'
  }, {
    value: 11,
    label: 'Até R$1 mil'
  }, {
    value: 14,
    label: 'R$1 mil a R$1,5 mil'
  }, {
    value: 17,
    label: 'R$1,5 mil a R$2 mil'
  }, {
    value: 10,
    label: 'R$2 mil a R$2,5 mil'
  }, {
    value: 17,
    label: 'R$2,5 mil a R$3,5 mil'
  }, {
    value: 10,
    label: 'R$3,5 mil a R$4,5 mil'
  }, {
    value: 9,
    label: 'R$4,5 mil a R$5,5 mil'
  }, {
    value: 5,
    label: 'R$5,5 mil a R$7 mil'
  }, {
    value: 9,
    label: 'R$7 mil a R$10 mil'
  }];

  var dataSalarySul = [{
    value: 6,
    label: 'Até R$1 mil'
  }, {
    value: 8,
    label: 'R$1 mil a R$1,5 mil'
  }, {
    value: 3,
    label: 'R$1,5 mil a R$2 mil'
  }, {
    value: 5,
    label: 'R$2 mil a R$2,5 mil'
  }, {
    value: 6,
    label: 'R$2,5 mil a R$3,5 mil'
  }, {
    value: 4,
    label: 'R$3,5 mil a R$4,5 mil'
  }, {
    value: 3,
    label: 'R$4,5 mil a R$5,5 mil'
  }];

  var dataSalaryNordeste = [{
    value: 5,
    label: 'Até R$1 mil'
  }, {
    value: 1,
    label: 'R$1 mil a R$1,5 mil'
  }, {
    value: 2,
    label: 'R$1,5 mil a R$2 mil'
  }, {
    value: 2,
    label: 'R$2,5 mil a R$3,5 mil'
  }, {
    value: 2,
    label: 'R$3,5 mil a R$4,5 mil'
  }, {
    value: 1,
    label: 'R$5,5 mil a R$7 mil'
  }];

  var dataSalaryNorte = [{
    value: 1,
    label: 'Até R$1 mil'
  }, {
    value: 1,
    label: 'R$1 mil a R$1,5 mil'
  }, {
    value: 3,
    label: 'R$2 mil a R$2,5 mil'
  }];

  var dataFreelaMoney = [{
    value: 17.9,
    label: 'Não fazem ou não informaram'
  }, {
    value: 2.5,
    label: 'Acima de R$ 5 mil'
  }, {
    value: 37,
    label: 'Até R$ 1 mil'
  }, {
    value: 23.5,
    label: 'R$ 1 mil a R$ 2 mil'
  }, {
    value: 10.8,
    label: 'R$ 2 mil a R$ 3 mil'
  }, {
    value: 6.4,
    label: 'R$ 3 mil a R$ 4 mil'
  }, {
    value: 1.9,
    label: 'R$ 4 mil a R$ 5 mil'
  }];

  // ==================================================
  // Chart.JS rules
  // ==================================================


  // City
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-city',
    data: dataCity
  });

  // City Percentage
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-city-percentage',
    data: dataCity,
    formatter: function(y) {
      return Math.round((y / 156) * 100) + '%'
    }
  });

  // Regions
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-regions',
    data: dataRegions,
    formatter: function(y) {
      return Math.round((y / 156) * 100) + '%' }
  });

  // Levels
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-levels',
    data: dataLevels,
    formatter: function(y) {
      return Math.round((y / 156) * 100) + '%' }
  });

  Morris.Donut({
    element: 'chart-levels-sudeste',
    data: dataLevelsSudeste,
    formatter: function(y) {
      return Math.round((y / 103) * 100) + '%' }
  });

  Morris.Donut({
    element: 'chart-levels-sul',
    data: dataLevelsSul,
    formatter: function(y) {
      return Math.round((y / 35) * 100) + '%' }
  });

  Morris.Donut({
    element: 'chart-levels-nordeste',
    data: dataLevelsNordeste,
    formatter: function(y) {
      return Math.round((y / 13) * 100) + '%' }
  });

  Morris.Donut({
    element: 'chart-levels-norte',
    data: dataLevelsNorte,
    formatter: function(y) {
      return Math.round((y / 5) * 100) + '%' }
  });

  // Salary
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-salary',
    data: dataSalary,
    formatter: function(y) {
      return y + '%' }
  });

  Morris.Donut({
    element: 'chart-salary-sudeste',
    data: dataSalarySudeste,
    formatter: function(y) {
      return Math.round((y / 103) * 100) + '%' }
  });

  Morris.Donut({
    element: 'chart-salary-sul',
    data: dataSalarySul,
    formatter: function(y) {
      return Math.round((y / 35) * 100) + '%' }
  });

  Morris.Donut({
    element: 'chart-salary-nordeste',
    data: dataSalaryNordeste,
    formatter: function(y) {
      return Math.round((y / 13) * 100) + '%' }
  });

  Morris.Donut({
    element: 'chart-salary-norte',
    data: dataSalaryNorte,
    formatter: function(y) {
      return Math.round((y / 5) * 100) + '%' }
  });

  // Freela money
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-freela-money',
    data: dataFreelaMoney,
    formatter: function(y) {
      return y + '%' }
  });

  // HTML
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-html',
    data: [
      { value: 1, label: '★★' },
      { value: 12, label: '★★★' },
      { value: 29, label: '★★★★' },
      { value: 58, label: '★★★★★' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // CSS
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-css',
    data: [
      { value: 3, label: '★★' },
      { value: 19, label: '★★★' },
      { value: 35, label: '★★★★' },
      { value: 44, label: '★★★★★' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // JS
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-js',
    data: [
      { value: 6, label: '★' },
      { value: 20, label: '★★' },
      { value: 36, label: '★★★' },
      { value: 20, label: '★★★★' },
      { value: 18, label: '★★★★★' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // UX
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-ux',
    data: [
      { value: 6, label: '★' },
      { value: 15, label: '★★' },
      { value: 41, label: '★★★' },
      { value: 28, label: '★★★★' },
      { value: 10, label: '★★★★★' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // HTML Templates
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-template',
    data: [
      { value: 35, label: '★' },
      { value: 18, label: '★★' },
      { value: 23, label: '★★★' },
      { value: 11, label: '★★★★' },
      { value: 13, label: '★★★★★' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // CSS Pre processors
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-pre-processors',
    data: [
      { value: 18, label: '★' },
      { value: 18, label: '★★' },
      { value: 17, label: '★★★' },
      { value: 31, label: '★★★★' },
      { value: 16, label: '★★★★★' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // CSS Frameworks
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-frameworks',
    data: [
      { value: 12, label: '★' },
      { value: 14, label: '★★' },
      { value: 26, label: '★★★' },
      { value: 27, label: '★★★★' },
      { value: 22, label: '★★★★★' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // JS libs
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-libs',
    data: [
      { value: 7, label: '★' },
      { value: 8, label: '★★' },
      { value: 29, label: '★★★' },
      { value: 31, label: '★★★★' },
      { value: 25, label: '★★★★★' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // JS web apps
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-web-app',
    data: [
      { value: 42, label: '★' },
      { value: 21, label: '★★' },
      { value: 19, label: '★★★' },
      { value: 8, label: '★★★★' },
      { value: 11, label: '★★★★★' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // JS node
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-node',
    data: [
      { value: 56, label: '★' },
      { value: 16, label: '★★' },
      { value: 16, label: '★★★' },
      { value: 6, label: '★★★★' },
      { value: 6, label: '★★★★★' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // JS tasks
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-tasks',
    data: [
      { value: 43, label: '★' },
      { value: 13, label: '★★' },
      { value: 16, label: '★★★' },
      { value: 16, label: '★★★★' },
      { value: 13, label: '★★★★★' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // English
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-en',
    data: [
      { value: 12, label: '★' },
      { value: 15, label: '★★' },
      { value: 40, label: '★★★' },
      { value: 21, label: '★★★★' },
      { value: 12, label: '★★★★★' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // Spanish
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-spa',
    data: [
      { value: 58, label: '★' },
      { value: 25, label: '★★' },
      { value: 14, label: '★★★' },
      { value: 2, label: '★★★★' },
      { value: 2, label: '★★★★★' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // Blog
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-blog',
    data: [
      { value: 69, label: 'Não' },
      { value: 31, label: 'Sim' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // Open source
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-open-source',
    data: [
      { value: 54, label: 'Não' },
      { value: 46, label: 'Sim' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // Groups
  //---------------------------------------------------
  Morris.Donut({
    element: 'chart-groups',
    data: [
      { value: 16, label: 'Não' },
      { value: 84, label: 'Sim' }
    ],
    formatter: function(y) {
      return y + '%' }
  });

  // Average
  //---------------------------------------------------
  Morris.Bar({
    element: 'chart-average',
    data: [
      { y: 'HTML', a: 4.4 },
      { y: 'CSS', a: 4.2 },
      { y: 'JS', a: 3.2 },
      { y: 'Acessibilidade/UX', a: 3.2 },
      { y: 'HTML Templates', a: 2.5 },
      { y: 'Pré Processadores', a: 3 },
      { y: 'CSS - Frameworks', a: 3.3 },
      { y: 'JS - Libs', a: 3.5 },
      { y: 'JS - Web applic', a: 2.2 },
      { y: 'JS - Node', a: 1.8 },
      { y: 'JS - Tasks Runners', a: 2.4 },
      { y: 'Inglês', a: 3 },
      { y: 'Espanhol', a: 1.6 }
    ],
    xkey: 'y',
    ymax: 5,
    ykeys: 'a',
    labels: 'Média',
    xLabelAngle: 60,
    gridTextSize: 14
  });

})();
