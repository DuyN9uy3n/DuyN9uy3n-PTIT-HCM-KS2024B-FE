// Danh sách người dùng
let users = [];

// Kiểm tra định dạng email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|vn)$/; // Yêu cầu chứa @ và kết thúc bằng .com hoặc .vn
  return emailRegex.test(email);
}

// Kiểm tra định dạng mật khẩu
function isValidPassword(password) {
  const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/; // Gồm ký tự đặc biệt, viết hoa, ít nhất 6 ký tự
  return passwordRegex.test(password);
}

// Đăng ký người dùng mới
function registerUser() {
  try {
    const name = prompt("Nhập tên:").trim();
    const email = prompt("Nhập email:").trim();
    const password = prompt("Nhập mật khẩu:").trim();

    // Kiểm tra input rỗng
    if (!name || name === "") {
      console.error("Tên không được để trống!");
      return;
    }
    if (!email || email === "") {
      console.error("Email không được để trống!");
      return;
    }
    if (!password || password === "") {
      console.error("Mật khẩu không được để trống!");
      return;
    }

    // Kiểm tra độ dài
    if (email.length > 50) {
      console.error("Email không được vượt quá 50 ký tự!");
      return;
    }
    if (password.length > 20) {
      console.error("Mật khẩu không được vượt quá 20 ký tự!");
      return;
    }

    // Kiểm tra định dạng
    if (!isValidEmail(email)) {
      console.error(
        "Email không hợp lệ! Email phải chứa @ và kết thúc bằng .com hoặc .vn."
      );
      return;
    }
    if (!isValidPassword(password)) {
      console.error(
        "Mật khẩu không hợp lệ! Mật khẩu phải từ 6 ký tự trở lên, chứa ký tự đặc biệt và ký tự viết hoa."
      );
      return;
    }

    // Kiểm tra email tồn tại
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      console.error("Email đã tồn tại! Vui lòng đăng ký với email khác.");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    console.log("Đăng ký thành công:", newUser);
  } catch (error) {
    console.error("Đã xảy ra lỗi trong quá trình đăng ký:", error);
  }
}

// Đăng nhập người dùng
function loginUser() {
  try {
    const email = prompt("Nhập email:").trim();
    const password = prompt("Nhập mật khẩu:").trim();

    // Kiểm tra input rỗng
    if (!email || email === "") {
      console.error("Email không được để trống!");
      return;
    }
    if (!password || password === "") {
      console.error("Mật khẩu không được để trống!");
      return;
    }

    // Kiểm tra thông tin đăng nhập
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      console.log("Đăng nhập thành công! Thông tin người dùng:", user);
    } else {
      console.error("Đăng nhập thất bại! Vui lòng kiểm tra email và mật khẩu.");
    }
  } catch (error) {
    console.error("Đã xảy ra lỗi trong quá trình đăng nhập:", error);
  }
}

// Menu chính
function mainMenu() {
  let running = true;
  while (running) {
    console.log(`
=== MENU ===
1. Đăng ký
2. Đăng nhập
3. Thoát
        `);
    const choice = prompt("Nhập lựa chọn (1-3):");

    // Kiểm tra input rỗng
    if (!choice || choice.trim() === "") {
      console.log("Lựa chọn không được để trống! Vui lòng thử lại.");
      continue;
    }

    switch (choice) {
      case "1":
        registerUser();
        break;
      case "2":
        loginUser();
        break;
      case "3":
        running = false;
        console.log("Đã thoát chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ! Vui lòng thử lại.");
    }
  }
}

// Khởi động chương trình
mainMenu();
