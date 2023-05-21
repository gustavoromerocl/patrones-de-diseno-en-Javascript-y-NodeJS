function* iterador(collecion) {
  var nextIndex = 0;

  while (nextIndex < collecion.length) {
    yield collecion[nextIndex++]
  }
}

const x = [1, 2, 3, 4, 5, 6, 7]

const gen = iterador(x)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

