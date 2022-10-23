import React from 'react'

const TodoList = ({ todoItems, setTodoItems }) => {

    const handleComplete = (task) => {
        setTodoItems(
            todoItems.map((taskItem) => {
                if (taskItem.id === task.id) {
                    return {...taskItem, completed: !taskItem.completed}
                }
                return taskItem;
            })
        );
    }

    const handleDelete = ({ id }) => {
        setTodoItems(todoItems.filter((task) => task.id !== id));
    }

    return (
        <div className="todo-list">
        {todoItems.map((task) => (
            <li className="task-item" key={task.id}>
                <p>{task.title} id:{task.id}</p>
                <div>
                    <button
                        className="task-complete" 
                        onClick={() => handleComplete(task)}
                    >
                        complete
                    </button>
                    <button 
                        className="task-edit"
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
