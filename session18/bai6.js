let year;

do {
  year = parseFloat(prompt("Nhap so nam can kiem tra"));
} while (year < 0 || isNaN(year));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`Nam ${year} la nam nhuan`);
} else {
  console.log(`Nam ${year} ko phai nam nhuan`);
}
