const isTodosLoading = () => (store) => store.todos.isLoading

const getAllTodos = () => (store) => store.todos.data

const getDontCompletedTodos = () => (store) => {
  return store.todos.data.filter((todo) => todo.completed === false)
}

export { isTodosLoading, getAllTodos, getDontCompletedTodos }
