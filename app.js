
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole(){
    console.log('o botao foi clicado');
}

function verificarAlert(){
    alert('Eu amo JS');
}

function verificarPrompt(){
   let cidade = prompt('Diga um nome de uma cidade:');
   alert(`Estive em ${cidade} e lembrei de você.`);
}

function verificarSoma(){
    let n1 = parseInt(prompt('Digite um numero:'));
    let n2 = parseInt(prompt('Digite outro número:'));
    let soma = n1 + n2;
    alert(`O ${n1} somado com o ${n2} da o resultado de ${soma}`);
}