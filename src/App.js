import React from 'react'

import Todo from './components/Todo'
import TodoWithCheckboxes from './components/TodoWithCheckboxes'
import TodoRendered from './components/TodoRendered'
import TodoWithKey from './components/TodoWithKey'
import TodoWithKeyUnique from './components/TodoWithKeyUnique'
import TodoWithStateObjects from './components/TodoWithStateObjects'

function App() {
    return (
        <div>
            {/* <Todo />
            <TodoWithCheckboxes />
            <TodoRendered />
            <TodoWithKey /> */}
            <TodoWithKeyUnique />
            <TodoWithStateObjects />
        </div>
    )
}

export default App;