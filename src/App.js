import React, {useState} from 'react'

function TodoInput(){
  const [todoInput, setTodoInput] = useState(" ");
  return <input placeholder="type here" onChange={(e)=>{
    setTodoInput(e.target.value);
    console.log(todoInput)
  }}/>
  
}

export default TodoInput;