import React from 'react'

export default function TodoWithKeyUnique() {
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
