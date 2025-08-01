const numeroSenha = document.querySelector('.parametro-senha__textos');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
 
const botoes = document.querySelector('.parametro-senha__botoes');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho; 
 
function diminuiTamanho(){
    if(tamanhoSenha > 1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function diminuiTamanho(){
    if(tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}