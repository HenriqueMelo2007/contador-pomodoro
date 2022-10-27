// Intervalo do cronômetro
let intervalo

// Inputs
let inputHorasEstudando = document.querySelector('#horas-estudando')
let inputMinutosEstudando = document.querySelector('#minutos-estudando')
let inputSegundosEstudando = document.querySelector('#segundos-estudando')


inputHorasEstudando.addEventListener('focusout', () => verificarValorH(inputHorasEstudando))
inputMinutosEstudando.addEventListener('focusout', () => verificarValorMS(inputMinutosEstudando))
inputSegundosEstudando.addEventListener('focusout', () => verificarValorMS(inputSegundosEstudando))

//

let inputHorasDescansando = document.querySelector('#horas-descansando')
let inputMinutosDescansando = document.querySelector('#minutos-descansando')
let inputSegundosDescansando = document.querySelector('#segundos-descansando')

inputHorasDescansando.addEventListener('focusout', () => verificarValorH(inputHorasDescansando))
inputMinutosDescansando.addEventListener('focusout', () => verificarValorMS(inputMinutosDescansando))
inputSegundosDescansando.addEventListener('focusout', () => verificarValorMS(inputSegundosDescansando))

// Valor dos inputs
let valorInputHorasEstudando
let valorInputMinutosEstudando
let valorInputSegundosEstudando

let valorInputHorasDescansando = document.querySelector('#horas-descansando').value
let valorInputMinutosDescansando = document.querySelector('#minutos-descansando').value
let valorInputSegundosDescansando = document.querySelector('#segundos-descansando').value

// Verificações de valores
// minutos e segundos
function verificarValorMS (input) {
  let valor = Number(input.value)
  let length = input.value.length

  if (valor < 0 || valor > 59) {
    alert('Digite valores entre 00 e 59')
    input.value = '00'
  }

  if (valor < 10 && length == 1) {
    input.value = `0${input.value}`
  } else if (valor < 10 && length == 0) {
    input.value = '00'
  }
}

// horas
function verificarValorH (input) {
  let valor = Number(input.value)
  let length = input.value.length

  if (valor < 10 && length == 1) {
    input.value = `0${input.value}`
  } else if (valor < 10 && length == 0) {
    input.value = '00'
  }
}


let valorInputHorasEstudandoAtualizado 
let valorInputMinutosEstudandoAtualizado 
let valorInputSegundosEstudandoAtualizado 

function atualizacaoDeValorInputsEstudando () {
  valorInputHorasEstudando = Number(document.querySelector('#horas-estudando').value)
  valorInputMinutosEstudando = Number(document.querySelector('#minutos-estudando').value)
  valorInputSegundosEstudando = Number(document.querySelector('#segundos-estudando').value)

  


  valorInputHorasEstudandoAtualizado = valorInputHorasEstudando
  valorInputMinutosEstudandoAtualizado = valorInputMinutosEstudando
  valorInputSegundosEstudandoAtualizado = valorInputSegundosEstudando
}




let valorInputHorasDescansandoAtualizado 
let valorInputMinutosDescansandoAtualizado 
let valorInputSegundosDescansandoAtualizado 

function atualizacaoDeValorInputsDescansando () {
  valorInputHorasDescansando = Number(document.querySelector('#horas-descansando').value)
  valorInputMinutosDescansando = Number(document.querySelector('#minutos-descansando').value)
  valorInputSegundosDescansando = Number(document.querySelector('#segundos-descansando').value)

  

  valorInputHorasDescansandoAtualizado = valorInputHorasDescansando
  valorInputMinutosDescansandoAtualizado = valorInputMinutosDescansando
  valorInputSegundosDescansandoAtualizado = valorInputSegundosDescansando
  
}




// Botões que ativam o cronômetro
const botaoComecarEstudando = document.querySelector('#comecar-estudando')
botaoComecarEstudando.addEventListener('click', () => atualizacaoDeValorInputsEstudando())
botaoComecarEstudando.addEventListener('click', () => trocaDeBotoes(botaoComecarEstudando, botaoPararEstudando, botaoComecarDescansando, botaoPararDescansando))


botaoComecarEstudando.addEventListener('click', () => cronometro(valorInputHorasEstudandoAtualizado, valorInputMinutosEstudandoAtualizado, valorInputSegundosEstudandoAtualizado, inputHorasEstudando, inputMinutosEstudando, inputSegundosEstudando))




const botaoComecarDescansando = document.querySelector('#comecar-descansando')
botaoComecarDescansando.addEventListener('click', () => atualizacaoDeValorInputsDescansando())
botaoComecarDescansando.addEventListener('click', () => trocaDeBotoes(botaoComecarDescansando, botaoPararDescansando, botaoComecarEstudando, botaoPararEstudando))



botaoComecarDescansando.addEventListener('click', () => cronometro(valorInputHorasDescansandoAtualizado, valorInputMinutosDescansandoAtualizado, valorInputSegundosDescansandoAtualizado, inputHorasDescansando, inputMinutosDescansando, inputSegundosDescansando))







function cronometro (valorInputHoras, valorInputMinutos, valorInputSegundos, inputHoras, inputMinutos, inputSegundos) {
  let horas = valorInputHoras
  let minutos = valorInputMinutos
  let segundos = valorInputSegundos

  intervalo = setInterval(() => decremento(horas, minutos, segundos, inputHoras, inputMinutos, inputSegundos), 1000)
}


// Função de decremento do cronômetro
function decremento (horas, minutos, segundos, inputHoras, inputMinutos, inputSegundos) {

  


  /*if (horasN == 0 && minutosN == 0 && segundosN <= 0) {
    clearInterval(intervalo)
    return
  } else if (segundosN < 0) {
    minutosN--
    segundosN = 59
  }

  segundosN--

  

  if (minutosN < 0) {
    horasN--
    minutosN = 59
  }


  if (segundosN < 10) {
    inputSegundos.value = `0${segundosN}`
  } else {
    inputSegundos.value = segundosN
  }

  if (minutosN < 10) {
    inputMinutos.value = `0${minutosN}`
  } else {
    inputMinutos.value = minutosN
  }

  if (horasN < 10) {
    inputHoras.value = `0${horasN}`
  } else {
    inputHoras.value = horasN
  } */
}



function trocaDeBotoes (botaoPrincipalComecar, botaoPrincipalParar, botaoSecundarioComecar, botaoSecundarioParar) {
  botaoPrincipalComecar.classList.toggle('display-none')
  botaoPrincipalParar.classList.toggle('display-none')

  botaoSecundarioComecar.classList.remove('display-none')
  botaoSecundarioParar.classList.add('display-none')
}



// Botões que param o cronômetro
const botaoPararEstudando = document.querySelector('#parar-estudando')
botaoPararEstudando.addEventListener('click', () => pararCronometro(botaoPararEstudando, botaoComecarEstudando))


const botaoPararDescansando = document.querySelector('#parar-descansando')
botaoPararDescansando.addEventListener('click', () => pararCronometro(botaoPararDescansando, botaoComecarDescansando))


function pararCronometro (botaoParar, botaoComecar) {
  botaoParar.classList.toggle('display-none')
  botaoComecar.classList.toggle('display-none')

  clearInterval(intervalo)
}