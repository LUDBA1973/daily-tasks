// desending order
let a = [6, 4, 7, 2, 5]
for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] < a[j]) {
            let b = a[i];
            a[i] = a[j];
            a[j] = b;
        }
    }
}
console.log("desending order :",a);


// find min and max number.
let b =[3,9,8,1,2];
for (let i = 0; i < b.length; i++) {
  for (let j = 1 + i; j < b.length; j++) {
     if (b[i] > b[j]) {
      let c = b[i];
      b[i] = b[j];
      b[j] = c;
    }
  }
}
console.log("min number:",b[0])
console.log("max number:",b[b.length - 1]);

// add these numbers 
let d = [3, 2, 5, 4]
    add = 0;
    for (let i = 0; i < d.length; i++) {
        add += d[i];
    }
    console.log("total:",add);


// Print pattern
for (let i = 1; i <= 4; i++) {
  let a = "";
  for (let j = 1; j <= 4; j++) {
    if (j <= 4 - i) {
      a += " ";
    }
    else {
      a += "* ";
    }
  }
  console.log(a);
}