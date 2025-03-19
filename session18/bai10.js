let so = parseInt(prompt("Nhập số từ 0 đến 999:"));
let donVi = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
let chuc = [
  "",
  "mười",
  "hai mươi",
  "ba mươi",
  "bốn mươi",
  "năm mươi",
  "sáu mươi",
  "bảy mươi",
  "tám mươi",
  "chín mươi",
];
let tram = [
  "",
  "một trăm",
  "hai trăm",
  "ba trăm",
  "bốn trăm",
  "năm trăm",
  "sáu trăm",
  "bảy trăm",
  "tám trăm",
  "chín trăm",
];

let text = "";
if (so === 0) {
  text = "Không";
} else {
  let hangTram = Math.floor(so / 100);
  let hangChuc = Math.floor((so % 100) / 10);
  let hangDonVi = so % 10;

  if (hangTram > 0) {
    text += tram[hangTram] + " ";
  }

  if (hangChuc > 0) {
    text += chuc[hangChuc] + " ";
  } else if (hangTram > 0 && hangDonVi > 0) {
    text += "lẻ ";
  }

  if (hangDonVi > 0) {
    if (hangChuc === 1 && hangDonVi === 5) {
      text += "lăm";
    } else if (hangChuc > 1 && hangDonVi === 5) {
      text += "lăm";
    } else {
      text += donVi[hangDonVi];
    }
  }
}

console.log(text.trim());
