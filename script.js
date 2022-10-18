// Intervalo do cronômetro
let intervalo

// Inputs
let inputMinutosEstudando = document.querySelector('#minutos-estudando')
let inputSegundosEstudando = document.querySelector('#segundos-estudando')

inputMinutosEstudando.addEventListener('focusout', () => verificarValorMS(inputMinutosEstudando))
inputSegundosEstudando.addEventListener('focusout', () => verificarValorMS(inputSegundosEstudando))

function verificarValorMS (input) {
  let valor = Number(input.value)
  if (valor < 0 || valor > 59) {
    alert('Digite valores entre 00 e 59')
    input.value = `0${segundosEstudando}`
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

  let horasEstudandoNumero = Number(horasEstudando)
  let minutosEstudandoNumero = Number(minutosEstudando)
  let segundosEstudandoNumero = Number(segundosEstudando)



}