let booksList = [];
let cart = [];
let running = true;

while (running) {
  let choice = Number(
    prompt(
      `==== MENU ====
1. Hiển thị sách theo thể loại
2. Thêm sách mới vào kho
3. Tìm kiếm sách
4. Mua sách
5. Sắp xếp sách theo giá
6. Tính tổng sách đã mua và tổng tiền trong giỏ
7. Hiển thị tổng sách trong kho
8. Thoát

Nhập lựa chọn (1-8):`
    )
  );

  switch (choice) {
    case 1:
      let category = prompt("Nhập tên thể loại:").trim();
      showBooksByCategory(category);
      break;
    case 2:
      addNewBook();
      break;
    case 3:
      searchBook();
      break;
    case 4:
      let id = Number(prompt("Nhập mã sách muốn mua:"));
      let quantity = Number(prompt("Nhập số lượng sách muốn mua:"));
      buyBook(id, quantity);
      break;
    case 5:
      let order = prompt("Nhập 'asc' để tăng hoặc 'desc' để giảm:")
        .trim()
        .toLowerCase();
      sortBooksByPrice(order);
      break;
    case 6:
      calculateCartTotal();
      break;
    case 7:
      calculateTotalBooksInStock();
      break;
    case 8:
      running = false;
      alert("Đã thoát chương trình.");
      break;
    default:
      alert("Lựa chọn không hợp lệ! Vui lòng nhập từ 1-8."); // Xử lý lỗi nhập sai
  }
}

function books(id, name, price, quantity, category) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
}

function showBooksByCategory(category) {
  if (!category.trim()) {
    alert("Vui lòng nhập tên thể loại hợp lệ.");
    return;
  }

  let filtered = booksList.filter(
    (b) => b.category.toLowerCase() === category.toLowerCase()
  );

  if (filtered.length === 0) {
    alert("Không có sách nào trong danh mục này.");
  } else {
    let result = "Danh sách sách:\n";
    filtered.forEach((b) => {
      result += `${b.id}. ${b.name} - ${b.price} VND - SL: ${b.quantity}\n`;
    });
    alert(result);
  }
}

function addNewBook() {
  let id = Number(prompt("Nhập mã sách:"));
  let name = prompt("Nhập tên sách:");
  let price = Number(prompt("Nhập giá sách:"));
  let quantity = Number(prompt("Nhập số lượng sách:"));
  let category = prompt("Nhập thể loại sách:");

  if (!id || !name || !price || !quantity || !category) {
    alert("Thông tin nhập không hợp lệ!");
    return;
  }

  let newBook = new books(id, name, price, quantity, category);
  booksList.push(newBook);
  alert("Sách mới đã được thêm vào kho.");
}

function searchBook() {
  let query = prompt("Nhập tên hoặc mã sách cần tìm:").trim().toLowerCase();

  let result = booksList.filter(
    (b) => b.name.toLowerCase().includes(query) || b.id === Number(query)
  );

  if (result.length === 0) {
    alert("Không tìm thấy sách.");
  } else {
    let output = "Kết quả tìm kiếm:\n";
    result.forEach((b) => {
      output += `${b.id}. ${b.name} - ${b.price} VND - SL: ${b.quantity} - Thể loại: ${b.category}\n`;
    });
    alert(output);
  }
}

function buyBook(id, quantity) {
  let book = booksList.find((b) => b.id === id);

  if (!book) {
    alert("Không tìm thấy sách với mã này.");
    return;
  }

  if (quantity <= 0) {
    alert("Số lượng mua phải lớn hơn 0.");
    return;
  }

  if (book.quantity < quantity) {
    alert("Không đủ sách trong kho.");
    return;
  }

  book.quantity -= quantity;

  let cartItem = cart.find((item) => item.id === id);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({
      id: book.id,
      name: book.name,
      price: book.price,
      quantity,
    });
  }

  alert("Đã thêm sách vào giỏ hàng.");
}

function sortBooksByPrice(order) {
  let sorted = [...booksList];

  if (order === "asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (order === "desc") {
    sorted.sort((a, b) => b.price - a.price);
  } else {
    alert("Thứ tự sắp xếp không hợp lệ!");
    return;
  }

  let result = "Danh sách sách:\n";
  sorted.forEach((b) => {
    result += `${b.id}. ${b.name} - ${b.price} VND - SL: ${b.quantity}\n`;
  });
  alert(result);
}

function calculateCartTotal() {
  if (cart.length === 0) {
    alert("Giỏ hàng đang trống.");
    return;
  }

  let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  let totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  alert(`Tổng sách đã mua: ${totalQuantity}\nTổng tiền: ${totalPrice} VND`);
}

function calculateTotalBooksInStock() {
  let totalStock = booksList.reduce((sum, book) => sum + book.quantity, 0);
  alert(`Tổng số sách còn trong kho: ${totalStock}`);
}
