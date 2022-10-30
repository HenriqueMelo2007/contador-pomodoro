// Intervalo do cronômetro
let intervalo

// Alarme do cronômetro
let alarme = document.querySelector('#alarme')

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


let horasEstudando
let minutosEstudando
let segundosEstudando

function atualizacaoDeValoresEstudando () {
  trocaDeBotoes(botaoComecarEstudando, botaoPararEstudando, botaoComecarDescansando, botaoPararDescansando)
  clearInterval(intervalo)

  horasEstudando = Number(document.querySelector('#horas-estudando').value)
  minutosEstudando = Number(document.querySelector('#minutos-estudando').value)
  segundosEstudando = Number(document.querySelector('#segundos-estudando').value)

  cronometro(inputHorasEstudando, inputMinutosEstudando, inputSegundosEstudando)
}

let horasDescansando 
let minutosDescansando 
let segundosDescansando

function atualizacaoDeValoresDescansando () {
  trocaDeBotoes(botaoComecarDescansando, botaoPararDescansando, botaoComecarEstudando, botaoPararEstudando)
  clearInterval(intervalo)

  horasDescansando = Number(document.querySelector('#horas-descansando').value)
  minutosDescansando = Number(document.querySelector('#minutos-descansando').value)
  segundosDescansando = Number(document.querySelector('#segundos-descansando').value)

  cronometro(inputHorasDescansando, inputMinutosDescansando, inputSegundosDescansando)
}

// Botões que ativam o cronômetro
const botaoComecarEstudando = document.querySelector('#comecar-estudando')
botaoComecarEstudando.addEventListener('click', () => atualizacaoDeValoresEstudando())

const botaoComecarDescansando = document.querySelector('#comecar-descansando')
botaoComecarDescansando.addEventListener('click', () => atualizacaoDeValoresDescansando())

// Função cronômetro
function cronometro (inputHoras, inputMinutos, inputSegundos) {
  intervalo = setInterval(() => decremento(inputHoras, inputMinutos, inputSegundos), 1000)
}


// Função de decremento do cronômetro
function decremento (inputHoras, inputMinutos, inputSegundos) {
  if (inputSegundos.id == 'segundos-estudando') {

    if (horasEstudando == 0 && minutosEstudando == 0 && segundosEstudando <= 0) {
    clearInterval(intervalo)
    alarme.play()
    alert('Seu tempo estudando terminou! Pode ir descansar.')
    return
  } else if (segundosEstudando == 0) {
    minutosEstudando--
    segundosEstudando = 60
  }

  segundosEstudando--

  if (minutosEstudando < 0) {
    horasEstudando--
    minutosEstudando = 59
  }

  if (segundosEstudando < 10) {
    inputSegundos.value = `0${segundosEstudando}`
  } else {
    inputSegundos.value = segundosEstudando
  }

  if (minutosEstudando < 10) {
    inputMinutos.value = `0${minutosEstudando}`
  } else {
    inputMinutos.value = minutosEstudando
  }

  if (horasEstudando < 10) {
    inputHoras.value = `0${horasEstudando}`
  } else {
    inputHoras.value = horasEstudando
  }
  }



  if (inputSegundos.id == 'segundos-descansando') {

    if (horasDescansando == 0 && minutosDescansando == 0 && segundosDescansando <= 0) {
    clearInterval(intervalo)
    alarme.play()
    alert('Seu descanso chegou ao fim! Volte a estudar.')
    return
  } else if (segundosDescansando == 0) {
    minutosDescansando--
    segundosDescansando = 60
  }

  segundosDescansando--

  if (minutosDescansando < 0) {
    horasDescansando--
    minutosDescansando = 59
  }


  if (segundosDescansando < 10) {
    inputSegundos.value = `0${segundosDescansando}`
  } else {
    inputSegundos.value = segundosDescansando
  }

  if (minutosDescansando < 10) {
    inputMinutos.value = `0${minutosDescansando}`
  } else {
    inputMinutos.value = minutosEstudando
  }

  if (horasDescansando < 10) {
    inputHoras.value = `0${horasDescansando}`
  } else {
    inputHoras.value = horasDescansando
  }
  }
}

// Função que troca os botões
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

// Botões que zeram o cronômetro
function zerar (span) {
  if (span.id == 'zerar-estudando') {
    clearInterval(intervalo)
    inputHorasEstudando.value = '00'
    inputMinutosEstudando.value = '00'
    inputSegundosEstudando.value = '00'
  } else if (span.id == 'zerar-descansando') {
    clearInterval(intervalo)
    inputHorasDescansando.value = '00'
    inputMinutosDescansando.value = '00'
    inputSegundosDescansando.value = '00'
  }
}

let spans = document.querySelectorAll('span')
for (let span of spans) {
  span.addEventListener('click', () => zerar(span))
}