window.addEventListener("load", pageReady, false);

function pageReady(e) {
  document.querySelector(".splash__logo").classList.add("hide");
  setTimeout(document.querySelector(".splash > .container").classList.remove("disabled"), 1000)
}