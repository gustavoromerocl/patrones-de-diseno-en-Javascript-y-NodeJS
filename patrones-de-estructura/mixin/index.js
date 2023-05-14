const mixin = {
  saludar(){
    alert(`Hola ${this.nombre}`)
  },
  despedir() {
    alert(`Chao ${this.nombre}`)
  }
}

class Usuario {
  constructor(nombre) {
    this.nombre = nombre
  }
}

Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario('Chanchito felíz')

usuario.saludar()