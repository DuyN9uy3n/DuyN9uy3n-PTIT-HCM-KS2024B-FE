let arr = [];
let n = Number(prompt("Nhap so luong ptu ( 10 -> 20):"));

if (n < 10 || n > 20 || isNaN(n)) {
  console.log("loi");
} else {
  for (let i = 0; i < n; i++) {
    let num = Number(prompt(`nhap ptu thu ${i + 1}:`));
    if (!isNaN(num)) {
      arr.push(num);
    } else {
      i--;
    }
  }
  //tinh tong cacs so chan
  const evenSum = arr
    .filter((num) => num % 2 === 0) //loc cac so chan
    .reduce((acc, num) => acc + num, 0); // Tinh tong

  // Tinh tong cac so le
  const oddSum = arr
    .filter((num) => num % 2 !== 0) // Loc cac so le
    .reduce((acc, num) => acc + num, 0); // Tinh tong

  console.log("Tong cac so chan:", evenSum);
  console.log("Tong cac so le:", oddSum);
}
