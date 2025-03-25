let n = parseInt(prompt("Nnhap so ngto muon hien thi:"));

if (isNaN(n) || n <= 0) {
  console.log("du lieu ko hop le.");
} else {
  let count = 0;
  let num = 2;
  let result = "";

  while (count < n) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      result += num + " ";
      count++;
    }

    num++;
  }

  console.log(`Cac so ngto: ${result}`);
}
