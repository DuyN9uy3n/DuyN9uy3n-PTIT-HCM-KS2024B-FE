let arr = [];
let choice;

do {
  alert(`
        ==========MENU==========
        1 Nhap mang so nguyen
        2 Hien thi mang
        3 Tim phan tu lon nhat trong mang va in ra chi so cua no
        4 Tinh tong va trung binh cong cua cac so duong trong mang
        5 Dao nguoc mang
        6 Kiem tra mang co doi xung khong
        7 Thoat chuong trinh
  `);

  choice = Number(prompt("Nhap lua chon cua ban"));

  switch (choice) {
    case 1:
      let n = parseInt(prompt("Nhap so luong phan tu"));
      if (isNaN(n) || n < 1) {
        alert("So luong phan tu ko hop le");
      } else {
        arr = [];
        for (let i = 0; i < n; i++) {
          let value = parseInt(prompt(`Nhap phan tu thu ${i + 1}`));
          if (!isNaN(value)) {
            arr.push(value);
          } else {
            alert("Gia tri ko hop le vui long nhap lai");
            i--;
          }
        }
      }
      break;

    case 2:
      if (arr.length > 0) {
        alert(`Mang hien tai [${arr.join(", ")}]`);
      } else {
        alert("Mang rong chua co phan tu nao");
      }
      break;

    case 3:
      if (arr.length === 0) {
        alert("Mang rong");
      } else {
        let max = Math.max(...arr);
        let index = arr.indexOf(max);
        alert(`Phan tu lon nhat ${max} tai chi so ${index}`);
      }
      break;

    case 4:
      let sum = 0;
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          sum += arr[i];
          count++;
        }
      }
      if (count > 0) {
        let avg = sum / count;
        alert(`Tong cac so duong ${sum} Trung binh cong ${avg}`);
      } else {
        alert("Ko co so duong trong mang");
      }
      break;

    case 5:
      if (arr.length > 0) {
        let reversedArray = arr.slice().reverse();
        alert(`Mang sau khi dao nguoc [${reversedArray.join(", ")}]`);
      } else {
        alert("Mang rong ko the dao nguoc");
      }
      break;

    case 6:
      if (arr.length === 0) {
        alert("Mang rong ko the kiem tra doi xung");
      } else {
        let isSymmetric = arr.join(",") === arr.slice().reverse().join(",");
        alert(isSymmetric ? "Mang doi xung" : "Mang ko doi xung");
      }
      break;

    case 7:
      alert("Thoat chuong trinh Tam biet");
      break;

    default:
      alert("Lua chon ko hop le vui long thu lai");
  }
} while (choice !== 7);
