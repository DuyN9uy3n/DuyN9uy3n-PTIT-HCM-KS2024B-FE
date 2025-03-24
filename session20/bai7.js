let n = parseInt(prompt("Nhập vào số lượng số Fibonacci muốn hiển thị:"));

if (isNaN(n) || n <= 0) {
  console.log("Dữ liệu không hợp lệ.");
} else {
  let a = 1;
  let b = 1;

  if (n >= 1) console.log(a);
  if (n >= 2) console.log(b);

  for (let i = 3; i <= n; i++) {
    let nextFibo = a + b;
    console.log(nextFibo);
    a = b;
    b = nextFibo;
  }
}
