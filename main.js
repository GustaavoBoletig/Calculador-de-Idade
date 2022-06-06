document.getElementById('calcular').addEventListener('click', calcular);
const output = document.getElementById('output');

function calcular() {

    const nascimento = Number(document.getElementById('interface').value);
    const date = new Date();
    const ano = date.getFullYear();

    const idade = Math.abs(nascimento - ano);

    output.innerHTML = idade;

};



