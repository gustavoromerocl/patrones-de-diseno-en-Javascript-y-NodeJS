//Alcance global
const y = 'lele'
const f = () => {
  //Alcance privado global de la función
  const x = 'lala'
  return () => {
    //Alcance privado de la la función de retorno
    const z = 'lolo'
    console.log('x,y,z', x,y,z);
  }
}