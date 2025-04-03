let company = {
  name: `RikkeiSoft`,
  location: `Ha Noi`,
  employee: [
    { name: "Nguyen Van Luan", position: "Developer" },

    { name: "Nguyen Van Hoang", position: "Tester" },

    { name: "Hoang Nam Cao", position: "Manager" },
  ],
};

console.log(company.name);

console.log(`Ten nhan vien:`);

for (i = 0; i < company.employee.length; i++) {
  console.log(`${i + 1}. Ten : ${company.employee[i].name}`);
}
