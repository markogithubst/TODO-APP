import React from 'react';

import pt from "prop-types";

class TodoItem extends React.Component {
    handleToggleTodoClick = () => {
        const { toggleTodo, todo } = this.props;
        toggleTodo(todo.id);
    };

    handleRemoveTodoClick = event => {
        // event.stopPropagation();

        const { todo, removeTodo } = this.props;
        removeTodo(todo.id);
    };

    render() {
        const { todo } = this.props;
        const textClass = todo.completed ? 'todo-item-completed' : null;

        return (
            <li className="todo-item">
                <span className="todo-item-item" onClick={this.handleToggleTodoClick}>
                    <input type="checkbox" readOnly checked={todo.completed} />
                    <span className={textClass}>{todo.text}</span>
                </span>
                <span className="todo-item-delete-button" onClick={this.handleRemoveTodoClick}>×</span>
            </li>
        );
    }
}

TodoItem.propTypes = {
    removeTodo: pt.func,
    toggleTodo: pt.func,
    todo: pt.object
  };


export default TodoItem;