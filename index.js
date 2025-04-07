

function displayImages() {
  let gallery = document.getElementById("imgGallery");
  let images = [];

  for (let i = 0; i <= 8; i++) {
    images.push(`img/cozmo${i}` + ".jpg");
  }

  images.forEach((imageUrl) => {
    let img = document.createElement("img");
    let list = document.createElement("div");
    list.className = "imgDiv"; // Creating containers for the images and giving them a class

    img.src = imageUrl;

    list.appendChild(img);
    gallery.appendChild(list); // Inserting the new images in the existing div in the DOM
  });

  // Find a way to handle if there is no path to file so I don't get a bunch of path errors
}

displayImages();
