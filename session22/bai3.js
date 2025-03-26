let input = prompt("Nhap vao day so bat ky:");

if (/^\d+$/.test(input)) {
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  console.log("Output:", reversed);
} else {
  console.log("Output: day ko hop le");
}
