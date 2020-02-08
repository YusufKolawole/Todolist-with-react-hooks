/////********************Todolist using class component********************************* */

import React from 'react'

export default class TodoInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos : JSON.parse(localStorage.getItem("todos"))  || []
    };
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveItem(id){
      const newTodos = this.state.todos.filter(todo => todo.id !== id);
      this.setState({todos : [...newTodos]});
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

   handleAddTodo(todo) {
    if (this.state.todos) this.setState({ todos: [...this.state.todo, todo] });
    else this.setState({ todos: [todo] });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }
  render(){
    return(
    <div>
    <input placeholder="With class component" onChange={(e)=>{
      this.setState({todoInput : e.target.value})
      console.log(this.setState)
    }}/>
    </div>
  )}
}