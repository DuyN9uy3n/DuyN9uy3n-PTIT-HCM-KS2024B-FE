let num = parseInt(prompt("Nhap vao 1 so nguyen:"));

if (isNaN(num) || num <= 1) {
  console.log("So da nhap ko phai so nguyen to.");
} else {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${num} la so nguyen to.`);
  } else {
    console.log(`${num} ko phai la so nguyen to.`);
  }
}
