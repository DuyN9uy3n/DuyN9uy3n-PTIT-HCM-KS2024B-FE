// Hàm thêm công việc
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Vui lòng nhập công việc!");
    return;
  }

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");

  li.innerHTML = `
        ${taskText}
        <div>
            <button onclick="editTask(this)">Sửa</button>
            <button onclick="deleteTask(this)">Xóa</button>
        </div>
    `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(button) {
  button.parentElement.parentElement.remove();
}

function editTask(button) {
  const li = button.parentElement.parentElement;
  const taskText = li.firstChild.textContent.trim();
  const newTaskText = prompt("Sửa công việc:", taskText);

  if (newTaskText !== null && newTaskText.trim() !== "") {
    li.firstChild.textContent = newTaskText;
  }
}
document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
