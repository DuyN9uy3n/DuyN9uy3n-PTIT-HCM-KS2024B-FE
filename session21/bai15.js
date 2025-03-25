let amount = prompt(
  "Nhập số tiền cần rút (500.000, 200.000, 100.000, 50.000, 20.000, 10.000, 5.000, 2.000, 1.000):"
);

if (amount % 1000 !== 0) {
  console.log("Số tiền nhập vào phải chia hết cho 1000!");
} else {
  let denominations = [
    500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000,
  ];
  let result = "";

  for (let i = 0; i < denominations.length; i++) {
    let count = Math.floor(amount / denominations[i]);
    if (count > 0) {
      result += `${denominations[i].toLocaleString()} - ${count} tờ\n`;
      amount -= count * denominations[i];
    }
  }

  console.log("Kết quả rút tiền:");
  console.log(result);
}
