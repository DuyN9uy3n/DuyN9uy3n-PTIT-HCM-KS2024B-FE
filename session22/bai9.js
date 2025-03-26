
let numbers = [2, 1, 7, 1, 1, 8, 6, 2, 2, 7];

let uniqueNumbers = [...new Set(numbers)].sort((a, b) => a - b);

console.log("Kết quả sau khi loại bỏ phần tử trùng nhau và sắp xếp tăng dần:", uniqueNumbers);
