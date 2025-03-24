let str = prompt("nhap vao chuoi: ");
let result = prompt("nhap vao ki tu can kt: ");

if (str.includes(result)) {
  console.log(`ky tu "${result}" ton tai trong chuoi "${str}"`);
} else {
  console.log(`ky tu "${result}" 0 ton tai trong chuoi "${str}"`);
}
