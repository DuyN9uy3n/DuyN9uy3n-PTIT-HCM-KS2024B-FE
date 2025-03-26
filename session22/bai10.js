let numbers = [];
let choice;
do {
  console.log(`
MENU
1. Nhap vao mang
2. Hien thi mang
3. Them phan tu
4. Sua phan tu
5. Xoa phan tu
6. Thoat
  `);

  choice = Number(prompt("Lua chon cua ban: "));

  if (choice === 1) {
    const input = prompt("Nhap cac so cach nhau boi dau (,): ");
    numbers = input.split(",").map(Number);
  } else if (choice === 2) {
    console.log("Mảng hiện tại:", numbers);
  } else if (choice === 3) {
    const newElement = Number(prompt("Nhap phan tu can them: "));
    numbers.push(newElement);
  } else if (choice === 4) {
    const index = Number(prompt("Nhap index phan tu can sua: "));
    const newValue = Number(prompt("Nhap gt moi: "));
    if (index >= 0 && index < numbers.length) {
      numbers[index] = newValue;
    } else {
      console.log("ko hop le.");
    }
  } else if (choice === 5) {
    const index = Number(prompt("Nhap index phtu can xoa: "));
    if (index >= 0 && index < numbers.length) {
      numbers.splice(index, 1);
    } else {
      console.log("ko hop le.");
    }
  } else if (choice === 6) {
    console.log("Thoat chuowng trinh.");
  } else {
    console.log("ko hop le.");
  }
} while (choice !== 6);
