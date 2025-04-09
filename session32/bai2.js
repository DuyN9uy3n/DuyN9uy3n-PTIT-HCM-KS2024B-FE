let clickButton = document.getElementById(`clickMe`);
let countDisplay = document.getElementById(`count`);

let clickCount = 0;

clickButton.addEventListener(`click`, function () {
  clickCount++;

  countDisplay.textContent = `So lan bam: ` + clickCount;
});
