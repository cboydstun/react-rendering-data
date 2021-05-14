import React from 'react'

import {todos} from '../todoList'

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
