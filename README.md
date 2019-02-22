### `npm start`

[http://localhost:3000](http://localhost:3000)

数据结构：
事件是一个数组
`todoList=["",""]`

#### 总结

1. Provider connect 是 react-redux 引入
2. createStore ,combineReducers 是 redux 引入
3. 每条数据都需要一个唯一标识来防止重复 id，在循环展示 li 的时候避免警告
4. 对于 active 和 completed ，只需要一个布尔值就可以标明
5. mapStateToProps,mapDispatchToProps 用法

> mapStateToProps 作用：将 state 传递给组件的 props。mapStateToProps(state,ownProps) state 是状态，ownProps 是当前组件本身的 props 对象（该组件所有的 props 的集合）,修改 ownProps 组件也会刷新
> mapDispatchToProps 作用：定义用户一些需要调用 action 的操作。mapDispatchToProps(Object|(dispatch,ownProps=>{return Object})) 参数可以使 Object 可是也一个函数，函数的参数是 dispatch 和 ownProps（同 mapStateToProps),返回值也是一个 Object。类似于

```
const mapDispatchToProps = dispatch => {
  return {toggleTodo: id => dispatch(toggle(id))}
}
```
