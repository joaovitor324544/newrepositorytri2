const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botaoMenos = document.getElementById('botao_menos');
const botaoMais = document.getElementById('botao_mais');

botaoMenos.addEventListener('click', () => {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;
        atualizarForca();
    }
});

botaoMais.addEventListener('click', () => {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
        numeroSenha.textContent = tamanhoSenha;
        atualizarForca();
    }
});

const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', atualizarForca);
});

function atualizarForca() {
    const forcaBarra = document.querySelector('.forca');

    // Contar quantos critérios estão marcados
    let criterios = 0;
    checkboxes.forEach(c => {
        if (c.checked) criterios++;
    });

    // Baseado no número de critérios e tamanho, atualizar classe da barra
    forcaBarra.className = 'forca'; // Resetar classe

    if (criterios <= 1 || tamanhoSenha <= 6) {
        forcaBarra.classList.add('fraca');
        forcaBarra.style.width = '25%';
    } else if (criterios === 2 || tamanhoSenha <= 10) {
        forcaBarra.classList.add('media');
        forcaBarra.style.width = '50%';
    } else {
        forcaBarra.classList.add('forte');
        forcaBarra.style.width = '100%';
    }
}

// Executar ao carregar
atualizarForca();

// Seletores
const campoSenha = document.getElementById('campo_senha');
const botaoGerar = document.getElementById('botao_gerar');

const checkMaiusculo = document.getElementById('maiusculo');
const checkMinusculo = document.getElementById('minusculo');
const checkNumero = document.getElementById('numero');
const checkSimbolo = document.getElementById('simbolo');

// Gerador de caracteres
function gerarSenha(tamanho, usarMaiusculas, usarMinusculas, usarNumeros, usarSimbolos) {
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%&*()-_=+{}[]<>?/';

    let caracteres = '';
    if (usarMaiusculas) caracteres += letrasMaiusculas;
    if (usarMinusculas) caracteres += letrasMinusculas;
    if (usarNumeros) caracteres += numeros;
    if (usarSimbolos) caracteres += simbolos;

    if (caracteres.length === 0) return '';

    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        const index = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(index);
    }

    return senha;
}

// Ação do botão
botaoGerar.addEventListener('click', () => {
    const senhaGerada = gerarSenha(
        tamanhoSenha,
        checkMaiusculo.checked,
        checkMinusculo.checked,
        checkNumero.checked,
        checkSimbolo.checked
    );

    campoSenha.value = senhaGerada;
    atualizarForca();
});
