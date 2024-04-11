export function notNumber(value) {
  return isNaN (value) || value == ""
}

//lógica do imc
export function calculeteIMC (weight, height) {
  return (weight / ((height / 100 )** 2)).toFixed(2)
}