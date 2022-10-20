// Valores dos Inputs
let horas = 0
let minutos = 0
let segundos = 0

document.querySelector('#horas-descansando').value = `0${horas}`
document.querySelector('#minutos-descansando').value = `0${minutos}`
document.querySelector('#segundos-descansando').value = `0${segundos}`

// Intervalo do cronômetro
let intervalo

// Inputs
let inputHorasEstudando = document.querySelector('#horas-estudando')
let inputMinutosEstudando = document.querySelector('#minutos-estudando')
let inputSegundosEstudando = document.querySelector('#segundos-estudando')

inputHorasEstudando.addEventListener('focusout', () => verificarValorH(inputHorasEstudando))
inputMinutosEstudando.addEventListener('focusout', () => verificarValorMS(inputMinutosEstudando))
inputSegundosEstudando.addEventListener('focusout', () => verificarValorMS(inputSegundosEstudando))

// Verificações de valores

// minutos e segundos
function verificarValorMS (input) {
  let valor = Number(input.value)
  let length = input.value.length

  if (valor < 0 || valor > 59) {
    alert('Digite valores entre 00 e 59')
    input.value = '00'
  }

  if (valor < 10 && length < 2) {
    input.value = `0${input.value}`
  }
}

// horas
function verificarValorH (input) {
  let valor = Number(input.value)
  let length = input.value.length

  if (valor < 10 && length < 2) {
    input.value = `0${input.value}`
  }
}

// Botão que ativa o cronômetro
const btnComecarEstudando = document.querySelector('#comecar-estudando')
btnComecarEstudando.addEventListener('click', cronometro)

function cronometro () {
  intervalo = setInterval(decremento, 1000)
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