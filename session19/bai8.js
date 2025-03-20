let month = parseFloat(prompt("Nhap thang can kiem tra"));

let season = " ";
if (month >= 1 && month <= 3) {
  season = " mua xuan";
} else if (month >= 4 && month <= 6) {
  season = "mua ha";
} else if (month >= 7 && month <= 9) {
  season = "mua thu";
} else if (month >= 10 && month <= 12) {
  season = "mua dong";
} else {
  console.log("thang ko hop le");
}

console.log(season);
