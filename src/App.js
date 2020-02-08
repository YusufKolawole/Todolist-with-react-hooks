/////********************Todolist using class component********************************* */

import React from 'react'

export default class TodoInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todoInput : '',
    }
  }
  render(){
    return(
    <div>
    <input placeholder="hi" onChange={(e)=>{
      this.setState({todoInput : e.target.value})
      console.log(this.setState)
    }}/>
    </div>
  )}
}