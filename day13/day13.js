// // 3rd min and max numbers
// let a =[5, 1, 2, 6, 8, 7];
// let b = a[0];
// let c = a[0];
// for (let i = 0; i < a.length; i++) {
//     let d = 0;
//     let e = 0;
//     for (let j = 0; j < a.length; j++) {
//         if (a[j] < a[i]) {
//             d++;
//         }
//         if (a[j] > a[i]) {
//             e++;
//         }
//     }
//     if (d == 2) {
//         b = a[i];
//     }
//     if (e == 2) {
//         c = a[i];
//     }
// }
// console.log("3rd min value:",b);
// console.log("3rd max value:",c);


// Swap two Variables.
let a = 8;
let b = 9;
a = a + b;
b = a - b;
a = a - b;
console.log("a =",a);
console.log("b =",b);

// pattern print
for (let i = 1; i <= 4; i++) {
    let a = "";
    for (let j = 1; j <= 4 - i; j++) {
        a += " ";
    }
    for (let k = 1; k <= i; k++) {
        if (k == 1 || k == i || i == 4) {
            a += "* ";
        }
        else {
            a += "  ";
        }
    }
    console.log(a);
}
