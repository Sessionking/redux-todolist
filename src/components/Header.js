import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodoList} from './../actions'
class Header extends Component {
  state = {value: ''}
  onChange = e => {
    const {value} = e.target
    if (value.trim() === '') return false
    this.setState({value: value})
  }
  onClick = e => {
    e.preventDefault()
    e.stopPropagation()
    const {value} = this.state
    this.props.dispatch(addTodoList(value))
    this.setState({value: ''})
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.onChange} />
        <button onClick={this.onClick}>添加事件</button>
      </div>
    )
  }
}

export default connect()(Header)
