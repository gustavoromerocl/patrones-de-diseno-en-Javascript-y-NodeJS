const saludar = name => console.log(`hola soy ${name}`)
const despedir = () => console.log('Adios')
const dormir = () => console.log('zzzzzZZ')

class Persona {
  constructor() {
    this.nombre = 'Gustavo'
  }

  saludar() {
    saludar(this.nombre)
  }

  despedir() {
    despedir()
  }

  dormir() {
    dormir()
  }
}

class Robot {
  constructor() {
    this.nombre = 'Gustavo'
  }

  saludar() {
    saludar(this.nombre)
  }

  despedir() {
    despedir()
  }
}