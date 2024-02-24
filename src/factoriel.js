function Factoriel(n) {
  if (n < 2) {
    return 1;
  }

  return n * Factoriel(n - 1);
}

console.log(Factoriel(5));
console.log(Factoriel(1));
console.log(Factoriel(2));
console.log(Factoriel(3));
console.log(Factoriel(7));
