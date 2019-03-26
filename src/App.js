import React, {Component} from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import {Button} from 'antd'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList />
        <Footer />
        <Button type="primary">22</Button>
      </div>
    )
  }
}

export default App
