function upDate(previewPic) {
  console.log("Hovering/focusing image:", previewPic.alt);
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.textContent = previewPic.alt;
  imageDiv.setAttribute("aria-label", previewPic.alt); // ✅ per screen reader
}

function unDo() {
  console.log("Mouse out or blur, resetting image");
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Hover over an image below to display here.";
  imageDiv.setAttribute("aria-label", "Hover over an image below to display here."); // ✅ reset
}

function initializeGallery() {
  console.log("Gallery initialized");
  let images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", function () {
      upDate(this);
    });

    images[i].addEventListener("mouseout", function () {
      unDo();
    });

    images[i].addEventListener("focus", function () {
      upDate(this);
    });

    images[i].addEventListener("blur", function () {
      unDo();
    });

    images[i].setAttribute("tabindex", "0"); 
  }
}
