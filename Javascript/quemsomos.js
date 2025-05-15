document.addEventListener("DOMContentLoaded", function () {

    const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
    let currentIndex = 0;
    
    const carouselImage = document.getElementById("carousel-image");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    
    function showImage(index) {
      carouselImage.src = images[index];
    }
    
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
    
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
    
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }, 3000); 
    
    showImage(currentIndex);

});