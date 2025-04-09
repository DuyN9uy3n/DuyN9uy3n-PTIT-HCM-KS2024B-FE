const subjectInput = document.getElementById("subjectInput");
const addButton = document.getElementById("addButton");
const subjectList = document.getElementById("subjectList");

addButton.addEventListener("click", function () {
  const subjectName = subjectInput.value.trim();

  if (subjectName === "") {
    alert("Tên môn học không được để trống!");
    return;
  }

  const newSubject = document.createElement("li");
  newSubject.textContent = subjectName;

  subjectList.appendChild(newSubject);

  subjectInput.value = "";

  subjectInput.focus();
});

subjectInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addButton.click();
  }
});
