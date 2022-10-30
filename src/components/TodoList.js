import React from 'react'

const TodoList = ({ setInput, todoItems, setTodoItems, editTask, setEditTask }) => {

    const handleComplete = (task) => {
        setTodoItems(
            todoItems.map((taskItem) => {
                if (taskItem.id === task.id) {
                    return {...taskItem, completed: !taskItem.completed}
                }
                return taskItem;
            })
        );
        const selectedTask = document.getElementById(task.id);
        if (selectedTask.className === "task-item") {
            selectedTask.className = "task-item completed";
        } else {
            selectedTask.className = "task-item";
        }
    };

    const handleDelete = ({ id }) => {
        setTodoItems(todoItems.filter((task) => task.id !== id));
        if (editTask.id === id) {
            setEditTask('');
            setInput('');
            const button = document.getElementById('button-submit');
            button.className = "button-submit";
        }
    };

    const handleEdit = ({ id }) => {
        const selectedTask = todoItems.find((task) => task.id === id);
        const button = document.getElementById('button-submit');
        button.className = "button-submit button-edit";
        const selectedTaskComplete = document.getElementById(selectedTask.id);
        if (selectedTaskComplete.className === "task-item completed") {
            selectedTaskComplete.className = "task-item";
        }
        setEditTask(selectedTask);
    };

    return (
        <div className="todo-list">
        {todoItems.map((task) => (
            <li className="task-item" key={task.id} id={task.id}>
                <p>{task.title}</p>
                <div className="item-buttons">
                    <button
                        className="task-complete" 
                        onClick={() => handleComplete(task)}
                    >
                        complete
                    </button>
                    <button 
                        className="task-edit"
                        onClick={() => handleEdit(task)}
                    >
                        edit
                    </button>
                    <button
                        className="task-delete"
                        onClick={() => handleDelete(task)}
                    >
                        delete
                    </button>
                </div>
            </li>
        ))}
        </div>
    );
}

export default TodoList
