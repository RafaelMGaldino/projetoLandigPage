var setaDireita = window.document.getElementById(setaD)
var leonardo = window.document.getElementById(leo)
var bruni = window.document.getElementById(bruna)
var samanthy = window.document.getElementById(samantha)
var setaEsquerda = window.document.getElementById(setaE)

function RolarParaDireita(){
    leo.style = 'display: none'
    bruna.style = 'display: flex'
   setaD.style = 'display: none'
   setaE.style = 'display: flex; margin-top: 60px'
}

function RolarParaEsquerda(){

    leo.style = 'display: flex'
    bruna.style= 'display: none'
    setaD.style = 'display: flex; margin-top: 60px'
    setaE.style = 'display: none'
}
