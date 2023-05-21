const user = new User()

const init = () => {
  user.on('login', userLoggedIn)
  user.on('login', retrieveInitData)

} 

const userLoggedIn = () => {
  //usuario inicio de sesión
}

app.init()

//En algún lugar de nuestro app
const login = () => {
  //Lógica de inicio de sesión
  //...

  //Luego:
  user.trigger('login')
}

login()