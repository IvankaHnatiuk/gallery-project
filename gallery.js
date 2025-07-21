function upDate(previewPic) {
  console.log("Hovering/focusing image:", previewPic.alt);
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.textContent = previewPic.alt;
}

function unDo() {
  console.log("Mouse out or blur, resetting image");
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Hover over an image below to display here.";
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
      console.log("Image focused:", this.alt);
      upDate(this);
    });

    images[i].addEventListener("blur", function () {
      console.log("Image lost focus:", this.alt);
      unDo();
    });

    images[i].setAttribute("tabindex", "0");
  }
}
