adicionarCarrinho = () => {
    alert("Livro adicionado ao carrinho");
}

realizarPagamento = () => {
    alert("Din din din manda o valor pra mim");
}

calcular = () => {
    var valor1 = parseFloat(document.getElementById("valor1").innerText);
    var valor2 = parseFloat(document.getElementById("valor2").innerText);
    var valor3 = parseFloat(document.getElementById("valor3").innerText);
    var qnt1 = document.getElementById("livro1").value;
    var qnt2 = document.getElementById("livro2").value;
    var qnt3 = document.getElementById("livro3").value;
    var total = 0;

    total = (valor1 * qnt1) + (valor2 * qnt2) + (valor3 * qnt3);

    document.getElementById("total").innerHTML = total;
}