// // add these number and get average
// let a = [1, 6, 7, 4, 3, 8, 4]
// let add = 0;
// for (let i = 0; i < a.length; i++) {
//     add += a[i];
// }
// let avg = add / a.length;
// console.log("total:",add);
// console.log("average:",avg);

// fibonacci series
// let a = 0;
// let b = 1;

// for (let i = 0; i < 10; i++) {
//   console.log(a);
//   let c = a + b;
//   a = b;
//   b = c;
// }
// check how many value is repeated
let a =[3,4,3,6,4,4,6,8];
let b = [];
for (let i = 0; i < a.length; i++) {
    let c = 0;
    for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
            c = 1;
            break;
        }
    }
    if (c == 0) {
        b[b.length] = a[i];
        let d = 0;
        for (let k = 0; k < a.length; k++) {
            if (a[i] == a[k]) {
                d++;
            }
        }
        console.log(a[i] + " is " + d + " times");
    }
}