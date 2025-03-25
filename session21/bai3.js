let user = "";
let pass = "";

while (user !== "vioanhco" || pass !== "123123") {
  user = prompt("Nhập tên đăng nhập");
  pass = prompt("Nhập mật khẩu");

  if (user === "vioanhco" && pass === "123123") {
    alert("Đăng nhập thành công");
  } else {
    alert("Sai mật khẩu hoặc sai tên đăng nhập");
  }
}
