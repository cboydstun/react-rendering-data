import React, {useState} from 'react'

import {todos as todoList } from '../todoList'

export default function TodoAddWithState() {
    const [todos, setTodos] = useState(todoList)
  const [title, setTitle] = useState('')

  function addTodo() {
    const newTodo = {
      title,
      completed: false
    }
    // this concatenates the previous todos array with the new
    // todo object that we want to add
    setTodos((state) => state.concat(newTodo))
  }

  return (
    <div>
      <section>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={addTodo}>Click to Add</button>
      </section>

      {
        todos.map((todo, i) => {
          return (
            <section key={i}>
              
              <h3>{todo.title}<span><input type="checkbox" onChange={todo.completed} /></span></h3>
            </section>
          )
        })
      }
    </div>
  );
}
