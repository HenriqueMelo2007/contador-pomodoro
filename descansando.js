// Valores dos Inputs
let horasD = 0
let minutosD = 5
let segundosD = 0

document.querySelector('#horas-descansando').value = `0${horasD}`
document.querySelector('#minutos-descansando').value = `0${minutosD}`
document.querySelector('#segundos-descansando').value = `0${segundosD}`

// Intervalo do cronômetro
let intervaloD

// Inputs
let inputHorasDescansando = document.querySelector('#horas-descansando')
let inputMinutosDescansando = document.querySelector('#minutos-descansando')
let inputSegundosDescansando = document.querySelector('#segundos-descansando')

inputHorasDescansando.addEventListener('focusout', () => verificarValorHD(inputHorasDescansando))
inputMinutosDescansando.addEventListener('focusout', () => verificarValorMSD(inputMinutosDescansando))
inputSegundosDescansando.addEventListener('focusout', () => verificarValorMSD(inputSegundosDescansando))

// Verificações de valores

// minutos e segundos
function verificarValorMSD (input) {
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
function verificarValorHD (input) {
  let valor = Number(input.value)
  let length = input.value.length

  if (valor < 10 && length == 1) {
    input.value = `0${input.value}`
  } else if (valor < 10 && length == 0) {
    input.value = '00'
  }
}

// Botão que ativa o cronômetro
const btnComecarDescansando = document.querySelector('#comecar-descansando')
btnComecarDescansando.addEventListener('click', cronometroD)

const btnPararDescansando = document.querySelector('#parar-descansando')
btnPararDescansando.addEventListener('click', pararCronometroD)

function pararCronometroD () {
  btnPararDescansando.classList.toggle('display-none')
  btnComecarDescansando.classList.toggle('display-none')
  clearInterval(intervaloD)
}

function cronometroD () {
  btnComecarDescansando.classList.toggle('display-none')
  btnPararDescansando.classList.toggle('display-none')
  intervaloD = setInterval(decrementoD, 1000)
}

// Função de decremento do cronômetro
function decrementoD () {
  let horasDescansando = document.querySelector('#horas-descansando').value
  let minutosDescansando = document.querySelector('#minutos-descansando').value
  let segundosDescansando = document.querySelector('#segundos-descansando').value

  let horasDescansandoNumero = Number(horasDescansando)
  let minutosDescansandoNumero = Number(minutosDescansando)
  let segundosDescansandoNumero = Number(segundosDescansando)

  document.querySelector('#segundos-descansando').value = segundosDescansandoNumero
  document.querySelector('#minutos-descansando').value = minutosDescansandoNumero
  document.querySelector('#horas-descansando').value = horasDescansandoNumero


  if (horasDescansandoNumero == 0 && minutosDescansandoNumero == 0 && segundosDescansandoNumero <= 0) {
    clearInterval(intervaloD)
    return
  } else if (segundosDescansandoNumero == 0) {
    minutosDescansandoNumero--
    segundosDescansandoNumero = 60
  }

  segundosDescansandoNumero--

  if (minutosDescansandoNumero < 0) {
    horasDescansandoNumero--
    minutosDescansandoNumero = 59
  }


  if (segundosDescansandoNumero < 10) {
    document.querySelector('#segundos-descansando').value = `0${segundosDescansandoNumero}`
  } else {
    document.querySelector('#segundos-descansando').value = segundosDescansandoNumero
  }

  if (minutosDescansandoNumero < 10) {
    document.querySelector('#minutos-descansando').value = `0${minutosDescansandoNumero}`
  } else {
    document.querySelector('#minutos-descansando').value = minutosDescansandoNumero
  }

  if (horasDescansandoNumero < 10) {
    document.querySelector('#horas-descansando').value = `0${horasDescansandoNumero}`
  } else {
    document.querySelector('#horas-descansando').value = horasDescansandoNumero
  } 
}