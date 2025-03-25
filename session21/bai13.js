document.writeln("<pre>");

document.writeln("Pattern a:");
for (let i = 10; i >= 1; i--) {
  let stars = "*".repeat(i);
  document.writeln(stars);
}

document.writeln("\nPattern b:");
for (let i = 1; i <= 10; i++) {
  let stars = "*".repeat(i);
  document.writeln(stars);
}

document.writeln("\nPattern c:");
for (let i = 1; i <= 10; i++) {
  let spaces = " ".repeat(10 - i);
  let stars = "*".repeat(i);
  document.writeln(spaces + stars);
}

document.writeln("\nPattern d:");
for (let i = 10; i >= 1; i--) {
  let spaces = " ".repeat(10 - i);
  let stars = "*".repeat(i);
  document.writeln(spaces + stars);
}

document.writeln("</pre>");
