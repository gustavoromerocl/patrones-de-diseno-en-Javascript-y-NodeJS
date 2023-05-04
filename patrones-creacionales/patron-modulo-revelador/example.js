//Ejemplo patrón módulo revelador

//Para ejecutar pegar en la consola del navegador y ejecutar el método listar
const Users = (() => {
  const recurso = 'https://jsonplaceholder.typicode.com/users'

  return {
    listar: async () => {
      return await fetch(recurso).then(x => x.json())
    },
    crear: async (data) => {
      return await fetch(recurso, {type: 'POST', body: JSON.stringify(data)}).then(x => x.json)
    }
  }
})()


