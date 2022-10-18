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
function verificarValorMS (input) {
  let valor = Number(input.value)
  if (valor < 0 || valor > 59) {
    alert('Digite valores entre 00 e 59')
    input.value = '00'
  }

  if (valor < 10) {
    input.value = `0${input.value}`
  }
}

function verificarValorH (input) {
  let valor = Number(input.value)

  if (valor < 10) {
    input.value = `0${input.value}`
  }
}


















const btnComecarEstudando = document.querySelector('#comecar-estudando')
btnComecarEstudando.addEventListener('click', cronometro)

function cronometro () {
  intervalo = setInterval(decremento, 1000)
}





function decremento () {
  let horasEstudando = document.querySelector('#horas-estudando').value
  let minutosEstudando = document.querySelector('#minutos-estudando').value
  let segundosEstudando = document.querySelector('#segundos-estudando').value

  if (segundosEstudando == '00') {
    clearInterval(intervalo)
    return
  }

  let horasEstudandoNumero = Number(horasEstudando)
  let minutosEstudandoNumero = Number(minutosEstudando)
  let segundosEstudandoNumero = Number(segundosEstudando)

  


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

  document.querySelector('#segundos-estudando').value = segundosEstudandoNumero
  document.querySelector('#minutos-estudando').value = minutosEstudandoNumero
  document.querySelector('#horas-estudando').value = horasEstudandoNumero
  


  


  




}