document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    // Validation
    if (!email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      alert("Email already exists!");
      return;
    }

    // Save to localStorage
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    document.getElementById("registerForm").reset();
  });
