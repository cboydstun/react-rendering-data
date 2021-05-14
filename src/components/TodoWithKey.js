import React from 'react'

import {todos} from '../todoList'

export default function TodoWithKey() {
    return (
    <ul>
      {
        todos.map((todo) => {
          return (
            <li key={todo.id}>{todo.title}</li>
          )
        })
      }
    </ul>
    )
}
