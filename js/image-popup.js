const dialog = document.createElement("dialog");
const popupImage = document.createElement("img");

dialog.className = "image-popup";
dialog.setAttribute("aria-label", "Image preview");
dialog.append(popupImage);
document.body.append(dialog);

function openImage(image) {
  popupImage.src = image.currentSrc || image.src;
  popupImage.alt = image.alt;
  dialog.showModal();
}

document.addEventListener("click", (event) => {
  if (event.target instanceof HTMLImageElement &&
      event.target.classList.contains("markdown-popup-image")) {
    openImage(event.target);
  } else if (event.target === dialog) {
    dialog.close();
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") &&
      event.target instanceof HTMLImageElement &&
      event.target.classList.contains("markdown-popup-image")) {
    event.preventDefault();
    openImage(event.target);
  }
});
