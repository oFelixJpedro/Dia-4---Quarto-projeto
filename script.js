function calcular() {
    let peso = document.getElementById("Peso").value;
    let altura = document.getElementById("altura").value

    let IMC = peso / (altura ** 2);

    let resultado;

    if (IMC<18.5) {
        resultado = "abaixo do peso"
    }else if(IMC>18.5 && IMC<24.9){
        resultado = "peso normal"
    }else if(IMC>25 && IMC<29.9){
        resultado = "sobrepeso"
    }else if(IMC>30 && IMC<34.9){
        resultado = "obesidade grau 1"
    }else if(IMC>35 && IMC<39.9){
        resultado = "obesidade grau 2"
    }else if(IMC>40){
        resultado = "obesidade grau 3"
    }else{
        resultado = "valor inválido"
        IMC = "valor invalido"
    }

    return document.getElementById("indiceDeMassaCorporal").innerHTML = `<p> Seu IMC é: ${IMC}, diagnostico: ${resultado} </p>`
    
}