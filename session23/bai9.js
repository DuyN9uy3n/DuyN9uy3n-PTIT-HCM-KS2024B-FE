let arr = [];
let choice;

do {
  alert(`
=====================Menu===================
1.Nhap so luong va gia tri cac ptu
2.In ra cac ptu dang quan ly
3.In ra gia tri cac phan tu chan va tinh tong
4.In ra gia tri nho nhat va lon nhat trong mang
5,In ra cac so nguyen to trong mang va tinh tong
6.Nhap vao 1 so va thong ke co bao nhieu phan tu do trong mang
7.Them 1 pt vao vi tri chi dinh
8.THaot
==============================================`);

  choice = parseInt(prompt(`Chon chuc nang`));

  switch (choice) {
    case 1:
      let n = parseInt(prompt(`Nhap vao so luong phan tu: `));
      if (isNaN(n) || n < 0) {
        alert(`KO hop le`);
      } else {
        for (let i = 0; i < n; i++) {
          let num = parseFloat(prompt(`Nhap vao phan tu thu ${i + 1}`));
          if (!isNaN(num)) {
            arr.push(num);
          } else {
            i--;
          }
        }
      }
      break;
    case 2:
      alert(arr);
      break;
    case 3:
      let sumEven = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          alert(arr[i]);
          sumEven += arr[i];
        }
      }
      alert(`Tong cac so chan: ${sumEven}`);
      break;

    case 4:
      let min = arr[0];
      let max = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
          min = arr[i];
        }
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      alert(min);
      alert(max);
      break;
    case 5:
      let sumPrime = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 2) {
          continue;
        }
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
          if (arr[i] % j === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          alert(arr[i]);
          sumPrime += arr[i];
        }
      }
      alert(`Tong cac so nguyen to: ${sumPrime}`);
      break;
    case 6:
      let num = parseFloat(prompt(`Nhap vao so can tim: `));
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) count++;
      }
      alert(`so ${num} xuat hien ${count} lan`);
      break;
    case 7:
      let num1 = parseFloat(prompt(`Nhap vao so can them: `));
      let index = parseInt(prompt(`Nhap vao vi tri can them: `));
      if (index < 0 || index > arr.length) {
        alert(`KO hop le`);
      } else {
        arr.splice(index, 0, num1);
      }
      break;
    case 8:
      alert(`Thoat`);
      break;
    default:
      alert(`Chon lai`);
      break;
  }
} while (choice !== 8);
