const n = parseInt(prompt("Nhap mot so nguyen:"));

const sqrt = Math.sqrt(n);
const result = Number.isInteger(sqrt)
  ? `${n} la so chinh phuong`
  : `${n} khong phai so chinh phuong`;

console.log(result);
