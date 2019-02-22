let id = 0
const addTodoList = text => {
  return {
    type: 'add',
    id: id++,
    text,
  }
}

const filterTodoList = filter => {
  return {type: 'filter', filter}
}

const toggle = id => {
  return {type: 'toggle', id}
}
export {addTodoList, filterTodoList, toggle}
