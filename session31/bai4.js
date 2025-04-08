document.getElementById("openBtn").onclick = function () {
  document.getElementById("modal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
};

document.querySelector(".close").onclick = function () {
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
};

document.getElementById("overlay").onclick = function () {
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
};
