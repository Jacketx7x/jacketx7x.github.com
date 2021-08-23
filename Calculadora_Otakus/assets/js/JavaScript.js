const botonNumeros=document.getElementsByName("data_numero");
const botonOperadores=document.getElementsByName('operador');
const botonIgual=document.getElementsByName("data_igual")[0];
const botonDelete=document.getElementsByName('data_delete')[0];

var result=document.getElementById("result");
var opeActual="";
var opeAnterior="";
var operacion=undefined;



//Intento de ponerle audio a cada boton de forma practica
var audio=document.getElementById("audio");
function play(){
    audio.play();
    
}
// const botones=document.getElementsByTagName("button");
// var count=0
// botones.forEach(function(boton){
//     boton.addEventListener(onclick,function(){
//         play();
//     })
// });

// botones.addEventListener(onclick)




//

botonNumeros.forEach(function(boton){
    boton.addEventListener("click",function(){
        agregarNumero(boton.innerText);
    })
});
botonOperadores.forEach(function(boton){
    boton.addEventListener("click",function(){
        selecOperacion(boton.innerText);
    })
})
botonIgual.addEventListener("click",function(){
    calcular();
    actualizarDisplay();
});
botonDelete.addEventListener('click',function(){
    clear();
    actualizarDisplay();
});
function selecOperacion(op){
    if(opeActual==="") return;
    if(opeAnterior!==""){
        calcular()
    }
    operacion=op.toString();
    opeAnterior=opeActual;
    opeActual="";
}
function calcular(){
    var calculo;
    const anterior=parseFloat(opeAnterior);
    const actual=parseFloat(opeActual);
    if(isNaN(anterior)||isNaN(actual)) return;
    switch(operacion){
        case "+":
            calculo=anterior+actual;
            break;
        case"-":
            calculo=anterior-actual;
            break;
        case"/":
            calculo=anterior/actual;
            break;
        case"x":
            calculo=anterior*actual;
            break;
        default:
            return;
    }
    opeActual=calculo;
    operacion=undefined;
    opeAnterior=""

}

function agregarNumero(num){
    opeActual=opeActual.toString()+num.toString();
    actualizarDisplay();
} 

function clear(){
    opeActual='';
    opeAnterior='';
    operacion=undefined;
}
function actualizarDisplay(){
    result.value=opeActual;
}
clear();

