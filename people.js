const images = [
    "assest/unang-kita-ko-sayo.PNG", 
    "assest/unang-kita-ko-sayo-2.PNG", 
    "assest/unang-kita-ko-sayo-3.PNG", 
    "assest/unang-kita-ko-sayo-4.PNG", 
    "assest/unang-kita-ko-sayo-5.PNG",
    "assest/unang-kita-ko-sayo-6.PNG"
];

let currentIndex = 0;

const img = document.getElementById("imageToView");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeModal");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const overlayText = document.getElementById("overlayText");

overlayText.style.display = "none"; 

setTimeout(function() {
    overlayText.style.display = "block"; 
}, 5000); 

img.onclick = function() {
    overlayText.style.display = "none"; 
    modal.style.display = "flex"; 
    modalImg.src = images[currentIndex]; 
    updateArrowVisibility(); 
}

closeBtn.onclick = function() {
    modal.style.display = "none"; 
}

prevBtn.onclick = function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    modalImg.src = images[currentIndex];
    updateArrowVisibility(); 
}

nextBtn.onclick = function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    modalImg.src = images[currentIndex];
    updateArrowVisibility();
}


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


function updateArrowVisibility() {
    if (currentIndex === 0) {
        prevBtn.style.display = "none"; 
    } else {
        prevBtn.style.display = "block"; 
    }
    if (currentIndex === images.length - 1) {
        nextBtn.style.display = "none"; 
    } else {
        nextBtn.style.display = "block"; 
    }
}
