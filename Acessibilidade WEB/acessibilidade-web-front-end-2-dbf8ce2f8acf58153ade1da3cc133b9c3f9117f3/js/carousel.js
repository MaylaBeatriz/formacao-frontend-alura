// Variáveis
var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var noticias = document.querySelectorAll('.listaDeArtigos-item');

// Criando indicador de slide atual
var indicadorSlideAtual = document.createElement('span');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.textContent = '(slide atual)';

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // Para que a tela não fique subindo sozinha, mas interfere na leitura do nvda
    // btn.href = 'javascript:void(0)';

    noticias.forEach(function(noticia) {
      noticia.style.display = 'none';
      if (this.getAttribute('data-sliderItem') === noticia.getAttribute('data-noticia')) {
        noticia.style.display = 'block';
      }
    }.bind(this));

    this.append(indicadorSlideAtual);

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})