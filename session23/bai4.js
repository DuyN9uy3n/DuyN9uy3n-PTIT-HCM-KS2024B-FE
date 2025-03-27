let n = parseInt(prompt(`Nhap vao so ptu cua mang`));

let arr = [];

if (isNaN(n) || n < 0) {
  console.log("Ko hoop le");
} else {
  for (let i = 0; i < n; i++) {
    let num = prompt(`Nhap vao phan tu thu ${i + 1}`);
    arr.push(num);
  }
  console.log(arr);

  let countNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] !== " ") {
      countNum++;
    }
    if (countNum === 0) {
      console.log("Ko co ky tu so");
    }
  }
  console.log(countNum);
}
