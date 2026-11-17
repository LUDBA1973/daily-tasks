//sum of n digits.
function Sum(n) {
  let add = 0;
  let num = n;

  while (num > 0) {
    let a = num % 10;
    add += a;
    num = Math.floor(num / 10);
  }

  return add;
}
console.log("sum of  digits:",Sum(123));

// //multiply of n digits.
function multi(n) {
  let a = 1;
  let num = n;

  while (num > 0) {
    let b = num % 10;
    a *= b;
    num = Math.floor(num / 10);
  }
  return a;
}
console.log("multiply of  digits:",multi(123));



function Sum(n) {
    let add = 0;
    let num = n;
    while (num > 0) {
        let a = num % 100;
        add += a;
        num = Math.floor(num / 100);
    }
    return add;
}
console.log("sum of two digits:",Sum(123456));

// // multiply n two digits.

function multi(n) {
  let a = 1;
  let num = n;

  while (num > 0) {
    let b = num % 100;
    a *= b;
    num = Math.floor(num / 100);
  }
  return a;
}
console.log("multiply of two digits:",multi(1234));

// factorial increment loop
function Increment(n) {
  let a = 1;
  for (let i = 1; i <= n; i++) {
    a *= i;
  }
  return a;
}
console.log("increment loop:",Increment(5));

// factorial decrement loop
function Decrement(n) {
  let a = 1;
  for (let i = n; i >= 1; i--) {
    a *= i;
  }
  return a;
}
console.log("decrement loop:",Decrement(5));