const celsiusInput = document.querySelector('#Celsius')
const fahrenheitInput = document.querySelector('#Fahrenheit')
const temperatures = document.querySelectorAll('input[type=number]')
const converterForm = document.querySelector('form')

const degreeC = 0

temperatures.forEach(temperatureInput => {
  temperatureInput.addEventListener('keydown', validInput)
})

converterForm.addEventListener('input', (event) => {
  const { id } = event.target
  if (id === 'Celsius') {
    fahrenheitInput.value = (celsiusInput.value * 1.8 + 32).toFixed(2)
  }
  if (id === 'Fahrenheit') {
    celsiusInput.value = ((fahrenheitInput.value - 32) / 1.8).toFixed(2)
  }
})

function validInput (event) {
  const { keyCode } = event
  // backspace, negative sign, digit
  const specialKeyCode = [8, 173, 190]
  if (specialKeyCode.indexOf(keyCode) !== -1) return
  if (keyCode >= 48 && keyCode <= 57) return
  if (keyCode >= 96 && keyCode <= 105) return
  return event.preventDefault()
}
