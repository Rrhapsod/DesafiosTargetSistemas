function inverterFrase(frase) {
  let novaFrase = "";
  for (let i = frase.length - 1; i >= 0; i--) {
    novaFrase += frase[i];
  }
  return novaFrase;
}

console.log(inverterFrase("Preciso muito de uma oportunidade!"));
