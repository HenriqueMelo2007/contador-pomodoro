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

// Botões que ativam o cronômetro
const botaoComecarEstudando = document.querySelector('#comecar-estudando')
botaoComecarEstudando.addEventListener('click', () => cronometro(botaoComecarEstudando, botaoPararEstudando, botaoComecarDescansando, botaoPararDescansando))

//

const botaoComecarDescansando = document.querySelector('#comecar-descansando')
botaoComecarDescansando.addEventListener('click', () => cronometro(botaoComecarDescansando, botaoPararDescansando, botaoComecarEstudando, botaoPararEstudando))




// Botões que param o cronômetro
const botaoPararEstudando = document.querySelector('#parar-estudando')
botaoPararEstudando.addEventListener('click', pararCronometro)

//

const botaoPararDescansando = document.querySelector('#parar-descansando')
botaoPararDescansando.addEventListener('click', pararCronometro)





function cronometro (botaoPrincipalComecar, botaoPrincipalParar, botaoSecundarioComecar, botaoSecundarioParar) {
  botaoPrincipalComecar.classList.toggle('display-none')
  botaoPrincipalParar.classList.toggle('display-none')

  botaoSecundarioComecar.classList.remove('display-none')
  botaoSecundarioParar.classList.add('display-none')
}

function pararCronometro () {
  btnComecarEstudando.classList.toggle('display-none')
  btnPararEstudando.classList.toggle('display-none')
  clearInterval(intervalo)
}

// Função de decremento do cronômetro
function decremento () {
  let horasEstudando = document.querySelector('#horas-estudando').value
  let minutosEstudando = document.querySelector('#minutos-estudando').value
  let segundosEstudando = document.querySelector('#segundos-estudando').value

  let horasEstudandoNumero = Number(horasEstudando)
  let minutosEstudandoNumero = Number(minutosEstudando)
  let segundosEstudandoNumero = Number(segundosEstudando)

  document.querySelector('#segundos-estudando').value = segundosEstudandoNumero
  document.querySelector('#minutos-estudando').value = minutosEstudandoNumero
  document.querySelector('#horas-estudando').value = horasEstudandoNumero


  if (horasEstudandoNumero == 0 && minutosEstudandoNumero == 0 && segundosEstudandoNumero <= 0) {
    clearInterval(intervalo)
    return
  } else if (segundosEstudandoNumero == 0) {
    minutosEstudandoNumero--
    segundosEstudandoNumero = 60
  }

  segundosEstudandoNumero--

  if (minutosEstudandoNumero < 0) {
    horasEstudandoNumero--
    minutosEstudandoNumero = 59
  }


  if (segundosEstudandoNumero < 10) {
    document.querySelector('#segundos-estudando').value = `0${segundosEstudandoNumero}`
  } else {
    document.querySelector('#segundos-estudando').value = segundosEstudandoNumero
  }

  if (minutosEstudandoNumero < 10) {
    document.querySelector('#minutos-estudando').value = `0${minutosEstudandoNumero}`
  } else {
    document.querySelector('#minutos-estudando').value = minutosEstudandoNumero
  }

  if (horasEstudandoNumero < 10) {
    document.querySelector('#horas-estudando').value = `0${horasEstudandoNumero}`
  } else {
    document.querySelector('#horas-estudando').value = horasEstudandoNumero
  } 
}