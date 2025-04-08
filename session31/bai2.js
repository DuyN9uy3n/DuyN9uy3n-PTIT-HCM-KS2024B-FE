//lay cac pt

let bodyElement = document.body;
let toggleBtn = document.getElementById(`toggleMode`);
let isDarkMode = false;

//su kien khi click toggle

toggleBtn.addEventListener(`click`, function () {
  if (isDarkMode) {
    bodyElement.style.backgroundColor = `white`;
    bodyElement.style.color = `black`;
    toggleBtn.textContent = `toggle dark mode`;
    isDarkMode = false;
  } else {
    bodyElement.style.backgroundColor = `black`;
    bodyElement.style.color = `white`;
    toggleBtn.textContent = `toggle light mode`;
    isDarkMode = true;
  }
});
