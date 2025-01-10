function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");

    modalImage.src = imgElement.src;

    modal.style.display = "flex";

    setTimeout(function() {
        modalImage.classList.add('zoom');
    }, 100); 

    var closeModal = document.getElementById("closeModal");
    closeModal.onclick = function() {
        modal.style.display = "none";
        modalImage.classList.remove('zoom'); 
    }
}


window.onclick = function(event) {
    var modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
