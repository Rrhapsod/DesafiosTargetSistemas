//exemplo: fibonacci com 20 números

const fibonacci = new Array(20);
fibonacci.fill(0);

fibonacci[0] = 0;
fibonacci[1] = 1;

for (let i = 2; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

const secretNumber = 987;

let presente = 0;

for (let i = 0; i < fibonacci.length; i++) {
  if (secretNumber === fibonacci[i]) {
    presente = 1;
  }
}

if (presente == 1) {
  console.log("Este número pertence à sequência Fibonacci!");
} else {
  console.log("Este número NÃO pertence à sequência Fibonacci!");
}
