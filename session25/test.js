//ex
// viết một chương trình hàm thực hiện
// tính toán và output ra kết quả của 2 số
// các phép tính hàm này có thể nhận +,-,*,/

// let num1 = Number(prompt(` Nhap so thu 1: `));

// let num2 = Number(prompt(`Nhap so thu 2: `));

// let choice = prompt(`Nhap phep tinh (+,-,*,/)`);

// calculatoR(choice);

// function calculatoR(choice) {
//   if (choice === `+`) {
//     console.log(`Tong: ${num1 + num2}`);
//   } else if (choice === `-`) {
//     console.log(`Hieu: ${num1 - num2}`);
//   } else if (choice === `*`) {
//     console.log(`Tich: ${num1 * num2}`);
//   } else if (choice === `/`) {
//     if (numB !== 0) {
//       console.log(`Thuong: ${num1 / num2}`);
//     } else {
//       console.log(`Loi bro`);
//     }
//   } else {
//     console.log(`Ko hop le`);
//   }
// }

(function (name) {
  console.log(`Hello`, name);
})(`DUY NGUYEN`);

let sayHi = function (name) {
  console.log(`Hello`, name);
};

sayHi(`Ronaldo`);
sayHi(`Messi`);
sayHi(`Neymar`);
