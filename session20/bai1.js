let num = +prompt("Nhap so nguyen bat ki: ");

if (isNaN(num) || num < 1) {
  console.log("Du lioeu ko hop le:");
} else {
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(`tong tu 1 den ${num} la: ${sum}`);
}
