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
