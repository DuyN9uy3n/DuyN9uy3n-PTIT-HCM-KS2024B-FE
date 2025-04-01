//khoi tao 1 mamng rong
let arr = [];

// vong lap lap lai 10 lan
for (let i = 0; i < 10; i++) {
  let input = Number(prompt(`Nhap phan tu thu ${i + 1}`));
  arr.push(input);
}

//filter(): Lọc các phần tử của mảng numbers dựa trên điều kiện.
// (num) => num >= 10: Đây là hàm mũi tên (Arrow Function). Hàm kiểm tra xem từng số (num) trong mảng có lớn hơn hoặc bằng 10 hay không.
const filteredNumbers = numbers.filter((num) => num >= 10);
console.log("Các số lớn hơn hoặc bằng 10 là:", filteredNumbers);
