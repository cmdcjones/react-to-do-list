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

    return (
        <div className="todo-list">
        {todoItems.map((task) => (
            <li className="task-item" key={task.id}>
                <p>{task.title}</p>
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
