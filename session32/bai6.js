const textContent = document.getElementById("text-content");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");

let fontSize = 16;

increaseBtn.addEventListener("click", () => {
  fontSize += 2;
  textContent.style.fontSize = `${fontSize}px`;
});

decreaseBtn.addEventListener("click", () => {
  if (fontSize > 10) {
    fontSize -= 2;
    textContent.style.fontSize = `${fontSize}px`;
  }
});
