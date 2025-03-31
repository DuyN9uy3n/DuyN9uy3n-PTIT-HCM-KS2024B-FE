let users = [];

function isValidEmail(email) {
  return (
    email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"))
  );
}

function registerEmail(email) {
  if (!isValidEmail(email)) {
    console.log("Email ko hop le!");
    return;
  }

  if (users.includes(email)) {
    console.log(`Tai khoan "${email}" da ton tai!`);
  } else {
    users.push(email);
    console.log(`dky thanh cong "${email}"!`);
  }
}

let emailInput = prompt("Nhap tai khoan email muon dky:");
if (emailInput) {
  registerEmail(emailInput.trim());
}

console.log("Danh sach:", users);
