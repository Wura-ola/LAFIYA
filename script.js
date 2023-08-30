const togglebars = document.querySelector(".toggle_bar");
const nav = document.querySelector("nav");
const ul = document.querySelector(".ul");
togglebars.addEventListener("click", () => {
  ul.classList.toggle("show");
});
