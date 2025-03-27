let arr = [];

for (let i = 0; i <= 10; i++) {
  let num = parseInt(prompt(`Nhap phan tu thu ${i + 1}`));

  if (!isNaN(i) && !arr.includes(num)) {
    arr.push(num);
  } else {
    alert(`Vui long nhap so hop le`);
    i--;
  }
}
console.log(arr);

let maxValue = arr[0];
let indexOfMax = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxValue) {
    maxValue = arr[i];
    indexOfMax = i;
  }
}

console.log(`Ptu lon nhat trong mang: ${maxValue}`);
console.log(`VI tri Ptu lon nhat trong mang: ${indexOfMax}`);
