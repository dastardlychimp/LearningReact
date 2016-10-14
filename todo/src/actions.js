const uid = () => Math.random().toString(34).slice(2);

function addTodo(text) {
    return {
        type: 'ADD_TODO',
        payload: {
            id: uid(),
            isDone: false,
            text: text
        }
    };
}

function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    }
}

export { addTodo, toggleTodo };