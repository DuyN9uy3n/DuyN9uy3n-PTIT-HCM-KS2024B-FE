document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("newTask");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => addTaskToDOM(task));
  };

  const saveTaskToStorage = (task) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const removeTaskFromStorage = (taskText) => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const addTaskToDOM = (taskText) => {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Xóa";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(li);
      removeTaskFromStorage(taskText);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  };

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTaskToDOM(taskText);
      saveTaskToStorage(taskText);
      taskInput.value = "";
    }
  });

  loadTasks();
});
