let principal = parseFloat(prompt("Nhap so tien gui ban dau (VND):"));
let interestRate = parseFloat(prompt("Nhap lai suat thang (%):")) / 100;
let months = parseInt(prompt("Nhap so thagn guii:"));

if (
  isNaN(principal) ||
  principal <= 0 ||
  isNaN(interestRate) ||
  interestRate <= 0 ||
  isNaN(months) ||
  months <= 0
) {
  console.log("Du lieu ko hop le");
} else {
  let totalAmount = principal;
  for (let i = 1; i <= months; i++) {
    totalAmount += totalAmount * interestRate;
  }
  let totalInterest = totalAmount - principal;

  console.log(`Tiền lãi: ${totalInterest} VND`);
  console.log(`Tiền nhận được: ${totalAmount} VND`);
}
