let arr = [234, 2, 3, 76, 1, 30, 23, 44];

function findMinValue(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return `Loi`;
  }
  let minValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue;
}

let result = findMinValue(arr);
console.log(result);
