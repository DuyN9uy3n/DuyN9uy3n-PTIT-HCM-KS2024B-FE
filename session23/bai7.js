let n = parseInt(prompt(`Nhap vao so ptu cua mang`));

let arr = [];

if (isNaN(n) || n < 0) {
  console.log(`ko hop le`);
} else {
  for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt(`Nhap vao phan tu thu ${i + 1}`));
    if (!isNaN(num)) {
      arr.push(num);
    }
  }
  console.log(arr);

  if (arr.length < 2) {
    console.log(`ko the tim duoc ptu lon thu 2`);
  } else {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    let secondMax = null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < max && (secondMax === null || arr[i] > secondMax)) {
        secondMax = arr[i];
      }
    }

    if (secondMax === null) {
      console.log(`ko tim thay ptu lon thu 2`);
    } else {
      console.log(secondMax);
    }
  }
}
