const temperatures = document.querySelectorAll('input[type=number]')
const converterForm = document.querySelector('form')

const temperatureElements = {}

temperatures.forEach(temperatureInput => {
  temperatureElements[temperatureInput.id] = temperatureInput
  temperatureInput.addEventListener('keydown', validInput)
})

const convertFunctions = {
  Celsius () {
    temperatureElements.Fahrenheit.value = (temperatureElements.Celsius.value * 1.8 + 32).toFixed(2)
  },
  Fahrenheit () {
    temperatureElements.Celsius.value = ((temperatureElements.Fahrenheit.value - 32) / 1.8).toFixed(2)
  }
}

converterForm.addEventListener('input', (event) => {
  const { id } = event.target
  convertFunctions[id]()
})

function validInput (event) {
  const { keyCode } = event
  // backspace, left & right, negative sign, digit
  const specialKeyCode = [8, 37, 39, 173, 190]
  if (specialKeyCode.indexOf(keyCode) !== -1) return
  if (keyCode >= 48 && keyCode <= 57) return
  if (keyCode >= 96 && keyCode <= 105) return
  return event.preventDefault()
}
