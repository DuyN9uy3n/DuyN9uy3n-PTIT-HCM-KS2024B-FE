let number;

do {
  number = parseFloat(prompt("nhap so nguyen can kt: "));
} while (number <= 0 || isNaN(number));

if (number % 3 === 0 && number % 5 === 0) {
  console.log(`${number} chia het cho ca 3 va 5`);
} else if (number % 3 !== 0 || number % 5 !== 0) {
  console.log(`${number} ko chia het cho ca 3 va 5`);
}
