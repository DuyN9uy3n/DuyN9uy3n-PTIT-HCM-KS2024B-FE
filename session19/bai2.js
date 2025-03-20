let kyTu = prompt("nhap ki tu: ");

if ((kyTu >= "A" && kyTu <= "Z") || (kyTu >= "a" && kyTu <= "z")) {
  console.log(`ky tu ${kyTu} la chu cai`);
} else {
  console.log(` ky tu ${kyTu} ko phai la chu cai`);
}
