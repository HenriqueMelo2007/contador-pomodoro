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
let valorInputHorasEstudando = document.querySelector('#horas-estudando').value
let valorInputMinutosEstudando = document.querySelector('#minutos-estudando').value
let valorInputSegundosEstudando = document.querySelector('#segundos-estudando').value

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

// Botões que ativam o cronômetro
const botaoComecarEstudando = document.querySelector('#comecar-estudando')
botaoComecarEstudando.addEventListener('click', () => cronometro(botaoComecarEstudando, botaoPararEstudando, botaoComecarDescansando, botaoPararDescansando, valorInputHorasEstudando, valorInputMinutosEstudando, valorInputSegundosEstudando, inputHorasEstudando, inputMinutosEstudando, inputSegundosEstudando))


const botaoComecarDescansando = document.querySelector('#comecar-descansando')
botaoComecarDescansando.addEventListener('click', () => cronometro(botaoComecarDescansando, botaoPararDescansando, botaoComecarEstudando, botaoPararEstudando, valorInputHorasDescansando, valorInputMinutosDescansando, valorInputSegundosDescansando, inputHorasDescansando, inputMinutosDescansando, inputSegundosDescansando))


// Botões que param o cronômetro
const botaoPararEstudando = document.querySelector('#parar-estudando')
botaoPararEstudando.addEventListener('click', () => pararCronometro(botaoPararEstudando, botaoComecarEstudando))


const botaoPararDescansando = document.querySelector('#parar-descansando')
botaoPararDescansando.addEventListener('click', () => pararCronometro(botaoPararDescansando, botaoComecarDescansando))




function cronometro (botaoPrincipalComecar, botaoPrincipalParar, botaoSecundarioComecar, botaoSecundarioParar, valorInputHoras, valorInputMinutos, valorInputSegundos, inputHoras, inputMinutos, inputSegundos) {

  botaoPrincipalComecar.classList.toggle('display-none')
  botaoPrincipalParar.classList.toggle('display-none')

  botaoSecundarioComecar.classList.remove('display-none')
  botaoSecundarioParar.classList.add('display-none')

  let horas = valorInputHoras
  let minutos = valorInputMinutos
  let segundos = valorInputSegundos

  intervalo = setInterval(() => decremento(horas, minutos, segundos, inputHoras, inputMinutos, inputSegundos), 1000)
}


// Função de decremento do cronômetro
function decremento (horas, minutos, segundos, inputHoras, inputMinutos, inputSegundos) {

  console.log('isso')

  let horasN = Number(horas)
  let minutosN = Number(minutos)
  let segundosN = Number(segundos)


  if (horasN == 0 && minutosN == 0 && segundosN <= 0) {
    clearInterval(intervalo)
    return
  } else if (segundosN == 0) {
    minutosN--
    segundosN = 60
  }

  segundosN--
  console.log(segundosN)

  

  if (minutosN == 0) {
    horasN--
    minutosN = 60
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
  } 
}





function pararCronometro (botaoParar, botaoComecar) {
  botaoParar.classList.toggle('display-none')
  botaoComecar.classList.toggle('display-none')

  clearInterval(intervalo)
}