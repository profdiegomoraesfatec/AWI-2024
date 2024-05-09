var num1 = document.getElementById('txtnum1');
var num2 = document.getElementById('txtnum2');
var botao = document.getElementById('btncalcular');



function calcularValores(){


    if(soma = parseInt(num1.value) + parseInt(num2.value)){
        document.getElementById("lblresultado").innerText = soma.toString();
    }else{
        alert('Dados não preenchidos!');
    }    
  
}

botao.addEventListener('click', calcularValores);



