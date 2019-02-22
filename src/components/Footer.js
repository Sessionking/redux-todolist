import React, {Component} from 'react'
import {connect} from 'react-redux'
import {filterTodoList} from './../actions'
class Footer extends Component {
  onClick = type => e => {
    e.preventDefault()
    e.stopPropagation()
    this.props.dispatch(filterTodoList(type))
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick('all')}>全部</button>
        <button onClick={this.onClick('active')}>进行中</button>
        <button onClick={this.onClick('completed')}>已完成</button>
      </div>
    )
  }
}

export default connect()(Footer)
