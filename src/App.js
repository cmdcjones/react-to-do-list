import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
    const [input, setInput] = useState('');
    

    return (
        <div className="page-container">
            <Header />
            <Form input={input} setInput={setInput} />
            <TodoList />
        </div>
    );
};

export default App;
