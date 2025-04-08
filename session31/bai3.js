let colorBox = document.querySelectorAll(`.color-box`);

colorBox.forEach(function (box) {
  box.addEventListener(`click`, function () {
    let boxColor = window.getComputedStyle(box).backgroundColor;
    document.body.style.backgroundColor = boxColor;
  });
});
