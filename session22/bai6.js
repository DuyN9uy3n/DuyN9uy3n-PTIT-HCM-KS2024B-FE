let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

let input = parseInt(prompt("Nhap so nguyen can tim:"));
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === input) {
    count++;
  }
}

if (count > 0) {
  console.log(`So ${input} xuat hien ${count} lan`);
} else {
  console.log(`So ${input} ko ton tai trong mang`);
}
