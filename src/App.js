import React from 'react'

import Todo from './components/Todo'
import TodoWithCheckboxes from './components/TodoWithCheckboxes'
import TodoRendered from './components/TodoRendered'
import TodoWithKey from './components/TodoWithKey'

function App() {
    return (
        <div>
            {/* <Todo /> */}
            {/* <TodoWithCheckboxes /> */}
            <TodoRendered />
            <TodoWithKey />
        </div>
    )
}

export default App;