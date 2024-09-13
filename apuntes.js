// tipos de datos primitivos
const nombre = 'Juan'; // string
const edad = 25; // number
const esMayorDeEdad = true; // boolean

// cuando una variable está vacia, su valor es undefined
const vacio = undefined; // undefined 

// funcion tradicional que almacena el resultado en una variable y luego retorna esa variable
function suma(num1, num2) {
  const resultado = num1 + num2
  return resultado
}

// funcion tradicional que retorna el resultado de la operacion sin almacenarlo en una variable
function suma2(num1, num2) {
  return num1 + num2
}

// funcion de flecha
const sumaFlecha = (num1, num2) => {
  return num1 + num2
}

// funcion de flecha que omite el return
const sumaFlecha2 = (num1, num2) => num1 + num2



// funcion que devuelve un valor
const resta = (num1, num2) => {
  return num1 - num2
}


// funcion que muestra el resultado en consola y no lo devuelve
const resta2 = (num1, num2) => {
  const resultado = num1 - num2
  console.log(resultado)
}


// objeto
// un objeto es una estructura de datos que puede contener variables y funciones
const animal = {
  nombre: 'Cachupin', // string
  edad: 3, // number
  esDomestico: true, // boolean
  hacerRuido: () => {
    return 'Guau!'
  }
}



