import React, {Component} from 'react'
import Todo from './Todo'
import {connect} from 'react-redux'
import {toggle} from './../actions'
class TodoList extends Component {
  render() {
    const {todoList, toggleTodo} = this.props
    return (
      <ul>
        {todoList &&
          todoList.length > 0 &&
          todoList.map(list => {
            return <Todo data={list} key={list.id} onClick={toggleTodo} />
          })}
      </ul>
    )
  }
}
const mapStateToProps = state => {
  switch (state.visibleFilter) {
    case 'active':
      return {
        todoList: state.todoLists.filter(list => list.completed === false),
      }
    case 'completed':
      return {
        todoList: state.todoLists.filter(list => list.completed === true),
      }
    case 'all':
    default:
      return {todoList: state.todoLists}
  }
}

const mapDispatchToProps = dispatch => {
  return {toggleTodo: id => dispatch(toggle(id))}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)
