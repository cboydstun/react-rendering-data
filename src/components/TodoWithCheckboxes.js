import React from 'react'

import {todos} from '../todoList'

export default function TodoWithCheckboxes() {
    return (
    <div>
      {
        todos.map((todo) => {
          return (
            <section>
              <input type="checkbox" onChange={todo.completed} />
              <h3>{todo.title}</h3>
            </section>
          )
        })
      }
    </div>
    )
}
