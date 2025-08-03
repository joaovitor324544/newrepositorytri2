const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;


const botaoMenos = document.getElementById('botao_menos');
const botaoMais = document.getElementById('botao_mais');


botaoMenos.addEventListener('click', diminuiTamanho);
botaoMais.addEventListener('click', aumentaTamanho);


function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;
    }
      numeroSenha.textContent = tamanhoSenha;
}


function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
        numeroSenha.textContent = tamanhoSenha;
    }
    numeroSenha.textContent = tamanhoSenha;
}
