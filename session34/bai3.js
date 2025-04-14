document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
      if (validateCredentials(email, password)) {
        alert("Login successful!");
        window.location.href = "homepage.html";
      } else {
        alert("Invalid email or password.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  });

function validateCredentials(email, password) {
  const registeredEmail = "user@example.com";
  const registeredPassword = "password123";

  return email === registeredEmail && password === registeredPassword;
}
