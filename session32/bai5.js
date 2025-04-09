const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = [];

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  tasks.push(taskText);

  const li = document.createElement("li");
  li.className = "task-item";

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "X";

  deleteBtn.addEventListener("click", function () {
    const isConfirmed = confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?");

    if (isConfirmed) {
      const taskIndex = tasks.indexOf(taskText);
      if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
      }

      li.remove();
    }
  });

  li.appendChild(taskContent);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addInitialTasks() {
  const initialTasks = ["học dom js", "làm bài tập dom js"];

  initialTasks.forEach((task) => {
    tasks.push(task);

    const li = document.createElement("li");
    li.className = "task-item";

    const taskContent = document.createElement("span");
    taskContent.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "X";

    deleteBtn.addEventListener("click", function () {
      const isConfirmed = confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?");

      if (isConfirmed) {
        const taskIndex = tasks.indexOf(task);
        if (taskIndex > -1) {
          tasks.splice(taskIndex, 1);
        }

        li.remove();
      }
    });

    li.appendChild(taskContent);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}
document.addEventListener("DOMContentLoaded", addInitialTasks);
