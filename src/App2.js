import React, { useState } from 'react';

export default function TodoInput2() {
  const [todoInput, setTodoInput] = useState('');
  return <input placeholder="With Functional componnent" onChange={(e) => setTodoInput(e.target.value)} />
}

