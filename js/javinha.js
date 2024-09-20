function calcular(){
    var cliente = 
    document.getElementById("cxnome") .value;
    var placa =
    doxument.getElementById("cxplaca") .value;
    var carro =
    document.getElementById("cxcarro") .value;
    var dias =
    document.getElementById("cxdias") .value;
    var valor =
    document.getElementById("cxvalor") .value;

    var bruto = parsefloat(valor)*parseint(dias);
    if(bruto > 150){
        var total = bruto - (bruto * 0.10);
        alert("total" + total)
    }
    else{ var total = bruto
    }
