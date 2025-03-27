let n = parseInt(prompt(`Nhap vao so ptu cua mang`));

let arr = [];

if (isNaN(n) || n < 0) {
  console.log(`Ko hop le`);
} else {
  for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt(`Nhap phan tu thu ${i + 1}`));
    if (!isNaN(num)) {
      arr.push(num);
    } else {
      i--;
    }
  }
  console.log(arr);
}

let sumNegative = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    sumNegative++;
  }
}

console.log(sumNegative);
