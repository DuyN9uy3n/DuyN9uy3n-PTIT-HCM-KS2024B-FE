let numberS;

do {
  numberS = parseFloat(prompt("Nhap so bat ki > 0: "));
} while (isNaN(numberS) || numberS < 0);

document.writeln(Math.sqrt(numberS));
