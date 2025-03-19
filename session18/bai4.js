let number;

do {
  number = parseFloat(prompt("Nhap so nguyen bat ki: ( 0 <= number <= 9): "));
} while (number < 0 || number > 10 || isNaN(number));

switch (number) {
  case 1:
    console.log("So mot");
    break;
  case 2:
    console.log("So hai");
    break;
  case 3:
    console.log("So ba");
    break;
  case 4:
    console.log("So bon");
    break;
  case 5:
    console.log("So nam");
    break;
  case 6:
    console.log("So sau");
    break;
  case 7:
    console.log("So bay");
    break;
  case 8:
    console.log("So tam");
    break;
  case 9:
    console.log("So chin");
    break;
}
