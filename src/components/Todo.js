import React from 'react'

import {todos} from '../todoList'

function Todo() {
    return (
    <ul>
      {
        todos.map((todo) => {
          return (
            <li>{todo.title}</li>
          )
        })
      }
    </ul>
    )
}

export default Todo;