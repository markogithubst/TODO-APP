import TodoItem from './TodoItem';

import pt from "prop-types";

function TodoList({ todos, removeTodo, toggleTodo }) {
    return (
        <ul>
            {todos.map(todo => {
                return <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
            })}
        </ul>
    );
}

TodoList.propTypes = {
    todos: pt.array,
    removeTodo: pt.func,
    toggleTodo: pt.func
  };


export default TodoList;