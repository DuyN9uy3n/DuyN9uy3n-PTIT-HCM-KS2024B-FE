let arr = [1, 2, 4, 5, 8];

let sumOdd = 0;

let sumEven = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sumEven += arr[i];
  } else {
    sumOdd += arr[i];
  }
}

console.log(`tong so chan`, sumEven);

console.log(`tong so le`, sumOdd);
