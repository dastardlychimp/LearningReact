import React from 'react';

function Todo(props) {
    const { todo } = props;
    if (todo.isDone) {
        return <strike>{todo.text}</strike>;
    }
    else {
        return <span>{todo.text}</span>;
    }
}

function TodoList(props) {
    const { todos } = props;
    return (
        <div className='todo'>
            <input type='text' placeholder='Add todo' />
            <ul className='todo__list'>
                {todos.map(t => (
                    <li key={t.id} classNmae = 'todo__item'>
                        <Todo todo={t} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export { Todo, TodoList};