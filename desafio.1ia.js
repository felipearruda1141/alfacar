function enviarFormulario() {
    // Obter os valores dos campos
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const   
 escolaridade = document.getElementById('escolaridade').value;
    const cidade = document.getElementById('cidade').value;
    const sexo = document.getElementById('sexo').value;

    // Exibir uma mensagem de agradecimento
    alert(`Obrigado por responder o formulário, ${nome}!`);

    // Limpar os campos do formulário (opcional)
    document.getElementById('myForm').reset();
}