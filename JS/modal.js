document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const modalEl = document.getElementById("welcomeModal");
    const myModal = new bootstrap.Modal(modalEl, {
      backdrop: true,
      keyboard: true,
    });

    // When modal hides, clean up backdrop + scroll lock
    modalEl.addEventListener("hidden.bs.modal", function () {
      // Remove leftover backdrop if any
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      // Restore body scroll
      document.body.classList.remove("modal-open");
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("padding-right");
    });

    myModal.show();
  }, 1500);
});
