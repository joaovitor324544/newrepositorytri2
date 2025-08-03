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
