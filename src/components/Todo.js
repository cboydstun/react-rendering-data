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