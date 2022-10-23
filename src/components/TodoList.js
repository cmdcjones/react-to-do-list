import React from 'react'

const TodoList = ({ todoItems, setTodoItems, editTask, setEditTask }) => {

    const handleComplete = (task) => {
        setTodoItems(
            todoItems.map((taskItem) => {
                if (taskItem.id === task.id) {
                    return {...taskItem, completed: !taskItem.completed}
                }
                return taskItem;
            })
        );
    };

    const handleDelete = ({ id }) => {
        setTodoItems(todoItems.filter((task) => task.id !== id));
    };

    const handleEdit = ({ id }) => {
        const selectedTask = todoItems.find((task) => task.id === id);
        setEditTask(selectedTask);
    };

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
