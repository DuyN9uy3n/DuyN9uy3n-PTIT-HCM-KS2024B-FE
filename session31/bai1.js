let textElement = document.getElementById(`text`);
let hideButton = document.getElementById(`hideBtn`);
let showButton = document.getElementById(`showBtn`);

hideButton.addEventListener(`click`, function () {
  textElement.style.display = `none`;
});

showButton.addEventListener(`click`, function () {
  textElement.style.display = `block`;
  //   textElement.style.color = `blue`;
});
