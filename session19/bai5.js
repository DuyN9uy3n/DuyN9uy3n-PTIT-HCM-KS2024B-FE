let str = prompt("nhap chuoi can kiem tra");

if (str.includes(" ")) {
  console.log(`Chuoi "${str}" co khoang trang`);
} else {
  console.log(` chuoi ${str} ko co khoang trang`);
}
