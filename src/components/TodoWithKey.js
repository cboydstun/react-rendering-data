import React from 'react'

const todos = [
  {
    "id": 1,
    "title": "Feed cat",
    "completed": false
  },
  {
    "id": 2,
    "title": "Do laundry",
    "completed": false
  },
  {
    "id": 3,
    "title": "Go for a walk",
    "completed": false
  },
]

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
