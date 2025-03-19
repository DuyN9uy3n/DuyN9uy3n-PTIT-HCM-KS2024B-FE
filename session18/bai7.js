let number1 = parseFloat(prompt("nhap so thu nhat"));

let number2 = parseFloat(prompt("nhap so thu hai"));

let operation;

do {
  operation = prompt("Nhap phep tinh: ");
} while (
  operation !== "+" &&
  operation !== "*" &&
  operation !== "-" &&
  operation !== "/"
);

switch (operation) {
  case "+":
    console.log(number1 + number2);
    break;
  case "*":
    console.log(number1 * number2);
    break;
  case "-":
    console.log(number1 - number2);
    break;
  case "/":
    console.log(number1 / num2);
    break;
}
