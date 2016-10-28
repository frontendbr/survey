(function() {
  "use strict";
  var dataResponse = 466;
  var dataSudeste = 317;
  var dataSul = 85;
  var dataNordeste = 39;
  var dataNorte = 7;
  var dataCentro = 15;
  var dataExterior = 4;
  var dataCity = [{
      value: 1,
      label: "Nova Zelândia"
    }, {
      value: 1,
      label: "EUA"
    }, {
      value: 1,
      label: "Mato Grosso"
    }, {
      value: 1,
      label: "Mato Grosso do Sul"
    }, {
      value: 1,
      label: "Rio Grande do Norte"
    }, {
      value: 2,
      label: "Alemanha"
    }, {
      value: 2,
      label: "Amazonas"
    }, {
      value: 2,
      label: "Sergipe"
    }, {
      value: 2,
      label: "Piauí"
    }, {
      value: 3,
      label: "Espírito Santo"
    }, {
      value: 4,
      label: "Pará"
    }, {
      value: 4,
      label: "Paraíba"
    }, {
      value: 7,
      label: "Goiás"
    }, {
      value: 5,
      label: "Distrito Federal"
    }, {
      value: 4,
      label: "Alagoas"
    }, {
      value: 7,
      label: "Pernambuco"
    }, {
      value: 8,
      label: "Ceará"
    }, {
      value: 9,
      label: "Bahia"
    }, {
      value: 22,
      label: "Santa Catarina"
    }, {
      value: 27,
      label: "Minas Gerais"
    }, {
      value: 31,
      label: "Paraná"
    }, {
      value: 32,
      label: "Rio Grande do Sul"
    }, {
      value: 34,
      label: "Rio de Janeiro"
    }, {
      value: 253,
      label: "São Paulo"
    }],
    dataRegions = [{
      value: 4,
      label: "Exterior"
    }, {
      value: 317,
      label: "Sudeste"
    }, {
      value: 15,
      label: "Centro-Oeste"
    }, {
      value: 39,
      label: "Nordeste"
    }, {
      value: 7,
      label: "Norte"
    }, {
      value: 85,
      label: "Sul"
    }],
    dataLevels = [{
      value: 230,
      label: "Pleno"
    }, {
      value: 88,
      label: "Senior"
    }, {
      value: 126,
      label: "Junior"
    }, {
      value: 22,
      label: "Estagiário"
    }],
    dataLevelsSudeste = [{
      value: 154,
      label: "Pleno"
    }, {
      value: 65,
      label: "Senior"
    }, {
      value: 84,
      label: "Junior"
    }, {
      value: 14,
      label: "Estagiário"
    }],
    dataLevelsSul = [{
      value: 49,
      label: "Pleno"
    }, {
      value: 12,
      label: "Senior"
    }, {
      value: 22,
      label: "Junior"
    }, {
      value: 3,
      label: "Estagiário"
    }],
    dataLevelsNordeste = [{
      value: 19,
      label: "Pleno"
    }, {
      value: 2,
      label: "Senior"
    }, {
      value: 8,
      label: "Junior"
    }, {
      value: 8,
      label: "Estagiário"
    }],
    dataLevelsNorte = [{
      value: 2,
      label: "Pleno"
    }, {
      value: 1,
      label: "Senior"
    }, {
      value: 2,
      label: "Junior"
    }, {
      value: 2,
      label: "Estagiário"
    }],
    dataLevelsCentro = [{
      value: 3,
      label: "Pleno"
    }, {
      value: 6,
      label: "Senior"
    }, {
      value: 6,
      label: "Junior"
    }],
    dataLevelsExterior = [{
      value: 2,
      label: "Pleno"
    }, {
      value: 2,
      label: "Senior"
    }],
    dataSalary = [{
      value: 36,
      label: "Até R$1 mil"
    }, {
      value: 44,
      label: "R$1 mil a R$1,5 mil"
    }, {
      value: 39,
      label: "R$1,5 mil a R$2 mil"
    }, {
      value: 58,
      label: "R$2 mil a R$2,5 mil"
    }, {
      value: 80,
      label: "R$2,5 mil a R$3,5 mil"
    }, {
      value: 69,
      label: "R$3,5 mil a R$4,5 mil"
    }, {
      value: 41,
      label: "R$4,5 mil a R$5,5 mil"
    }, {
      value: 43,
      label: "R$5,5 mil a R$7 mil"
    }, {
      value: 36,
      label: "R$7 mil a R$10 mil"
    }, {
      value: 20,
      label: "Acima de R$10 mil"
    }],
    dataSalarySudeste = [{
      value: 17,
      label: "Até R$1 mil"
    }, {
      value: 27,
      label: "R$1 mil a R$1,5 mil"
    }, {
      value: 22,
      label: "R$1,5 mil a R$2 mil"
    }, {
      value: 38,
      label: "R$2 mil a R$2,5 mil"
    }, {
      value: 17,
      label: "R$2,5 mil a R$3,5 mil"
    }, {
      value: 54,
      label: "R$3,5 mil a R$4,5 mil"
    }, {
      value: 47,
      label: "R$4,5 mil a R$5,5 mil"
    }, {
      value: 33,
      label: "R$5,5 mil a R$7 mil"
    }, {
      value: 36,
      label: "R$7 mil a R$10 mil"
    }, {
      value: 28,
      label: "Acima de R$10 mil"
    }],
    dataSalarySul = [{
      value: 4,
      label: "Até R$1 mil"
    }, {
      value: 12,
      label: "R$1 mil a R$1,5 mil"
    }, {
      value: 10,
      label: "R$1,5 mil a R$2 mil"
    }, {
      value: 10,
      label: "R$2 mil a R$2,5 mil"
    }, {
      value: 18,
      label: "R$2,5 mil a R$3,5 mil"
    }, {
      value: 18,
      label: "R$3,5 mil a R$4,5 mil"
    }, {
      value: 7,
      label: "R$4,5 mil a R$5,5 mil"
    }, {
      value: 2,
      label: "R$5,5 mil a R$7 mil"
    }, {
      value: 3,
      label: "R$7 mil a R$10 mil"
    }, {
      value: 1,
      label: "Acima de R$10 mil"
    }],
    dataSalaryNordeste = [{
      value: 9,
      label: "Até R$1 mil"
    }, {
      value: 2,
      label: "R$1 mil a R$1,5 mil"
    }, {
      value: 6,
      label: "R$1,5 mil a R$2 mil"
    }, {
      value: 7,
      label: "R$2 mil a R$2,5 mil"
    }, {
      value: 8,
      label: "R$2,5 mil a R$3,5 mil"
    }, {
      value: 3,
      label: "R$3,5 mil a R$4,5 mil"
    }, {
      value: 1,
      label: "R$4,5 mil a R$5,5 mil"
    }, {
      value: 1,
      label: "R$5,5 mil a R$7 mil"
    }, {
      value: 2,
      label: "R$7 mil a R$10 mil"
    }],
    dataSalaryNorte = [{
      value: 3,
      label: "Até R$1 mil"
    }, {
      value: 1,
      label: "R$1,5 mil a R$2 mil"
    }, {
      value: 2,
      label: "R$2 mil a R$2,5 mil"
    }],
    dataSalaryCentro = [{
      value: 3,
      label: "Até R$1 mil"
    }, {
      value: 3,
      label: "R$1 mil a R$1,5 mil"
    }, {
      value: 1,
      label: "R$2 mil a R$2,5 mil"
    }, {
      value: 1,
      label: "R$3,5 mil a R$4,5 mil"
    }, {
      value: 3,
      label: "R$5,5 mil a R$7 mil"
    }, {
      value: 2,
      label: "R$7 mil a R$10 mil"
    }, {
      value: 1,
      label: "Acima de R$10 mil"
    }],
    dataSalaryExterior = [{
      value: 4,
      label: "Acima de R$10 mil"
    }],
    dataFreelaMoney = [{
      value: 232,
      label: "Não fazem ou não informaram"
    }, {
      value: 9,
      label: "Acima de R$ 5 mil"
    }, {
      value: 106,
      label: "Até R$ 1 mil"
    }, {
      value: 75,
      label: "R$ 1 mil a R$ 2 mil"
    }, {
      value: 27,
      label: "R$ 2 mil a R$ 3 mil"
    }, {
      value: 37,
      label: "R$ 3 mil a R$ 4 mil"
    }, {
      value: 7,
      label: "R$ 4 mil a R$ 5 mil"
    }];

  Morris.Donut({
    element: "chart-city",
    data: dataCity
  }), Morris.Donut({
    element: "chart-city-percentage",
    data: dataCity,
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-regions",
    data: dataRegions,
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-levels",
    data: dataLevels,
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-levels-sudeste",
    data: dataLevelsSudeste,
    formatter: function(y) {
      return Math.round(y / dataSudeste * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-levels-sul",
    data: dataLevelsSul,
    formatter: function(y) {
      return Math.round(y / dataSul * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-levels-nordeste",
    data: dataLevelsNordeste,
    formatter: function(y) {
      return Math.round(y / dataNordeste * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-levels-norte",
    data: dataLevelsNorte,
    formatter: function(y) {
      return Math.round(y / dataNorte * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-levels-centro",
    data: dataLevelsCentro,
    formatter: function(y) {
      return Math.round(y / dataCentro * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-levels-exterior",
    data: dataLevelsExterior,
    formatter: function(y) {
      return Math.round(y / dataExterior * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-salary",
    data: dataSalary,
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-salary-sudeste",
    data: dataSalarySudeste,
    formatter: function(y) {
      return Math.round(y / dataSudeste * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-salary-sul",
    data: dataSalarySul,
    formatter: function(y) {
      return Math.round(y / dataSul * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-salary-nordeste",
    data: dataSalaryNordeste,
    formatter: function(y) {
      return Math.round(y / dataNordeste * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-salary-norte",
    data: dataSalaryNorte,
    formatter: function(y) {
      return Math.round(y / dataNorte * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-salary-centro",
    data: dataSalaryCentro,
    formatter: function(y) {
      return Math.round(y / dataCentro * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-salary-exterior",
    data: dataSalaryExterior,
    formatter: function(y) {
      return Math.round(y / dataExterior * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-freela-money",
    data: dataFreelaMoney,
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-html",
    data: [{
      value: 3,
      label: "★★"
    }, {
      value: 32,
      label: "★★★"
    }, {
      value: 149,
      label: "★★★★"
    }, {
      value: 282,
      label: "★★★★★"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-css",
    data: [{
      value: 9,
      label: "★★"
    }, {
      value: 61,
      label: "★★★"
    }, {
      value: 180,
      label: "★★★★"
    }, {
      value: 214,
      label: "★★★★★"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-js",
    data: [{
      value: 19,
      label: "★"
    }, {
      value: 49,
      label: "★★"
    }, {
      value: 149,
      label: "★★★"
    }, {
      value: 150,
      label: "★★★★"
    }, {
      value: 97,
      label: "★★★★★"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-ux",
    data: [{
      value: 24,
      label: "★"
    }, {
      value: 60,
      label: "★★"
    }, {
      value: 204,
      label: "★★★"
    }, {
      value: 139,
      label: "★★★★"
    }, {
      value: 35,
      label: "★★★★★"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-template",
    data: [{
      value: 96,
      label: "★"
    }, {
      value: 82,
      label: "★★"
    }, {
      value: 107,
      label: "★★★"
    }, {
      value: 89,
      label: "★★★★"
    }, {
      value: 58,
      label: "★★★★★"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-pre-processors",
    data: [{
      value: 42,
      label: "★"
    }, {
      value: 41,
      label: "★★"
    }, {
      value: 86,
      label: "★★★"
    }, {
      value: 157,
      label: "★★★★"
    }, {
      value: 124,
      label: "★★★★★"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-libs",
    data: [{
      value: 24,
      label: "★"
    }, {
      value: 44,
      label: "★★"
    }, {
      value: 142,
      label: "★★★"
    }, {
      value: 134,
      label: "★★★★"
    }, {
      value: 117,
      label: "★★★★★"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-web-app",
    data: [{
      value: 97,
      label: "★"
    }, {
      value: 66,
      label: "★★"
    }, {
      value: 113,
      label: "★★★"
    }, {
      value: 94,
      label: "★★★★"
    }, {
      value: 73,
      label: "★★★★★"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-node",
    data: [{
      value: 140,
      label: "★"
    }, {
      value: 86,
      label: "★★"
    }, {
      value: 101,
      label: "★★★"
    }, {
      value: 67,
      label: "★★★★"
    }, {
      value: 39,
      label: "★★★★★"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-tasks",
    data: [{
      value: 66,
      label: "★"
    }, {
      value: 49,
      label: "★★"
    }, {
      value: 120,
      label: "★★★"
    }, {
      value: 122,
      label: "★★★★"
    }, {
      value: 91,
      label: "★★★★★"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-en",
    data: [{
      value: 21,
      label: "★"
    }, {
      value: 65,
      label: "★★"
    }, {
      value: 149,
      label: "★★★"
    }, {
      value: 140,
      label: "★★★★"
    }, {
      value: 87,
      label: "★★★★★"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-spa",
    data: [{
      value: 218,
      label: "★"
    }, {
      value: 107,
      label: "★★"
    }, {
      value: 63,
      label: "★★★"
    }, {
      value: 19,
      label: "★★★★"
    }, {
      value: 6,
      label: "★★★★★"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-blog",
    data: [{
      value: 343,
      label: "Não"
    }, {
      value: 123,
      label: "Sim"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-open-source",
    data: [{
      value: 227,
      label: "Não"
    }, {
      value: 239,
      label: "Sim"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-open-source-hours",
    data: [{
      value: 161,
      label: "0h"
    }, {
      value: 85,
      label: "1h"
    }, {
      value: 120,
      label: "2h"
    }, {
      value: 67,
      label: "4h"
    }, {
      value: 12,
      label: "8h"
    }, {
      value: 11,
      label: "16h ou mais"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Donut({
    element: "chart-groups",
    data: [{
      value: 124,
      label: "Não"
    }, {
      value: 342,
      label: "Sim"
    }],
    formatter: function(y) {
      return Math.round(y / dataResponse * 100) + "%";
    }
  }), Morris.Bar({
    element: "chart-average",
    data: [{
      y: "HTML",
      a: 4.53
    }, {
      y: "CSS",
      a: 4.29
    }, {
      y: "JS",
      a: 3.55
    }, {
      y: "Acessibilidade/UX",
      a: 3.22
    }, {
      y: "HTML Templates",
      a: 2.83
    }, {
      y: "Pré Processadores",
      a: 3.62
    }, {
      y: "JS - Libs",
      a: 3.6
    }, {
      y: "JS - WebApp",
      a: 2.95
    }, {
      y: "JS - Node",
      a: 2.49
    }, {
      y: "JS - Tasks Runners",
      a: 4.27
    }, {
      y: "Inglês",
      a: 3.45
    }, {
      y: "Espanhol",
      a: 1.76
    }],
    xkey: "y",
    ymax: 5,
    ykeys: "a",
    labels: "Média",
    xLabelAngle: 60,
    gridTextSize: 14
  });
})()
