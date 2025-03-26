let numbers = [2, 5, 7, 4, 1, 8, 6];

let input = parseFloat(prompt("moi nhap so can kt: "));

let found = false;

for (let i = 0; i < numbers.length; i++) {
  if (input === numbers[i]) {
    found = true;
    console.log(`bingo`);
    break;
  }
}

if (!found) {
  console.log("Chuc may man lan sau");
}
