let number;

do {
  number = parseFloat(prompt("Nhap so nguyen bat ki: ( > 0): "));
} while (number < 0 || isNaN(number));

if (number % 2 === 0) {
  console.log("so nguyen vua nhap la so chan");
} else {
  console.log("so nguyen vua nhap la so le");
}
