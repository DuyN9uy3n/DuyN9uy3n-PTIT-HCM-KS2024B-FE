function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let num = Number(prompt(`Nhap vao 1 so nguyen duong: `));

if (isNaN(num) || num <= 0) {
  console.log(`ko hop le`);
} else {
  console.log(
    `${num} ${isPrime(num) ? "là số nguyên tố" : "không phải là số nguyên tố"}`
  );
}
