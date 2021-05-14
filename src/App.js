import React from 'react'

import Todo from './components/Todo'
import TodoWithCheckboxes from './components/TodoWithCheckboxes'
import TodoRendered from './components/TodoRendered'

function App() {
    return (
        <div>
            {/* <Todo /> */}
            {/* <TodoWithCheckboxes /> */}
            <TodoRendered />
        </div>
    )
}

export default App;