let num = parseInt(prompt("Nhap vao so nguyen:"));

if (isNaN(num) || num <= 0) {
  console.log("Du lieu ko hop le.");
} else {
  console.log(`cac uoc cua ${num} la:`);

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
}
