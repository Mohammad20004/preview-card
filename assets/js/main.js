const img = document.getElementById("img-card");
const hover = document.getElementById("hover");
const hoverImg = document.getElementById("hover-img");

img.addEventListener("mouseover", (e) => {
  hover.classList.add("hover");
  hover.style.display = "inline-block";
  hoverImg.style.display = "inline-block";
  img.style.opacity = 0.8;
  hover.style.opacity = 0.6;
});

img.addEventListener("mouseout", (e) => {
  hover.classList.remove("hover");
  hover.style.display = "none";
  hoverImg.style.display = "none";
});
