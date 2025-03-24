let num = parseInt(prompt("Nhap so nguyen can kt:"));

if (isNaN(num) || num <= 1) {
  console.log("Ko phai so ngto.");
} else {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${num} la so ngto.`);
  } else {
    console.log(`${num} ko phai so ngto.`);
  }
}
