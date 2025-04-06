const pages = document.getElementsByClassName("page");

function hideGallery() {
  document.getElementById("imgGallery").style.display = "none";
  console.log(imgGallery.value);
}

function home() {
  imgGallery.style.display = "grid";
}

function hideOnload() {
  let pagesToHide = document.getElementsByClassName("page"); // Putting the pages in an array
  for (let i = 0; i < pagesToHide.length; i++) {
    pagesToHide[i].style.display = "none"; // Hiding the pages that shouldn't be visible
  }
}

function displayImages() {
  let gallery = document.getElementById("imgGallery");
  let images = [];

  // Find a way to handle if there is no path to file so I don't get a bunch of path errors
  
  for (let i = 0; i <= 8; i++) {
      images.push(`img/cozmo${i}` + ".jpg");
  }

  images.forEach((imageUrl) => {
    let img = document.createElement("img");
    let list = document.createElement("div");
    list.className = "imgDiv";

    img.src = imageUrl;

    list.appendChild(img);
    gallery.appendChild(list);
  });
}

displayImages();
