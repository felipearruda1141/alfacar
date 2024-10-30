// Get the modal
var modal = document.getElementById("myModal");

// Get the image and caption text
var img = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get all images and give each one the "click" event listener
var images = document.getElementsByClassName("imagem");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src   
 = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display   
 = "none";
}

// Atualiza a data no rodapé
const dataElement = document.getElementById('data');
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
dataElement.textContent = today.toLocaleDateString('pt-BR', options);