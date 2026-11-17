// print pattern
for (let i = 4; i >= 1; i--) {
    let a = "";
    for (let j = 1; j <= 4; j++) {
        if (j <= 4 - i) {
            a += " "
        }
        else {
            a += " *";
        }
    }
    console.log(a);
}
// print pattern
for (i = 1; i <= 7; i++) {
  let a = "";
  let b = 0;
  if (i == 1 || i == 7) {
    b = 3;
  }
  if (i == 2 || i == 6) {
    b = 2;
  }
  if (i == 3 || i == 5) {
    b = 1;
  }
  if (i == 4) {
    b = 0;
  }
  for (let j = 1; j <= 4; j++) {
    if (j <= b) {
      a += " ";
    } else {
      a += "* ";
    }
  }
  console.log(a);
}

// 2nd max Value.
let a = [5, 1, 2, 6, 8, 7];
let b = a[0];
let c = a[1];
if (a[1] > a[0]) {
    b = a[1];
    c = a[0];
}
for (let i = 2; i < a.length; i++){
    if (a[i] > b) {
        c = b;
        b = a[i];
    }
    else if (a[i] > c) {
        c = a[i];
    }
}
console.log("2nd max value:",c);

// 2nd min Value.
let a1 = [5, 1, 2, 6, 8, 7];
let b1 = a[0];
let c1 = a[1];

if (a1[1] < a1[0]) {
    b1 = a1[1];
    c1 = a1[0];
}

for (let i = 2; i < a1.length; i++) {
    if (a1[i] < b1) {
        c1 = b1;
        b1 = a1[i];
    }
    else if (a1[i] < c1) {
        c1 = a1[i];
    }
}
console.log("2nd min value:",c1);