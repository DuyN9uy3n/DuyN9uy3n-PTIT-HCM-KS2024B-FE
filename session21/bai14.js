let width = parseInt(prompt("Nhập chiều ngang của hình chữ nhật:"));
let height = parseInt(prompt("Nhập chiều dọc của hình chữ nhật:"));

document.writeln("<pre>");

for (let i = 1; i <= height; i++) {
  let line = "";
  if (i === 1 || i === height) {
    line = "*".repeat(width);
  } else {
    line = "*" + " ".repeat(width - 2) + "*";
  }
  document.writeln(line + "\n");
}

document.writeln("</pre>");
