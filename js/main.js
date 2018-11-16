var linkMenu = document.querySelector(".link-menu");
var iconMenu = document.querySelector(".icon-menu");
var iconXmark = document.querySelector(".icon-xmark");
var menuWrapper = document.querySelector(".menu-wrapper");

linkMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  iconMenu.classList.toggle("icon-menu-toggle");
  iconXmark.classList.toggle("icon-xmark-toggle");
  menuWrapper.classList.toggle("menu-wrapper-toggle");
});