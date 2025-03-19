let yearsOfExperience = parseFloat(prompt("Nhap so nam kinh nghiem của bạn: "));

if (yearsOfExperience < 1) {
  console.log("Moi vao nghe");
} else if (yearsOfExperience >= 1 && yearsOfExperience <= 3) {
  console.log("Nhan vien co kinh nghiem");
} else if (yearsOfExperience >= 4 && yearsOfExperience <= 6) {
  console.log("Chuyen vien");
} else if (yearsOfExperience > 6) {
  console.log("Quan ly");
} else {
  console.log("Vui long nhap so hop le");
}
