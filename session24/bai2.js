let arr = [];
let choice;

do {
  alert(` 
        ==========MENU==========
        1. Nhap mang so nguyen
        2. Hien thi mang
        3. Tim cac phan tu chan va le
        4. Tinh trung binh cong cua mang
        5. Xoa phan tu tai vi tri chi dinh
        6. Tim phan tu lon thu hai trong mang
        7. Thoat chuong trinh
  `);

  choice = Number(prompt("Nhap lua chon cua ban:"));

  switch (choice) {
    case 1:
      let n = parseInt(prompt("Nhap vao so luong phan tu: "));
      if (isNaN(n) || n < 1) {
        alert(`So luong ptu ko hop le`);
      } else {
        for (let i = 0; i < n; i++) {
          let value = parseInt(prompt(`Nhap phan tu thu ${i + 1}:`));
          if (!isNaN(value)) {
            arr.push(value);
          } else {
            i--;
          }
        }
      }
      break;
    case 2:
      alert(`Mang hien tai: [${arr.join(", ")}]`);
      break;
    case 3:
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          alert(`Phan tu chan: ${arr[i]}`);
        } else {
          alert(`Phan tu le: ${arr[i]}`);
        }
      }
      break;
    case 4:
      if (arr.length === 0) {
        alert("Mang rong! Khong the tinh trung binh.");
      } else {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        alert(`Trung binh cong cua mang: ${sum / arr.length}`);
      }
      break;
    case 5:
      let pos = parseInt(prompt("Nhap vi tri can xoa (bat dau tu 0): "));
      if (pos >= 0 && pos < arr.length) {
        arr.splice(pos, 1);
        alert(`Mang sau khi xoa: [${arr.join(", ")}]`);
      } else {
        alert("Vi tri khong hop le!");
      }
      break;
    case 6:
      if (arr.length < 2) {
        alert("Mang khong du de tim phan tu lon thu hai!");
      } else {
        let max = Math.max(...arr);
        let secondMax = Math.max(...arr.filter((num) => num < max));
        alert(`Phan tu lon thu hai: ${secondMax}`);
      }
      break;
    case 7:
      alert("Thoat chuong trinh. Tam biet!");
      break;
    default:
      alert("Lua chon khong hop le!");
  }
} while (choice !== 7);
