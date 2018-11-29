const collatz = (n) => {
  let x = 0;
  if (n % 2 === 0) {
    x = (n / 2);
  } else {
    x = ((3 * n) + 1);
  }
  return x;
}

const recur = (n, i) => {
  (i == undefined) ? i = 2 : i = i;
  let x = collatz(n);
  if (x != 1) {
    i++;
    return recur(x, i);
  } else {
    return i
  }
}

const answer = (test) => {
  let count = 0, t = 0, a = 0;
  for (let i = 1; i < test; i++) {
    count = recur(i);
    if (count > t) {
      t = count;
      a = i;
    }
  }
   return a;
}

// console.log(answer(1000000));
