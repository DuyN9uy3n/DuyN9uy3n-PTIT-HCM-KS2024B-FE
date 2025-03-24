let num = +prompt("Nhap so nguyen bat ki: ");

if (isNaN(num) || num < 1) {
  console.log("Du lioeu ko hop le:");
} else {
  console.log(`cac so chia het cho 5 tu 1 den ${num} la:`);
  for (i = 1; i <= num; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}
