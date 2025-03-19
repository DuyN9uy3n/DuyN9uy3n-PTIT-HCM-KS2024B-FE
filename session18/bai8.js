let sideA;
let sideB;
let sideC;

do {
  sideA = parseFloat(prompt("Nhap do dai canh a"));
  sideB = parseFloat(prompt("Nhap do dai canh b"));
  sideC = parseFloat(prompt("Nhap do dai canh c"));
} while (
  sideA <= 0 ||
  sideB <= 0 ||
  sideC <= 0 ||
  isNaN(sideA) ||
  isNaN(sideB) ||
  isNaN(sideC)
);

if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
  if (sideA === sideB && sideB === sideC) {
    console.log("Tam giac deu");
  } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    console.log("Tam giac can");
  } else if (
    sideA * sideA + sideB * sideB === sideC * sideC ||
    sideB * sideB + sideC * sideC === sideA * sideA ||
    sideA * sideA + sideC * sideC === sideB * sideB
  ) {
    console.log("Tam giac vuong");
  } else {
    console.log("Tam giac thuong");
  }
} else {
  console.log("3 canh ko tao thanh tam giac: ");
}
