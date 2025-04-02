function displayMenu() {
    console.log(`
    --- MENU TINH TOAN HINH HOC ---
    1. Tinh dien tich hinh tron
    2. Tinh chu vi hinh tron
    3. Tinh dien tich hinh chu nhat
    4. Tinh chu vi hinh chu nhat
    5. Thoat
    `);
}

function calculateCircleArea(radius) {
    return Math.PI * radius ** 2; 
}

function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius; 
}

function calculateRectangleArea(length, width) {
    return length * width; 
}

function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width); 
}

function geometryMenu() {
    let choice;
    do {
        displayMenu();
        choice = Number(prompt("Chon chuc nang (1-5):"));
        switch (choice) {
            case 1:
                let radius1 = Number(prompt("Nhap ban kinh hinh tron:"));
                if (!isNaN(radius1) && radius1 > 0) {
                    console.log("Dien tich hinh tron:", calculateCircleArea(radius1).toFixed(2));
                } else {
                    console.log("Ko hop le!");
                }
                break;
            case 2:
                let radius2 = Number(prompt("Nhap ban kinh hinh tron:"));
                if (!isNaN(radius2) && radius2 > 0) {
                    console.log("Chu vi hinh tron:", calculateCircleCircumference(radius2).toFixed(2));
                } else {
                    console.log("Ko hop le!");
                }
                break;
            case 3:
                let length = Number(prompt("Nhap chieu dai hinh chu nhat:"));
                let width = Number(prompt("Nhap chieu rong hinh chu nhat:"));
                if (!isNaN(length) && length > 0 && !isNaN(width) && width > 0) {
                    console.log("Dien tich hinh chu nhat:", calculateRectangleArea(length, width).toFixed(2));
                } else {
                    console.log("ko hop le!");
                }
                break;
            case 4:
                let lengthPerimeter = Number(prompt("Nhap chieu dai hinh chu nhat:"));
                let widthPerimeter = Number(prompt("Nhap chieu rong hinh chu nhat:"));
                if (!isNaN(lengthPerimeter) && lengthPerimeter > 0 && !isNaN(widthPerimeter) && widthPerimeter > 0) {
                    console.log("Chu vi hinh chu nhat:", calculateRectanglePerimeter(lengthPerimeter, widthPerimeter).toFixed(2));
                } else {
                    console.log("ko hop lele!");
                }
                break;
            case 5:
                console.log("Thoat chuong trinh");
                break;
            default:
                console.log("loi(1-5)!");
        }
    } while (choice !== 5);
}

geometryMenu();
