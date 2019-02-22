import React, {Component} from 'react'
class Todo extends Component {
  onClick = e => {
    e.preventDefault()
    const {toggleTodo, data} = this.props
    toggleTodo(data.id)
  }
  render() {
    const {data} = this.props
    return (
      <li
        onClick={this.onClick}
        style={{textDecoration: data.completed ? 'line-through' : 'none'}}
      >
        {data.text}
      </li>
    )
  }
}
export default Todo
