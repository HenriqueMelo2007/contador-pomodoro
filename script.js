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

function atualizacaoDeValorInputsEstudando () {
  horasEstudandoAtualizado = Number(document.querySelector('#horas-estudando').value)
  minutosEstudandoAtualizado = Number(document.querySelector('#minutos-estudando').value)
  segundosEstudandoAtualizado = Number(document.querySelector('#segundos-estudando').value)

  cronometro(inputHorasEstudando, inputMinutosEstudando, inputSegundosEstudando)
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







const botaoComecarDescansando = document.querySelector('#comecar-descansando')
botaoComecarDescansando.addEventListener('click', () => atualizacaoDeValorInputsDescansando())
botaoComecarDescansando.addEventListener('click', () => trocaDeBotoes(botaoComecarDescansando, botaoPararDescansando, botaoComecarEstudando, botaoPararEstudando))



botaoComecarDescansando.addEventListener('click', () => cronometro(valorInputHorasDescansandoAtualizado, valorInputMinutosDescansandoAtualizado, valorInputSegundosDescansandoAtualizado, inputHorasDescansando, inputMinutosDescansando, inputSegundosDescansando))







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

  


  /*if (horas == 0 && minutos == 0 && segundos <= 0) {
    clearInterval(intervalo)
    return
  } else if (segundos < 0) {
    minutos--
    segundos = 59
  }

  segundos--

  

  if (minutos < 0) {
    horas--
    minutos = 59
  }


  if (segundos < 10) {
    inputSegundos.value = `0${segundos}`
  } else {
    inputSegundos.value = segundos
  }

  if (minutos < 10) {
    inputMinutos.value = `0${minutos}`
  } else {
    inputMinutos.value = minutos
  }

  if (horas < 10) {
    inputHoras.value = `0${horas}`
  } else {
    inputHoras.value = horas
  }*/
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