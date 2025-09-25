const container = document.querySelector("#bootstrap-image-gallery");
window.lightGallery(container, {
  selector: ".lg-item",
  plugins: [lgZoom, lgThumbnail],
});
