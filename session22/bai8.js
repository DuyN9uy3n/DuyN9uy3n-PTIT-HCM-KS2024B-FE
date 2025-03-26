let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7, 1];

numbers.sort((a, b) => a - b);

let maxCount = 0;
let currentCount = 1;
let mostFrequent = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] === numbers[i - 1]) {
    currentCount++;
  } else {
    currentCount = 1;
  }

  if (currentCount > maxCount) {
    maxCount = currentCount;
    mostFrequent = numbers[i];
  }
}

console.log(`Phần tử xuất hiện nhiều nhất: ${mostFrequent}`);
