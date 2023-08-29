function adicionarValorVisor(valor){
    console.log("Adiconou o "+ valor + " no visor:");
    document.getElementById("visor").value += valor;
}

function limparValorVisor(){
    console.log("Limpou o valor do visor.")
    document.getElementById("visor").value = "";
}

function calcular(){
    console.log("Iniciou a função calcular.")
    var resultado = "";
    var operacao = "";
    var valor1 = "";
    var valor2 = "";

    var conteudoVisor = document.getElementById("visor").value;

    for (var indice = 0; indice < conteudoVisor.length; indice++){
        var valorIndice = conteudoVisor[indice];

        if ((isNaN(valorIndice)) && (valorIndice != ".") && (indice != 0)){
            if (valorIndice == "+"){
                operacao = valorIndice;
            } else

            if (valorIndice == "-"){
                operacao = valorIndice;
            } else

            if (valorIndice == "*"){
                operacao = valorIndice;
            } else

            if (valorIndice == "/"){
                operacao = valorIndice;
            } else

            if (valorIndice == "%"){
                operacao = valorIndice;
            }
        }
            else{
                if (operacao == ""){
                    valor1 += valorIndice;
                }
                else{
                    valor2 += valorIndice;
                }
            }
    }
    
    if (isNaN(conteudoVisor[indice+1]) && (conteudoVisor[indice+1] !=".")){
        if(valor1 != "" && valor2 != "" && operacao != ""){
            if(operacao == "+"){
                resultado = soma(parseFloat(valor1), parseFloat(valor2));
            } else
            if(operacao == "-"){
                resultado = sub(parseFloat(valor1), parseFloat(valor2));
            }else
            if(operacao == "*"){
                resultado = mult(parseFloat(valor1), parseFloat(valor2));
            }else
            if(operacao == "/"){
                resultado = div(parseFloat(valor1), parseFloat(valor2));
            }else
            if(operacao == "%"){
                resultado = porcentagem(parseFloat(valor1), parseFloat(valor2));
            }
        }

        valor1 = resultado;
        valor2 = "";
    }
        if(conteudoVisor != ""){
        exibirResultado(resultado);
        log(conteudoVisor + " = " + resultado);
        }
    
}

function soma(val1, val2){
    console.log("Somou "+ val1 + " com "+ val2);
    return val1 + val2;
}

function sub(val1, val2){
    console.log("Subtraiu "+ val1 + " com "+ val2);
    return val1 - val2;
}

function mult(val1, val2){
    console.log("Multiplicou "+ val1 + " com "+ val2);
    return val1 * val2;
}

function div(val1, val2){
    console.log("Dividiu "+ val1 + " com "+ val2);
    return val1 / val2;
}
function porcentagem(val1, val2){
    console.log("Obteve a portecentagem de "+ val1 + " com "+ val2);
    return (val1 * val2)/100;
}
function exibirResultado(valor){
    limparValorVisor();
    adicionarValorVisor(valor);
}

function log(valor){
    if (valor !=""){
        var textoLog="<p>" + valor + "</p>" + document.getElementById("conteudo_logs").innerHTML;
        document.getElementById("conteudo_logs").innerHTML = textoLog;
    }

    
}