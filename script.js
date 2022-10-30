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


let horasEstudandoAtualizado 
let minutosEstudandoAtualizado 
let segundosEstudandoAtualizado 

function atualizacaoDeValoresEstudando () {
  trocaDeBotoes(botaoComecarEstudando, botaoPararEstudando, botaoComecarDescansando, botaoPararDescansando)
  clearInterval(intervalo)

  horasEstudandoAtualizado = Number(document.querySelector('#horas-estudando').value)
  minutosEstudandoAtualizado = Number(document.querySelector('#minutos-estudando').value)
  segundosEstudandoAtualizado = Number(document.querySelector('#segundos-estudando').value)

  cronometro(inputHorasEstudando, inputMinutosEstudando, inputSegundosEstudando)
}


let horasDescansandoAtualizado 
let minutosDescansandoAtualizado 
let segundosDescansandoAtualizado 

function atualizacaoDeValoresDescansando () {
  trocaDeBotoes(botaoComecarDescansando, botaoPararDescansando, botaoComecarEstudando, botaoPararEstudando)
  clearInterval(intervalo)

  horasDescansandoAtualizado = Number(document.querySelector('#horas-descansando').value)
  minutosDescansandoAtualizado = Number(document.querySelector('#minutos-descansando').value)
  segundosDescansandoAtualizado = Number(document.querySelector('#segundos-descansando').value)

  cronometro(inputHorasDescansando, inputMinutosDescansando, inputSegundosDescansando)
}

// Botões que ativam o cronômetro
const botaoComecarEstudando = document.querySelector('#comecar-estudando')
botaoComecarEstudando.addEventListener('click', () => atualizacaoDeValoresEstudando())


const botaoComecarDescansando = document.querySelector('#comecar-descansando')
botaoComecarDescansando.addEventListener('click', () => atualizacaoDeValoresDescansando())


function cronometro (inputHoras, inputMinutos, inputSegundos) {
  intervalo = setInterval(() => decremento(inputHoras, inputMinutos, inputSegundos), 1000)
}


// Função de decremento do cronômetro
function decremento (inputHoras, inputMinutos, inputSegundos) {
  if (inputSegundos.id == 'segundos-estudando') {

    if (horasEstudandoAtualizado == 0 && minutosEstudandoAtualizado == 0 && segundosEstudandoAtualizado <= 0) {
    clearInterval(intervalo)
    return
  } else if (segundosEstudandoAtualizado == 0) {
    minutosEstudandoAtualizado--
    segundosEstudandoAtualizado = 60
  }

  segundosEstudandoAtualizado--

  if (minutosEstudandoAtualizado < 0) {
    horasEstudandoAtualizado--
    minutosEstudandoAtualizado = 59
  }

  if (segundosEstudandoAtualizado < 10) {
    inputSegundos.value = `0${segundosEstudandoAtualizado}`
  } else {
    inputSegundos.value = segundosEstudandoAtualizado
  }

  if (minutosEstudandoAtualizado < 10) {
    inputMinutos.value = `0${minutosEstudandoAtualizado}`
  } else {
    inputMinutos.value = minutosEstudandoAtualizado
  }

  if (horasEstudandoAtualizado < 10) {
    inputHoras.value = `0${horasEstudandoAtualizado}`
  } else {
    inputHoras.value = horasEstudandoAtualizado
  }
  }



  if (inputSegundos.id == 'segundos-descansando') {

    if (horasDescansandoAtualizado == 0 && minutosDescansandoAtualizado == 0 && segundosDescansandoAtualizado <= 0) {
    clearInterval(intervalo)
    return
  } else if (segundosDescansandoAtualizado == 0) {
    minutosDescansandoAtualizado--
    segundosDescansandoAtualizado = 60
  }

  segundosDescansandoAtualizado--

  if (minutosDescansandoAtualizado < 0) {
    horasDescansandoAtualizado--
    minutosDescansandoAtualizado = 59
  }


  if (segundosDescansandoAtualizado < 10) {
    inputSegundos.value = `0${segundosDescansandoAtualizado}`
  } else {
    inputSegundos.value = segundosDescansandoAtualizado
  }

  if (minutosDescansandoAtualizado < 10) {
    inputMinutos.value = `0${minutosDescansandoAtualizado}`
  } else {
    inputMinutos.value = minutosEstudandoAtualizado
  }

  if (horasDescansandoAtualizado < 10) {
    inputHoras.value = `0${horasDescansandoAtualizado}`
  } else {
    inputHoras.value = horasDescansandoAtualizado
  }
  }
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