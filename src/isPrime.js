function IsPrime(n) {
  if (n <= 2) {
    return true;
  }

  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(IsPrime(4));
console.log(IsPrime(5));
console.log(IsPrime(2));
console.log(IsPrime(10));
