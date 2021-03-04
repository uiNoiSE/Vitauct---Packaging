window.addEventListener("load", pageReady, false);

function pageReady(e) {
  document.querySelector(".splash__logo").classList.add("hide");
  setTimeout(
    document.querySelector(".splash > .container").classList.remove("disabled"),
    1000
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    console.log("");
    
  } else {
    function parallax(event) {
      setTimeout(() => {
        this.querySelectorAll(".js-layer").forEach((layer) => {
          let speed = layer.getAttribute("data-speed");
          layer.style.transform = `translate(${
            (event.clientX * speed) / 500
          }px, ${(event.clientY * speed) / 500}px)`;
        });
      }, 100);
    }
    document.addEventListener("mousemove", parallax);
  }
});
