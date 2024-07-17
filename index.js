'use strict'

const display = document.getElementById('display')

function displayFunction(input) {
  display.value += input
}

function clearFunction() {
  display.value = ''
}

function calculateFunction() {
  !display.value ? (display.value = '') : (display.value = eval(display.value))
}
