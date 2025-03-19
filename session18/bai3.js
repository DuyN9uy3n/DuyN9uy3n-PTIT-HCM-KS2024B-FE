const userName = prompt("Nhập tên người dùng:");

if (userName === null) {
  console.log("Cancelled");
} else if (userName === "ADMIN") {
  const password = prompt("Nhập mật khẩu:");

  if (password === null) {
    console.log("Cancelled");
  } else if (password === "TheMaster") {
    console.log("Welcome");
  } else {
    console.log("Wrong password");
  }
} else {
  console.log("I Don’t know you");
}
