var ball01 = window.document.querySelector('#bola01')
var ball02 = window.document.querySelector('#bola02')
var ball03 = window.document.querySelector('#bola03')
var ball04 = window.document.querySelector('#bola04')
var ball05 = window.document.querySelector('#bola05')
var ball06 = window.document.querySelector('#bola06')

function play(){
    var soma = []
    while (soma.length < 8){
        soma.push(Math.floor(Math.random() * 61));
    }
    var ordena = soma
    ordena.sort((a,b)=> a-b)
    var remove = [...new Set(ordena)]
    var stringSemColchetes = remove.join(' - ');
    ball01.innerText = remove[0] + 1
    ball02.innerText = remove[1] + 1
    ball03.innerText = remove[2] + 1
    ball04.innerText = remove[3] + 1
    ball05.innerText = remove[4] + 1
    ball06.innerText = remove[5] + 1
}

console.log(stringSemColchetes)