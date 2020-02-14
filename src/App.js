import React, {useState} from 'react';
import "./App.css"
function Todo({todo, index, completeTodo, removeTodo}){
   return(
      <div style={{textDecoration:todo.isCompleted ? "line-through" : ''}} className="todo">
         {todo.text}
         <div>
            <button onClick={()=> completeTodo(index)}>Complete</button>
            <button onClick={()=> removeTodo(index)}>x</button>
         </div>
      </div>
   )
}

function TodoForm({addTodo}){
   const [value, setValue] = useState('');

   const handleSubmit = e => {
      e.preventDefault();
      if(!value)return;
      addTodo(value);
      setValue('')
   }
   return (
      <form onSubmit={handleSubmit}>
      <input className="input" value={value} onChange={e=>setValue(e.target.value)} placeholder="add todo"/>
   </form>
   )
}

function App(){
    const [todos, setTodos] = useState([ 
      {
         text: 'Learn advance react',
         isCompleted : false,
      },
      {
        text: 'Build  social media',
        isCompleted : false
     },
     {
      text: 'Startup later',
      isCompleted : false
   }
    ]);

    const addTodo = text => {
       const NewTodos = [...todos, {text}];
       setTodos(NewTodos)

    }

    const completeTodo = (index)=>{
         const newTodos = [...todos];
         newTodos[index].isCompleted = true;
         setTodos(newTodos)
    }

    const removeTodo = (index)=>{
         var newTodos = [...todos];
         newTodos.splice(index, 1);
         setTodos(newTodos)
    }
    return ( 
       <div className="app">
          <div className="todo-list">
            {todos.map((todo, index)=>(
               <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
            ))}
            <TodoForm addTodo={addTodo}/>
          </div>
       </div>
    )

}

export default App;    