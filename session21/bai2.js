let odd = 0;
let even = 0;
for (let i = 1; i <= 5; i++) {
  let num = parseFloat(prompt(`Nhp so nguyen thu ${i}`));

  if (isNaN(num)) {
    console.log("gia tri ko hop le");
    i--;
    continue;
  }
  if (num % 2 === 0) {
    odd++;
  } else {
    even++;
  }
}
console.log(`so luong so chan: ${even}`);
console.log(`so luong so le: ${odd}`);
