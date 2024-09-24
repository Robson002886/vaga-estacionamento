function calcular() {
    var cliente = document.getElementById("cxnome").value;

    var placa = document.getElementById("cxplaca").value;

    var carro = document.getElementById("cxcarro").value;

    var dias = document.getElementById("cxdias").value;

    var valor = document.getElementById("cxvalor").value;

    var bruto = parseFloat(valor) * parseInt(dias);

    var mensagem = `Cliente: ${cliente}\nPlaca: ${placa}\nCarro: ${carro}\nDias de estadia: ${dias}\n`;

   
    if (dias >= 150) {
        var total = bruto - (bruto * 0.10); 
        mensagem += `\nVocê recebeu um desconto de 10%!\nValor total sem desconto: R$ ${bruto.toFixed(2)}\nValor total com desconto: R$ ${total.toFixed(2)}`;
    } else {
        mensagem += `\nValor total a pagar: R$ ${bruto.toFixed(2)}`;
    }
    alert(mensagem);
}
