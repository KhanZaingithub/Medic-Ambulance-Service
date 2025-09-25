/*=========================================
    =            Preloader active            =
    ===========================================*/

window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader-activate");
  if (preloader) {
    // Add 'loaded' class to trigger CSS fade-out
    preloader.classList.add("loaded");

    // Optional: remove from DOM after animation
    preloader.addEventListener("transitionend", () => {
      preloader.remove();
    });
  }
});
