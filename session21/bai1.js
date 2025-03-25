let sumOdd = 0;

for (let i = 1; i <= 5; i++) {
  let num = parseFloat(prompt(`Nhp so nguyen thu ${i}`));

  if (isNaN(num)) {
    console.log("gia tri ko hop le");
    i--;
    continue;
  }
  if (num % 2 !== 0) {
    sumOdd += num;
  }
}
console.log(`Tong ccac so le trong 5 so da nhap la: ${sumOdd}`);
