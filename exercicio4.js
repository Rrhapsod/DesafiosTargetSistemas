const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let total =
  faturamento.SP +
  faturamento.RJ +
  faturamento.MG +
  faturamento.ES +
  faturamento.Outros;

let porcentagemSP = (faturamento.SP / total) * 100;
let porcentagemRJ = (faturamento.RJ / total) * 100;
let porcentagemMG = (faturamento.MG / total) * 100;
let porcentagemES = (faturamento.ES / total) * 100;

console.log(`A porcentagem de SP foi de: ${porcentagemSP.toFixed(2)}%`);
console.log(`A porcentagem do RJ foi de: ${porcentagemRJ.toFixed(2)}%`);
console.log(`A porcentagem de MG foi de: ${porcentagemMG.toFixed(2)}%`);
console.log(`A porcentagem do ES foi de: ${porcentagemES.toFixed(2)}%`);
