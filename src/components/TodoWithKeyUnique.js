import React from 'react'

import {todos} from '../todoList'

export default function TodoWithKeyUnique() {

    return (
    <ul>
      {
        todos.map((todo, index) => {
          return (
            <li key={index}>{todo.title}</li>
          )
        })
      }
    </ul>
    )
}
