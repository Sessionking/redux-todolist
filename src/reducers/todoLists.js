const todoLists = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ]
    case 'toggle':
      return state.map(st => {
        if (st.id === action.id) return {...st, completed: !st.completed}
        return st
      })
    default:
      return state
  }
}

export default todoLists
