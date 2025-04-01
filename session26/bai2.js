//khai bao mang rong
let arr = [];

// duyet qua magn de nhap phan tu
for (i = 0; i < 5; i++) {
  let input = prompt(`Nhap chuoi ky tu: `);
  //them phan tu vao mang
  arr.push(input);
}

// ham loc cac chuoi trong mang co > 5 ky tu ko
function filterLongString(strings) {
  return strings.filter((str) => str.length > 5);
}

//khoi tao bien result de luu tru ket qua cua hamham
const result = filterLongString(arr);
console.log("cac ptu lon hon 5 ky tu:", result);
