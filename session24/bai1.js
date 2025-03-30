let arr = [];
let choice;

do {
  alert(`
========== MENU ===========
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình
==============================
Nhập lựa chọn của bạn: `);
  choice = parseInt(prompt("Nhập lựa chọn của bạn:"));

  switch (choice) {
    case 1:
      let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
      if (isNaN(n) || n <= 0) {
        alert("Số lượng phần tử không hợp lệ.");
      } else {
        arr = [];
        for (let i = 0; i < n; i++) {
          let value = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
          if (!isNaN(value)) {
            arr.push(value);
          } else {
            alert("Giá trị không hợp lệ, vui lòng nhập lại.");
            i--;
          }
        }
      }
      break;

    case 2:
      alert("Mảng hiện tại: " + arr.join(", "));
      break;

    case 3:
      if (arr.length === 0) {
        alert("Mảng rỗng.");
      } else {
        let max = arr[0];
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) max = arr[i];
          if (arr[i] < min) min = arr[i];
        }
        alert("Phần tử lớn nhất: " + max);
        alert("Phần tử nhỏ nhất: " + min);
      }
      break;

    case 4:
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      alert("Tổng các phần tử trong mảng: " + sum);
      break;

    case 5:
      let searchValue = parseInt(
        prompt("Nhập giá trị cần tìm số lần xuất hiện:")
      );
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchValue) {
          count++;
        }
      }
      alert(`Giá trị ${searchValue} xuất hiện ${count} lần trong mảng.`);
      break;

    case 6:
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
      }
      alert("Mảng sau khi sắp xếp tăng dần: " + arr.join(", "));
      break;

    case 7:
      alert("Thoát chương trình.");
      break;

    default:
      alert("Lựa chọn không hợp lệ.");
  }
} while (choice !== 7);
