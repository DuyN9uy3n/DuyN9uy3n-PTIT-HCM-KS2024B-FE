// Tạo một hệ thống quản lý sản phẩm với các chức năng CRUD.Mỗi sản phẩm có các thuộc tính:

// id: Định danh duy nhất.
// name: Tên sản phẩm.
// price: Giá sản phẩm.
// category: Danh mục sản phẩm.
// quantity: Số lượng sản phẩm trong kho.

// Các chức năng:

// 1.Thêm sản phẩm vào danh sách sản phẩm.
// 2.Hiển thị tất cả sản phẩm.
// 3.Hiển thị chi tiết sản phẩm theo id.
// 4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
// 5.Xóa sản phẩm theo id.
// 6.Lọc sản phẩm theo khoảng giá.
// 7.Thoát.

function product(id, name, price, category, quantity) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.category = category;
  this.quantity = quantity;
}

// Danh sach san pham
let productList = [];

function addProduct(id, name, price, category, quantity) {
  let newProduct = new product(id, name, price, category, quantity);
  productList.push(newProduct);
  console.log("Them thanh cong:", newProduct);
}

function displayAllProducts() {
  console.log("Danh sach tat ca san pham:");
  productList.forEach(function (product) {
    console.log(
      `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Category: ${product.category}, Quantity: ${product.quantity}`
    );
  });
}

function displayProductById(id) {
  const product = productList.find(function (product) {
    return product.id === id;
  });
  if (product) {
    console.log("Chi tiet san pham:", product);
  } else {
    console.log("Khong tim thay san pham voi ID:", id);
  }
}

function updateProductById(
  id,
  updatedName,
  updatedPrice,
  updatedCategory,
  updatedQuantity
) {
  const product = productList.find(function (product) {
    return product.id === id;
  });
  if (product) {
    product.name = updatedName || product.name;
    product.price = updatedPrice || product.price;
    product.category = updatedCategory || product.category;
    product.quantity = updatedQuantity || product.quantity;
    console.log("Da cap nhat thong tin san pham:", product);
  } else {
    console.log("Khong tim thay san pham voi ID:", id);
  }
}

function removeProductById(id) {
  const index = productList.findIndex(function (product) {
    return product.id === id;
  });
  if (index !== -1) {
    const removedProduct = productList.splice(index, 1);
    console.log("Da xoa san pham:", removedProduct[0]);
  } else {
    console.log("Khong tim thay san pham voi ID:", id);
  }
}
function filterProductsByPriceRange(minPrice, maxPrice) {
  const filteredProducts = productList.filter(function (product) {
    return product.price >= minPrice && product.price <= maxPrice;
  });
  console.log(
    `San pham trong khoang gia tu ${minPrice} den ${maxPrice}:`,
    filteredProducts
  );
}

function mainMenu() {
  let running = true;
  while (running) {
    console.log(`
=== MENU QUAN LY SAN PHAM ===
1. Them san pham
2. Hien thi tat ca san pham
3. Hien thi chi tiet san pham theo ID
4. Cap nhat thong tin san pham theo ID
5. Xoa san pham theo ID
6. Loc san pham theo khoang gia
7. Thoat
        `);
    const choice = prompt("Nhap lua chon (1-7):");
    switch (choice) {
      case "1":
        const id = prompt("Nhap ID:");
        const name = prompt("Nhap ten san pham:");
        const price = parseFloat(prompt("Nhap gia san pham:"));
        const category = prompt("Nhap danh muc san pham:");
        const quantity = parseInt(prompt("Nhap so luong san pham:"));
        addProduct(id, name, price, category, quantity);
        break;
      case "2":
        displayAllProducts();
        break;
      case "3":
        const searchId = prompt("Nhap ID san pham can tim:");
        displayProductById(searchId);
        break;
      case "4":
        const updateId = prompt("Nhap ID san pham can cap nhat:");
        const updatedName = prompt("Nhap ten moi (de trong neu khong doi):");
        const updatedPrice =
          parseFloat(prompt("Nhap gia moi (de trong neu khong doi):")) ||
          undefined;
        const updatedCategory = prompt(
          "Nhap danh muc moi (de trong neu khong doi):"
        );
        const updatedQuantity =
          parseInt(prompt("Nhap so luong moi (de trong neu khong doi):")) ||
          undefined;
        updateProductById(
          updateId,
          updatedName,
          updatedPrice,
          updatedCategory,
          updatedQuantity
        );
        break;
      case "5":
        const removeId = prompt("Nhap ID san pham can xoa:");
        removeProductById(removeId);
        break;
      case "6":
        const minPrice = parseFloat(prompt("Nhap gia toi thieu:"));
        const maxPrice = parseFloat(prompt("Nhap gia toi da:"));
        filterProductsByPriceRange(minPrice, maxPrice);
        break;
      case "7":
        running = false;
        console.log("Da thoat chuong trinh.");
        break;
      default:
        console.log("Lua chon khong hop le! Vui long thu lai.");
    }
  }
}

mainMenu();
