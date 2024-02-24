function Fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(5));
console.log(Fibonacci(1));
console.log(Fibonacci(2));
console.log(Fibonacci(3));
console.log(Fibonacci(7));
