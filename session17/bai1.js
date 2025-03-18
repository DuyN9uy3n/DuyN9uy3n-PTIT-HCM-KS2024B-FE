let nameE = prompt("Nhap ten cua ban: ");

do {
  age = parseFloat(prompt("Nhap tuoi cua ban( > 0 || < 100): "));
} while (age <= 0 || age >= 100 || isNaN(age));

console.log("Ten vua nhap: " + nameE);
console.log("Tuoi vua nhap: " + age);
