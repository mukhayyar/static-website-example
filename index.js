function openModal(imageName, title, description) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("modalCaption");
    modal.style.display = "block";
    modalImg.src = "images/"+imageName + ".jpg";
    captionText.innerHTML = "<h3>" + title + "</h3><p>" + description + "</p>";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
