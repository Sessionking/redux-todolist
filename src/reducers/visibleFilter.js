const visibleFilter = (state = 'all', action) => {
  switch (action.type) {
    case 'filter':
      return action.filter
    default:
      return state
  }
}

export default visibleFilter
