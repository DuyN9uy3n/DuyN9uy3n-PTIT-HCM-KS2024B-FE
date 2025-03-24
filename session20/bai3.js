let num = prompt("Nhập vào một chuỗi số nguyên:");

//num.length - 1 chi so cuoi cua chuoichuoi
let reversedNum = "";
for (let i = num.length - 1; i >= 0; i--) {
  reversedNum += num[i];
}

if (num === reversedNum) {
  console.log(`${num} là số đối xứng.`);
} else {
  console.log(`${num} không phải là số đối xứng.`);
}
