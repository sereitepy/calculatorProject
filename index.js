'use strict'

const display = document.getElementById('display')

function displayFunction(input) {
  display.value += input
}

function clearFunction() {
  display.value = ''
}

function calculateFunction() {
  try {
    display.value = eval(display.value)
  } catch (error) {
    display.value = 'Error'
  }
}
