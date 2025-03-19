const toan = parseFloat(prompt("Nhập điểm Toán (0 - 10):"));
const van = parseFloat(prompt("Nhập điểm Văn (0 - 10):"));
const anh = parseFloat(prompt("Nhập điểm Anh (0 - 10):"));

if (toan < 0 || toan > 10 || van < 0 || van > 10 || anh < 0 || anh > 10) {
  console.log(">= 0 va <= 10.");
} else {
  const average = (toan + van + anh) / 3;

  let classification;
  if (average >= 8.0) {
    classification = "Giỏi";
  } else if (average >= 6.5) {
    classification = "Khá";
  } else if (average >= 5.0) {
    classification = "Trung bình";
  } else {
    classification = "Yếu";
  }

  console.log(`Điểm trung bình: ${average.toFixed(2)}`);
  console.log(`Xếp loại: ${classification}`);
}
