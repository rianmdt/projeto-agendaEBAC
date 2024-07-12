const form = document.getElementById('form-contato');
const imgAdicionado = '<img src= "./ok.png"/>';
const contatos = [];
const numeros = [];


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    if(numeros.includes(inputNumeroContato.value)){
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    };



    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha +=`<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;''


    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}