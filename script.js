const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click',mostraPalavrasChave);

function mostraPalavrasChave() {
   const texto = document.querySelector('#entrada-de-texto').value;
   const texto = document.querySelector('#resultado-palavrachave');

   campoResultado.textContent = texto;

}