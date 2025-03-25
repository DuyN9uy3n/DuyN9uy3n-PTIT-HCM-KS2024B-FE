let num1 = parseFloat(prompt("Nhap he so a: "));
let num2 = parseFloat(prompt("Nhap he so b: "));
let num3 = parseFloat(prompt("Nhap he so c: "));

if (a === 0) {
  document.writeln("Day ko phai pt bac 2");
} else {
  const delta = num2 * num2 - 4 * num1 * num3;

  if (delta < 0) {
    document.writeln("pt vo nghiem");
  } else if (delta === 0) {
    const x = -num2 / (2 * num1);
    document.writeln("nghiem kep: x = ", x);
  } else {
    const x1 = (-num2 + Math.sqrt(delta)) / (2 * num1);
    const x2 = (-num2 - Math.sqrt(delta)) / (2 * num1);
    document.writeln("pt co 2 nghiem phan biet: x1 =", x1, ", x2 =", x2);
  }
}
