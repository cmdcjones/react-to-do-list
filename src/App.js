import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
    const [input, setInput] = useState('');
    const [todoItems, setTodoItems] = useState([]);
    const [editTask, setEditTask] = useState(null);

    return (
        <div className="page-container">
            <Header />
            <Form 
                input={input} 
                setInput={setInput} 
                todoItems={todoItems}
                setTodoItems={setTodoItems}
                editTask={editTask}
                setEditTask={setEditTask}
            />
            <TodoList 
                todoItems={todoItems}
                setTodoItems={setTodoItems}
                editTask={editTask}
                setEditTask={setEditTask}
            />
        </div>
    );
};

export default App;
