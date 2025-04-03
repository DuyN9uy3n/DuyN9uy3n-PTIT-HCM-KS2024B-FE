// Viết một chương trình có menu để quản lý nhân viên với các yêu cầu sau:

// Mỗi nhân viên có các thuộc tính: id, name, position, salary

// Chương trình có các chức năng:

// Thêm nhân viên mới.

// Xóa nhân viên theo id.

// Tìm thấy nhân viên có id confirm người dùng muốn xóa nhân viên hay không?
// Không tìm thấy nhân viên có id thì hiển thị thông báo.
// Cập nhật mức lương của nhân viên theo id
// Tìm kiếm nhân viên theo tên.

let employees = [
  { id: `E1001`, name: `Quang Anh`, position: `DAU B RE RACH`, salary: `200` },
  {
    id: `E1002`,
    name: `Dang Nguyen`,
    position: `CHu NHna cua Qauang Anh`,
    salary: `22200`,
  },
  {
    id: `E1003`,
    name: `Duy Nguyen`,
    position: `VUa tro choi`,
    salary: `22200`,
  },
];

function showMenu() {
  let choice;

  do {
    console.log(`
            ------ MENU ------
            1. Hien thi ds nv
            2.THem nhan vien
            3.Xoa nhan vien theo id (confirm)
            4.Cap nhat luong nhan vien theo id
            5.Tim nhan vien theo ten
            `);

    choice = prompt(`Chon chuc nang: `);
    switch (choice) {
      case `1`:
        displayEmployee(employees);
        break;
      case `2`:
        addEmployee();
        break;
      case `3`:
        deleteEmployeeById();
        break;
      case `4`:
        updateSalaryById();
        break;
      case `5`:
        findEmplyeeByName();
        break;
      case `6`:
        console.log(`out`);
        break;

      default:
        console.log(`ko hop le:`);
    }
  } while (choice !== `6`);
}

function displayEmployee() {
  if (employees.length === 0) {
    console.log(`danh sach rong`);
  } else {
    console.log(`danh sach nhan vien`);
    employees.forEach(function (emp, index) {
      console.log(
        `${index + 1}. ID:${emp.id} | Ten:${emp.name} | Chuc vu: ${
          emp.position
        } | ${emp.salary}`
      );
    });
  }
}

function addEmployee() {
  const id = prompt("Nhap id cua nhan vien moi: ");
  const name = prompt("Nhap ten cua nhan vien moi: ");
  const position = prompt("Nhap chuc vu cua nhan vien moi: ");
  const salary = prompt("Nhap luong cua nhan vien moi: ");
  const newEmployee = { id, name, position, salary };
  employees.push(newEmployee);
  console.log("Da them nhan vien moi.");
}

function deleteEmployeeById() {
  const id = prompt("Nhap id cua nhan vien can xoa: ");
  const index = employees.findIndex((emp) => emp.id === id);
  if (index !== -1) {
    const confirmDelete = prompt(
      `Ban co chac chan muon xoa nhan vien ${employees[index].name}? (yes/no): `
    );
    if (confirmDelete.toLowerCase() === "yes") {
      employees.splice(index, 1);
      console.log("Nhan vien da duoc xoa.");
    } else {
      console.log("Nhan vien khong duoc xoa.");
    }
  } else {
    console.log("Khong tim thay nhan vien co id nay.");
  }
}

function updateSalaryById() {
  const id = prompt("Nhap id cua nhan vien can cap nhat luong: ");
  const employee = employees.find((emp) => emp.id === id);
  if (employee) {
    const newSalary = prompt(`Nhap luong moi cho nhan vien ${employee.name}: `);
    employee.salary = newSalary;
    console.log("Da cap nhat luong cho nhan vien.");
  } else {
    console.log("Khong tim thay nhan vien co id nay.");
  }
}

function findEmployeeByName() {
  const name = prompt("Nhap ten nhan vien can tim: ");
  const results = employees.filter((emp) =>
    emp.name.toLowerCase().includes(name.toLowerCase())
  );
  if (results.length > 0) {
    console.log("Nhan vien tim thay:");
    results.forEach((emp) => {
      console.log(
        `ID: ${emp.id} | Ten: ${emp.name} | Chuc vu: ${emp.position} | Luong: ${emp.salary}`
      );
    });
  } else {
    console.log("Khong tim thay nhan vien nao co ten nay.");
  }
}
