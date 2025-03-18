let $money;

do {
  $money = parseFloat(prompt("Nhap so tien: "));
} while (isNaN($money) || $money <= 0);

let money = $money.toLocaleString("vi-VN", {
  style: "currency",
  currency: "VND",
});

document.writeln(money);
