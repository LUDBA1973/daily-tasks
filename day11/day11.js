// // find max number :-
// let a = [2, 5, 1, 3, 8, 9]
// let b = a[0]
// for (let i = 0; i < a.length; i++) {
// if (a[i] > b) {
// b = a[i];
// }
// }
// console.log("max number :",b);

// 2. Repeated Value in Array
// let a = ['a', 'a', 'c', 'd', 'c', 'a', 'b'];
// let b = [];
// for (let i = 0; i < a.length; i++) {
//     let c = 0;
//     for (let j = 0; j < b.length; j++) {
//         if (a[i] === b[j]) {
//             c = 1;
//             break;
//         }
//     }
//     if (c === 0) {
//         b[b.length] = a[i];
//         let d = 0;
//         for (let k = 0; k < a.length; k++) {
//             if (a[i] === a[k]) {
//                 d++;
//             }
//         }
//         console.log(a[i] + " is " + d + " times");
//     }
// }

// min & max numbers.
let a = [5, 1, 2, 6, 8]
let b = a[0]
let c = a[0]
for (let i = 1; i < a.length; i++) {
  if (a[i] < b) {
    b = a[i];
  }
  if (a[i] > c) {
    c = a[i];
  }
}
console.log("min number :",b);
console.log("max number :",c);