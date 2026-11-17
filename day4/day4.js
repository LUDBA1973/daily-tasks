// power of 2's increment loop
console.log("power of 2's increment loop")
function power(n) {
  for (i = 0; i <= n; i++) {
    let a = 2 ** i;
    console.log("2^",i,"=",a)
  }
}
power(4)

// power of 2's decrement loop
console.log("power of 2's decrement loop")
function power(n) {
  for (i = n; i >= 0; i--) {
    a = 2 ** i;
   console.log("2^",i,"=",a)
  }
}
power(4)

// power of 2's using while loop
console.log("power of 2's using while loop")
function power (n) {
  let i = 0;
  while (i <= n) {
    let a = 2 ** i;
    console.log("2^",i,"=",a)
    i++;
  }
}
two (4)

// power of 2's using do while loop
console.log("power of 2's using do while loop")
function two (n) {
  let i = 0;
  do {
    let a = 2 ** i;
    console.log("2^",i,"=",a)
    i++;
  } while (i <= n);
}
two (4);
