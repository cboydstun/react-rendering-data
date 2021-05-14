import React, {useState, setState} from 'react'

import {todos as todoList } from '../todoList'

export default function TodoWithStateObjects() {
    const [todos, setTodos] = useState(todoList)

    function toggleComplete(index) {
        // make a copy of the array
        let updatedTodos = [...todos]
        // toggle completed on the todo that was clicked on
        updatedTodos[index].completed = true;
        // overwrite the current todos arrray on state with our updated one
        setTodos(updatedTodos)
    }

  return (
    <div style={{listStyleType: "none"}}>
      {
        todos.map((todo, index) => {
          return (
            <li key={index}>
              <h3>{todo.title}<span><input type="checkbox" onChange={() => toggleComplete(index)} checked={todo.completed} /></span></h3>
            </li>
          )
        })
      }
    </div>
  );
}
