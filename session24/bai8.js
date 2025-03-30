let str = "";
let choice;

do {
  alert(`
        ========MENU========
        1 Nhap chuoi ky tu
        2 Hien thi chuoi ky tu
        3 Tim tat ca cac tu con trung lap trong chuoi va so lan xuat hien
        4 Tim cac tu co do dai lon nhat va nho nhat trong chuoi
        5 Tim so lan xuat hien nhieu nhat cua cac ky tu trong chuoi
        6 Chuyen doi chuoi ky tu thanh dang snake_case
        7 Thoat chuong trinh
  `);

  choice = Number(prompt("Nhap lua chon cua ban"));

  switch (choice) {
    case 1:
      str = prompt("Nhap chuoi ky tu");
      break;

    case 2:
      if (str.length === 0) {
        alert("Chuoi rong");
      } else {
        alert(`Chuoi hien tai: ${str}`);
      }
      break;

    case 3:
      if (str.length === 0) {
        alert("Chuoi rong");
      } else {
        let words = str.split(" ");
        let wordCount = {};
        words.forEach((word) => {
          wordCount[word] = (wordCount[word] || 0) + 1;
        });
        let duplicates = Object.entries(wordCount).filter(
          ([word, count]) => count > 1
        );
        if (duplicates.length > 0) {
          alert(
            "Cac tu trung lap va so lan xuat hien:\n" +
              duplicates.map(([word, count]) => `${word}: ${count}`).join("\n")
          );
        } else {
          alert("Khong co tu trung lap trong chuoi");
        }
      }
      break;

    case 4:
      if (str.length === 0) {
        alert("Chuoi rong");
      } else {
        let words = str.split(" ");
        let minWord = words.reduce(
          (min, word) => (word.length < min.length ? word : min),
          words[0]
        );
        let maxWord = words.reduce(
          (max, word) => (word.length > max.length ? word : max),
          words[0]
        );
        alert(`Tu ngan nhat: ${minWord}\nTu dai nhat: ${maxWord}`);
      }
      break;

    case 5:
      if (str.length === 0) {
        alert("Chuoi rong");
      } else {
        let charCount = {};
        str.split("").forEach((char) => {
          charCount[char] = (charCount[char] || 0) + 1;
        });
        let maxCount = Math.max(...Object.values(charCount));
        let mostFrequentChars = Object.entries(charCount)
          .filter(([char, count]) => count === maxCount)
          .map(([char]) => char);
        alert(
          `Ky tu xuat hien nhieu nhat la ${mostFrequentChars.join(
            ", "
          )} voi ${maxCount} lan`
        );
      }
      break;

    case 6:
      if (str.length === 0) {
        alert("Chuoi rong");
      } else {
        let snakeCase = str.trim().toLowerCase().split(" ").join("_");
        alert(`Chuoi dang snake_case: ${snakeCase}`);
      }
      break;

    case 7:
      alert("Thoat chuong trinh Tam biet");
      break;

    default:
      alert("Lua chon ko hop le vui long thu lai");
  }
} while (choice !== 7);
