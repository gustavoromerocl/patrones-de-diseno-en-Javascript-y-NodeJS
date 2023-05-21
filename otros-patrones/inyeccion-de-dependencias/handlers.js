module.export.get = axios => async (req, res) => {
  const { data } = await axios.get('http://jsonplaceholder.typicode.com/users')
  res.send(data);
}

module.export.get = (axios, db, storage, auth) => async (req, res) => {
  const { data } = await axios.get('http://jsonplaceholder.typicode.com/users')
  res.send(data);
}