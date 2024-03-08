document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos campos
    var campoA = parseInt(document.getElementById('campoA').value);
    var campoB = parseInt(document.getElementById('campoB').value);

    // Validação: campo B deve ser maior que campo A
    if (campoB > campoA) {
        document.getElementById('mensagem').innerHTML = 'Formulário válido!';
        document.getElementById('mensagem').style.color = 'green';
    } else {
        document.getElementById('mensagem').innerHTML = 'Formulário inválido! Campo B deve ser maior que campo A.';
        document.getElementById('mensagem').style.color = 'red';
    }
});
