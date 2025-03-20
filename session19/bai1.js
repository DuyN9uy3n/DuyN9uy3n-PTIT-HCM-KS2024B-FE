let thang = parseFloat(prompt("nhap thang 1 - 12"));

let ketQua = " ";

if (thang < 1 || thang > 12) {
  ketQua = "thang ko hop le ";
} else if (thang === 2) {
  ketQua = "thang co 28 ngay hoac 29 ngay vvao nam nhuan";
} else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
  ketQua = " thang " + thang + " co 30 ngay";
} else {
  ketQua = "thang " + thang + " co 31 ngay";
}

console.log(ketQua);
