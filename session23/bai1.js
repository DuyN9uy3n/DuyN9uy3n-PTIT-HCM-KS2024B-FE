let arr = [];

for (i = 0; i < 10; i++) {
  let num = parseInt(prompt(`Nhap phan tu thu ${i + 1}`));

  if (!isNaN(num)) {
    arr.push(num);
  } else {
    i--;
  }
}
console.log(arr);

let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10) {
    count++;
    console.log(arr[i]);
  }
}
if (count === 0) {
  console.log("ko co so nao lon hon 10");
}
