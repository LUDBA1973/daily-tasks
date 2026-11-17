// // Print 1 die (1-6)
// let die = Math.floor(Math.random() * 6) + 1;
// console.log("die :",die);

// // Print 2 die
// let die1 = Math.floor(Math.random() * 6) + 1
// let die2 = Math.floor(Math.random() * 6) + 1
// console.log("die 1:",die1);
// console.log("die 2:",die2);

// // Add 2 die
// console.log("Add 2 die :",die1 + die2)

// Pick 5 random two digit number(10-99)
// let a = 0;
// while (a < 5) {
//   let random = Math.floor(Math.random ()* 90) + 10;
//   a++;
//   console.log("Random num:",random);
// }



// // // ADD 5 two digits and get average
// function randomnum() {
//   return Math.floor(Math.random() * 90) + 10;
// }

// let add = 0;
// let a = 0;
// while (a < 5) {
//     let b = randomnum();
//     console.log("Random number:",b);
//     add += randomnum();
//     a++;
//   console.log("Total :",add);
// }

// let avg = add / 5;
// console.log("average :",avg);

// // ADD 5 three digits and get average
// function randomnum() {
//   return Math.floor(Math.random() * 900) + 100;
// }

// let add = 0;
// let a = 0;
// while (a < 5) {
//  let b = randomnum();
//   console.log("Random number:",b);
//   add += randomnum();
//   a++;
//   console.log("Total :",add);
// }

// let avg = add / 5;
// console.log("average:",avg);
console.log("For loop increment")
// add 5 random two digits Using For loop increment
let a = 0;
for (let i = 0; i < 5; i++) {
  let random = Math.floor(Math.random() * 90) + 10;
  console.log("Random:", random);
  a += random;
}
console.log("Total:", a);
console.log()
console.log("Using For loop Decrement")

// add 5 random two digits Using For loop Decrement
let b = 0;
for (let i = 5; i > 0; i--) {
  let random = Math.floor(Math.random() * 90) + 10;
  console.log("Random:", random);
  b+= random;
}
console.log("Total:", b);
console.log()
console.log("multiply 5 random two digits")
// multiply 5 random two digits
let multiple = 1;
for (let i = 0; i < 5; i++) {
  let random = Math.floor(Math.random() * 90) + 10;
  console.log("Random:", random);
  multiple *= random;
}
console.log("Product:", multiple);
