let hour = parseInt(prompt("Nhap gio (0-23):"));
let minute = parseInt(prompt("Nhap phut (0-59):"));
let second = parseInt(prompt("Nhap giay (0-59):"));

if (
  isNaN(hour) ||
  isNaN(minute) ||
  isNaN(second) ||
  hour < 0 ||
  hour > 23 ||
  minute < 0 ||
  minute > 59 ||
  second < 0 ||
  second > 59
) {
  alert("Vui long nhap gio, phut, giay hop le!");
} else {
  let period = hour >= 12 ? "PM" : "AM";
  let hour12 = hour % 12 || 12;

  let time12 = `${hour12}:${minute.toString().padStart(2, "0")}:${second
    .toString()
    .padStart(2, "0")} ${period}`;
  alert("Thoi gian theo dinh dang 12 gioo: " + time12);
}
