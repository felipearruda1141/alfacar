const imagem1 = document.querySelector('.imagem');
const imagem2 = document.querySelector('.imagem:last-child');

imagem1.addEventListener('click', () => {
    imagem1.classList.add('hidden');
    imagem2.classList.remove('hidden');
});