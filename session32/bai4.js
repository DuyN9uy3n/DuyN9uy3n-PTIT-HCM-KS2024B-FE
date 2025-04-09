const emailInput = document.getElementById("mailInput");
const checkButton = document.getElementById("checkButton"); // Sửa ID từ "addButton" thành "checkButton"
const displayMail = document.getElementById("displayMail");

checkButton.addEventListener("click", function () {
  let email = emailInput.value.trim();

  if (email === "") {
    alert("Email không được để trống!");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
  const isValidEmail = emailPattern.test(email);

  displayMail.innerHTML = "";

  const resultElement = document.createElement("p");

  if (isValidEmail) {
    resultElement.textContent = "email hợp lệ!";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = "email không hợp lệ!";
    resultElement.style.color = "red";
  }

  displayMail.appendChild(resultElement);
});

emailInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkButton.click();
  }
});
