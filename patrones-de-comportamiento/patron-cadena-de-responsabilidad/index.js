class Suma {
  constructor(v = 0) {
    this.val = v
  }

  suma(v) {
    this.val += v
    return this
  }
}

const value = new Suma(1)

console.log(value
  .suma(1)
  .suma(2)
  .suma(3)
  .suma(4)
  .val)