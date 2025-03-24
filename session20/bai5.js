let a = +prompt("nhap so a: ");
let b = +prompt("nhap so b: ");

if (isNaN(a) || isNaN(b) || b < 0) {
  console.log("du lieu ko hop le");
} else {
  result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  console.log(`${a} lua thua  ${b} = ${result}`);
}
