let input = prompt("Nhap day so bat ky:");

//kt input co chua (0-9) ko
if (/^\d+$/.test(input)) {
  let maxDigit = Math.max(...input.split("").map(Number));
  console.log(`so lon nhat: ${maxDigit} `);
} else {
  console.log("day ko hop le");
}
