function openModal(imageSrc) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  modalImage.src = imageSrc;
  modal.style.display = "flex";
}

document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});
