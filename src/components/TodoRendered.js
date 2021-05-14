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

export default function TodoRendered() {
    function renderTodo(todo) {
        return (
            <section>
                <input type="checkbox" onChange={todo.completed} />
                <h3>{todo.title}</h3>
            </section>
        )
    }
    
    return (
        <div>
            {
                todos.map(renderTodo)
            }
        </div>
    );
}
