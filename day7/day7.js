a = ""
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
        a += "* ";
    }
    a += '\n';
}
console.log(a);

let b = "";
for (i = 1; i <= 4; i++) {
    b += "* ";
        console.log(b);
    }

let c = '' ;
for (let i = 4 ; i > 0 ; i--) {
    for (let j = 1 ; j <= i ; j++) {
        c += '* ' ;
    }
    c += "\n" ;
}
console.log(c);

for (let i = 0; i < 4; i++) {
  let d = "";
  for (let j = 0; j < i; j++)
  {
    d += " ";
  }
  for (let k = 0; k < 4 - i; k++)
  {
    d += "*";
  }
  console.log(d);
}

for (let i = 1; i <= 4; i++) {
  let e = "";
  for (let j = 0; j < 4- i; j++) {
    e += " ";
  }
  for (let k = 0; k <i;k++) {
    e += "*";
  }
  console.log(e);
}
