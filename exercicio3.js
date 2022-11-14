const fs = require("fs");

let json = fs.readFileSync("dados.json");
let dados = JSON.parse(json);

let menorValor = 999999999;
let maiorValor = 0;
let dias = 0;
let somaFaturamento = 0;
let diasTrabalhados = 0;

for (let i = 0; i < dados.length; i++) {
  if (dados[i].valor < menorValor && dados[i].valor != 0) {
    menorValor = dados[i].valor;
  }

  if (dados[i].valor > maiorValor) {
    maiorValor = dados[i].valor;
  }

  if (dados[i].valor != 0) {
    diasTrabalhados++;
    somaFaturamento = dados[i].valor + somaFaturamento;
  }
}

let media = somaFaturamento.toFixed(2) / diasTrabalhados;

for (let i = 0; i < dados.length; i++) {
  if (dados[i].valor > media) {
    dias++;
  }
}

console.log("O menor valor de faturamento no mês foi de: " + menorValor);
console.log("O maior valor de faturamento no mês foi de: " + maiorValor);
console.log(
  "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: " +
    dias
);
