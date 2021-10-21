var campoCep = document.querySelector('#cep');

campoCep.oninvalid = function() {
    // Removendo a mensagem de validação
    this.setCustomValidity('');
    // Colocando uma mensagem personalizada
    if (!this.validity.valid) {
        this.setCustomValidity('Ops! Tem algo errado neste campo!');
        this.parentNode.classList.add('contatoCampo--erro');
    }
}
