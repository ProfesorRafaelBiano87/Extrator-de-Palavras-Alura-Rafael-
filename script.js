const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click',mostrapalavraschave);

function mostrapalavraschave(){
   const texto = document.querySelector('#entrada-de-texto').value;
   const texto = document.querySelector('#resultado-palavrachave');

   campoResultado.textContent = texto;

}