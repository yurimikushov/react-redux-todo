const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
  return res.json()
}

export { fetchTodos }
