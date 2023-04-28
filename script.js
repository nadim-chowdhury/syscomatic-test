const menu = document.querySelector("#menu");
const links = document.querySelector(".links");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  links.style.visibility = "visible";
  menu.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  links.style.visibility = "hidden";
  menu.style.display = "block";
});

links.addEventListener("click", () => {
  links.style.visibility = "hidden";
});
