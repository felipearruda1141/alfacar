function changeImage(index) {
    const images = document.getElementsByClassName('image');
    const body = document.body;

    // Remover a classe 'active' de todas as imagens
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }

    // Adicionar a classe 'active' à imagem clicada
    images[index - 1].classList.add('active');

    // Adicionar a classe correspondente ao corpo para mudar o gradiente
    body.className = 'image' + index;
}
