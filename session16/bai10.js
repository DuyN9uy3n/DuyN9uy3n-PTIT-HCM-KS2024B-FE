let numA = parseFloat(prompt("nhap so A: "));

let numB = parseFloat(prompt("nhap so B: "));

if (numA > numB) {
  let temp = numA;
  numA = numB;
  numB = temp;
}

let ranNum = Math.floor(Math.random() * (numB - numA + 1)) + numA;

document.writeln("random Num: " + ranNum);
