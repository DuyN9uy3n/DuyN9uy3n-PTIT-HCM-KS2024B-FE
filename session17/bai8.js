const date1Input = prompt("Nhap ngay thu 1 (YYYY-MM-DD):");
const date2Input = prompt("Nhap ngay thu 2 (YYYY-MM-DD):");

try {
  const date1 = new Date(date1Input);
  const date2 = new Date(date2Input);

  if (isNaN(date1) || isNaN(date2)) {
    throw new Error("Vui long nhap dung dinh dang YYYY-MM-DD.");
  }

  const timeDifference = Math.abs(date2 - date1);
  const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  console.log(`Do chenh lech ${dayDifference} ngay.`);
} catch (error) {
  console.error(error.message);
}
