let studentList = [];

function displayMenu() {
    console.log(`
    --- MENU---
    1. Nhp danh sach sinh vien
    2. Hien thi danh sach sinh vien
    3. Tim sinh vien theo ten
    4. Xoa sinh vien khoi danh sach
    5. Thoat
    `);
}

function inputStudents() {
    let numberOfStudents = Number(prompt("Nhap so luong sv:"));
    if (isNaN(numberOfStudents) || numberOfStudents <= 0) {
        console.log("ko hop le!");
    } else {
        for (let i = 0; i < numberOfStudents; i++) {
            let name = prompt(`Nhap ten sv thu ${i + 1}:`);
            studentList.push(name);
        }
        console.log("Danh sach sv duoc nhap thanh cong!");
    }
}

function displayStudents() {
    if (studentList.length === 0) {
        console.log("Danh sach sv trong!");
    } else {
        console.log("Danh sach sinh vien:");
        studentList.forEach((name, index) => {
            console.log(`${index + 1}. ${name}`);
        });
    }
}


function findStudentByName() {
    let nameToFind = prompt("Nhap ten sv can tim:");
    let found = studentList.filter((name) => name.includes(nameToFind));
    if (found.length > 0) {
        console.log("Sinh vien:");
        found.forEach((name) => console.log(name));
    } else {
        console.log(`ko tim thay sv trong danh sach!`);
    }
}


function deleteStudentByName() {
    let nameToDelete = prompt("Nhap ten sv xoa:");
    let indexToDelete = studentList.findIndex((name) => name === nameToDelete);
    if (indexToDelete !== -1) {
        studentList.splice(indexToDelete, 1);
        console.log(`Da xoa sinh vien: ${nameToDelete}`);
    } else {
        console.log("Khogn tim thay sv de xoa!");
    }
}

function studentManagement() {
    let choice;
    do {
        displayMenu();
        choice = Number(prompt("Choc chuc nagn(1-5):"));
        switch (choice) {
            case 1:
                inputStudents();
                break;
            case 2:
                displayStudents();
                break;
            case 3:
                findStudentByName();
                break;
            case 4:
                deleteStudentByName();
                break;
            case 5:
                console.log("Thoat chuong trinh quan ly!");
                break;
            default:
                console.log("loi (1-5)!");
        }
    } while (choice !== 5);
}

studentManagement();
