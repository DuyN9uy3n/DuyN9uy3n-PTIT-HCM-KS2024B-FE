let arr = [];

for (i = 0; i < 10; i++) {
  let num = Number(prompt(`Nhap phan tu thu ${i + 1}`));
  arr.push(num);
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function filteredPrimes(number) {
  return number.filter(isPrime);
}

let result = filteredPrimes(arr);
console.log(`Cac so nguyne to `, result);
