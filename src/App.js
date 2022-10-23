import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
    const [input, setInput] = useState('');
    const [todoItems, setTodoItems] = useState([]);

    return (
        <div className="page-container">
            <Header />
            <Form 
                input={input} 
                setInput={setInput} 
                todoItems={todoItems}
                setTodoItems={setTodoItems}
            />
            <TodoList />
        </div>
    );
};

export default App;
