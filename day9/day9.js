// function pattern(n) {
//   for (let i = 0; i < n; i++) {
//     let a = "";
//     for (let j = 0; j < 4; j++) {
//       if (i % 4 < 2) {
//         a += "*";
//       }
//       else {
//         a += "#";
//       }
//     }
//     console.log(a);
//   }
// }
// pattern(7);


function pattern(n) {
    let a = "";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < n; j++) {
            if (j %4<2) {
                a += "*";
            } else {
                a += "#";
            }
        }
        a += "\n";
    }
    console.log(a);
}
pattern(7);

for (let i = 1; i <= 4; i++) {
    let a = "";
    for (let j = 1; j <= i; j++) {
        a += j;
    }
    console.log(a);
}


for (let i = 1; i <= 4; i++) {
  let a = "";
  let b = 2;
  for (let j = 1; j <= 4; j++) {
    if (j <= 4 - i) {
      a += " ";
    } else {
      a += b;
      b += 2;
    }
  }
  console.log(a);
}