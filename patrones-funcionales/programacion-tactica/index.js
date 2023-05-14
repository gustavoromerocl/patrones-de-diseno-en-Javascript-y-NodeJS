const f =  (ruta, cb) => {
  const resultado = computacionPesada()
  cb(resultado)
}

const manejaResultado = (resultado) => {

}

f('/Users', manejaResultado)

// f('/Users', (resultado) => {

// })
