import React, { useEffect } from 'react'

const Form = ({ input, setInput, todoItems, setTodoItems, editTask, setEditTask }) => {

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!editTask) {
            setTodoItems([...todoItems, 
                        {id: generateId(),
                        title: input, 
                        completed: false,
                        }]);
            setInput('');
        } else {
            updateTask(input, editTask.id, editTask.completed);
        }

    };

    const updateTask = (title, id, completed) => {
        const updatedTask = todoItems.map((task) => 
            task.id === id ? {title, id, completed} : task
        )
        setTodoItems(updatedTask);
        setEditTask('');
        const button = document.getElementById('button-submit');
        button.className = "button-submit";
    };

    const generateId = () => {
        let newId = Math.floor(Math.random() * 10000);
        return newId;
    };

    useEffect(() => {
        if (editTask) {
            setInput(editTask.title);
        } else {
            setInput("");
        }
    }, [setInput, editTask]);

    return (
        <div className="form-container">
            <form onSubmit={handleFormSubmit}>
                <input
                    className="input-form"
                    type="text"
                    min="3"
                    max="60"
                    placeholder="Enter a task..."
                    value={input}
                    onChange={handleInputChange}
                />
                <button id="button-submit" className="button-submit" type="submit">
                {editTask ? "Save edit!" : "Add task!"}
                </button>
            </form>
        </div>
    );
}

export default Form;
