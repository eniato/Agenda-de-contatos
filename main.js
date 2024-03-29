const form = document.getElementById('form-contato');
    let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>'; 

    linhas += linha;
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
});

// Verificar entrada no campo "Nome do contato"
const nomeContatoInput = document.getElementById('nome-contato');
nomeContatoInput.addEventListener('input', function() {
    const valorAtual = nomeContatoInput.value;
    const valorSemNumeros = valorAtual.replace(/\d/g, ''); // Remove todos os números

    if (valorAtual !== valorSemNumeros) {
        nomeContatoInput.value = valorSemNumeros; // Atualiza o valor sem números
    }
});

// Limpar tabela
const btnLimpar = document.querySelector('.btn-cln');
btnLimpar.addEventListener('click', function() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = '';
});