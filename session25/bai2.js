let num1 = Number(prompt(`Nhap vao so nguyen bAT ky:`));
let num2 = Number(prompt(`Nhap vao so nguyen bAT ky:`));

function sumNum(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return `Loi`;
  }

  let sum = num1 + num2;
  return sum;
}

let result = sumNum(num1, num2);
console.log(`Tong cua ${num1}  va ${num2}:`, result);
