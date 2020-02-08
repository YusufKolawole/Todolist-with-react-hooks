import React, { useState } from 'react';

export default function TodoInput() {
  const [todoInput, setTodoInput] = useState('');
  return <input placeholder="ex. drink milk" onChange={(e) => setTodoInput(e.target.value)} />
}
