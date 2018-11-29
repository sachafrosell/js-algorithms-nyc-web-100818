// basic

const sumOfEvenFib = () => {
  let x = 1, y = 0, n;
  let sum = 0;
  while (sum < 4000000) {
    n = x + y;
    y = x;
    x = n;
    if (x % 2 === 0) {
      sum += x;
    };
  };
  return sum;
}

// recursive

const fib = (num) => {
  if (num <= 1) {
    return 1;
  };
  return fib(num - 1) + fib(num - 2);
}

const sum = () => {
  let sum = 0;
  let x = 1;
  while (sum < 4000000) {
    if (fib(x) % 2 === 0) {
      sum += fib(x);
    };
    x++;
  };
  return sum;
}

// console.log(sum());
