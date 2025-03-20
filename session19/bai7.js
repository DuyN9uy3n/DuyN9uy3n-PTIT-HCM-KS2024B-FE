let a = parseFloat(prompt("Nhap so thu 1:"));
let b = parseFloat(prompt("Nhap so thu 2:"));
let c = parseFloat(prompt("Nhap so thu 3:"));

let max = a > b ? (a > c ? a : c) : b > c ? b : c;

console.log(`So lon nhat trong 3 so la ${max}`);
