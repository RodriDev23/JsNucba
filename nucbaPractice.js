const ImparOImpar = (num) => {
  if (num % 2 === 0) {
    console.log(`El ${num} es par`)
  } else {
    console.log('El ${num} no es par')
  }

}

// checkea si el numero es par o Impar 


const mayorOMenor = (a, b) => {
  if (a > b) {
    console.log(`${a} es mayor a ${b}`)

  } else if (b > a) {
    console.log(`${b} es mayor a ${a}`)
  } else {
    console.log(`${a} y ${b} son iguales`)
  }

}

// es mayor o menos o iguales

const multiploDeCinco = (numero) => {
  if (numero % 5 === 0) {
    console.log(`${numero} es multiplo de 5`)
  } else {
    console.log(`${numero} no es multiplo de 5`)
  }
}

// checkea si es multiploDeCinco



const forFive = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(i)
  }

}
// Hace un loop hasta llegar al numero


const showNumber = (palabra, numero) => {
  for (let i = 0; i < numero; i++) {
    console.log(palabra)
  }
}


const showArray = (arra) => {
  arra.map(array => {
    console.log(array)
  })
}



const showtenarrays = (arr) => {

  arr.forEach((array, index) => {
    if (index === 5) {
      console.log('Posicion 5')
    }
    console.log(array)
  })

}

const multiplyArray = (arr, num) => {
  arr.map(array => {
    console.log(array * num)
  })
}
