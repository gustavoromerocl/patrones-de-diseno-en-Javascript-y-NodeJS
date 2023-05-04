class MiClase {
  constructor(p1) {
    this.propiedad = p1
    this.metodo = () => {
      //
    }
  }

  metodo() {
    //método de prototipo
  }
}

const instancia  = new MiClase(4)

console.log(instancia)