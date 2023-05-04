const resultado = (() => {
  const x = {} //Mantenemos esta propiedad privada

  //Retornamos lo que tenga acceso publico
  return {
    a: () => console.log(x),
    b: (key, val) => x[key] = val
  }
})()

resultado.a()
resultado.b('queso', 'tofu')
resultado.a()

//no podemos acceder directamente a x
console.log(resultado.x)