const number = parseInt(prompt("Nhập một số nguyên:"));

if (isNaN(number)) {
  console.log("Vui lòng nhập một số hợp lệ.");
} else {
  const binary = number.toString(2);

  console.log(`Số ${number} trong hệ nhị phân là: ${binary}`);
}
