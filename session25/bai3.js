function displayEvenNumbers(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log("Mảng không hợp lệ hoặc rỗng!");
    return;
  }

  let evenNumbers = arr.filter((num) => num % 2 === 0);

  if (evenNumbers.length > 0) {
    console.log("Các số chẵn trong mảng là:", evenNumbers);
  } else {
    console.log("Không có số chẵn nào trong mảng!");
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
displayEvenNumbers(array);
