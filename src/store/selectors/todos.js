const isTodosLoading = () => (store) => store.todos.isLoading
const getTodos = () => (store) => store.todos.data

export { isTodosLoading, getTodos }
