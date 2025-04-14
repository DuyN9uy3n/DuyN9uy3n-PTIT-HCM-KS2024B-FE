document.addEventListener("DOMContentLoaded", function () {
  const employeeNameInput = document.getElementById("employeeName");
  const employeePositionInput = document.getElementById("employeePosition");
  const addEmployeeButton = document.getElementById("addEmployee");
  const employeeList = document.getElementById("employeeList");

  const loadEmployees = () => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.forEach((employee, index) =>
      addEmployeeToDOM(employee, index + 1)
    );
  };

  const saveEmployeeToStorage = (employee) => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  const removeEmployeeFromStorage = (index) => {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  const addEmployeeToDOM = (employee, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${index}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td><button class="delete-btn">Xóa</button></td>
        `;

    const deleteButton = row.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      employeeList.removeChild(row);
      removeEmployeeFromStorage(index - 1);
      renderEmployees(); // Refresh the list
    });

    employeeList.appendChild(row);
  };

  addEmployeeButton.addEventListener("click", () => {
    const name = employeeNameInput.value.trim();
    const position = employeePositionInput.value.trim();

    if (name && position) {
      const employee = { name, position };
      saveEmployeeToStorage(employee);
      renderEmployees();
      employeeNameInput.value = "";
      employeePositionInput.value = "";
    } else {
      alert("Vui lòng điền đầy đủ thông tin nhân viên!");
    }
  });

  const renderEmployees = () => {
    employeeList.innerHTML = "";
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.forEach((employee, index) =>
      addEmployeeToDOM(employee, index + 1)
    );
  };

  // Initial load
  loadEmployees();
});
