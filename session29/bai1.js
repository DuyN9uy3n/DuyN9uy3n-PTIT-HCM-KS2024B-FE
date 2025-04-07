function contact(id, name, email, phone) {
  this.ib = ib;
  this.name = name;
  this.email = email;
  this.phone = phone;
}

let contactList = [];

function addContact(id, name, email, phone) {
  const newContact = new contact(id, name, email, phone);
  contactList.push(newContact);
  console.log("Da them lien he:", newContact);
}

// Hien thi danh sach lien he
function displayContacts() {
  console.log("Danh sach lien he:");
  contactList.forEach(function (contact) {
    console.log(contact);
  });
}

// Tim kiem lien he theo so dien thoai
function searchByPhone(phone) {
  const foundContact = contactList.find(function (contact) {
    return contact.phone === phone;
  });
  if (foundContact) {
    console.log("Lien he tim duoc:", foundContact);
  } else {
    console.log("Khong tim thay lien he voi so dien thoai nay.");
  }
}

// Cap nhat lien he theo ID
function updateContactById(id, updatedName, updatedEmail, updatedPhone) {
  const contact = contactList.find(function (contact) {
    return contact.ib === id;
  });
  if (contact) {
    contact.name = updatedName || contact.name;
    contact.email = updatedEmail || contact.email;
    contact.phone = updatedPhone || contact.phone;
    console.log("Da cap nhat lien he:", contact);
  } else {
    console.log("Khong tim thay lien he voi ID nay.");
  }
}

// Xoa lien he theo ID
function removeContactById(id) {
  const index = contactList.findIndex(function (contact) {
    return contact.ib === id;
  });
  if (index !== -1) {
    const removedContact = contactList.splice(index, 1);
    console.log("Da xoa lien he:", removedContact[0]);
  } else {
    console.log("Khong tim thay lien he voi ID nay.");
  }
}

// Menu chinh
function mainMenu() {
  let running = true;
  while (running) {
    console.log(`
=== MENU QUAN LY DANH BA ===
1. Them lien he
2. Hien thi danh sach lien he
3. Tim kiem lien he theo so dien thoai
4. Cap nhat lien he theo ID
5. Xoa lien he theo ID
6. Thoat
        `);
    const choice = prompt("Nhap lua chon (1-6):");
    switch (choice) {
      case "1":
        const id = parseInt(prompt("Nhap ID:"));
        const name = prompt("Nhap ten:");
        const email = prompt("Nhap email:");
        const phone = prompt("Nhap so dien thoai:");
        addContact(id, name, email, phone);
        break;
      case "2":
        displayContacts();
        break;
      case "3":
        const searchPhone = prompt("Nhap so dien thoai can tim:");
        searchByPhone(searchPhone);
        break;
      case "4":
        const updateId = parseInt(prompt("Nhap ID can cap nhat:"));
        const updatedName = prompt("Nhap ten moi (de trong neu khong doi):");
        const updatedEmail = prompt("Nhap email moi (de trong neu khong doi):");
        const updatedPhone = prompt(
          "Nhap so dien thoai moi (de trong neu khong doi):"
        );
        updateContactById(updateId, updatedName, updatedEmail, updatedPhone);
        break;
      case "5":
        const removeId = parseInt(prompt("Nhap ID can xoa:"));
        removeContactById(removeId);
        break;
      case "6":
        running = false;
        console.log("Da thoat chuong trinh.");
        break;
      default:
        console.log("Lua chon khong hop le! Vui long nhap lai.");
    }
  }
}

// Khoi dong menu
mainMenu();
