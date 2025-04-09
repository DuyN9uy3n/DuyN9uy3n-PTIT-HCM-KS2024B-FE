//lay cac pt

let bodyElement = document.body;
let changeBtn = document.getElementById(`changeColor`);

//su kien khi click toggle

changeBtn.addEventListener(`click`, function () {
  let newRandomColor = Math.floor(Math.random() * 16777215).toString(16);
  bodyElement.style.backgroundColor = `#` + newRandomColor;
});
