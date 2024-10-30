function calcular() {
    // Obtém os valores dos inputs
    const valorDividaInicial = parseFloat(document.getElementById("valorDivida").value);
    const mesesAtraso = parseInt(document.getElementById("mesesAtraso").value);
    const taxaJuros = parseFloat(document.getElementById("taxaJuros").value) / 100; // Converte para decimal

    // Calcula o valor final com juros compostos
    let valorFinal = valorDividaInicial;
    for (let i = 0; i < mesesAtraso; i++) {
        valorFinal *= (1 + taxaJuros);
    }

    // Exibe o resultado
    document.getElementById("resultado").textContent = `O valor total da divida apos ${mesesAtraso} meses e de R$ ${valorFinal.toFixed(2)}`;
}