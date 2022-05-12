import './App.css';

import React from 'react';
import { VisibilityToolbar, AddTodoForm, TodoList} from './components';
import  VISIBILITY_TYPES  from './const';

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./services/connectFunctions";

class App extends React.Component {
  state = {
    visibility: VISIBILITY_TYPES.ALL,
  };

  /*
  state = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    visibility: VISIBILITY_TYPES.ALL,
  }; 

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }
  */

  getVisibleTodos = () => {
    const { visibility } = this.state;

    const { todos } = this.props;

    if (visibility === VISIBILITY_TYPES.ALL) {
      return todos;
    }

    if (visibility === VISIBILITY_TYPES.COMPLETED) {
      return todos.filter(todo => todo.completed);
    }

    return todos.filter(todo => !todo.completed);
  };

  handleVisibilityChange = visibility => {
    this.setState({ visibility: visibility });
  };

  render(){
    const { todos, addTodo, removeTodo, toggleTodo, removeAllCompletedTodos } = this.props;

    const visibleTodos = this.getVisibleTodos();
    const hasCompletedTodos = todos.filter(todo => todo.completed).length > 0;

    return (
      <div className="App">
        <h1 className="header">My tasks</h1>
        <VisibilityToolbar
          visibilityType={this.state.visibility}
          onVisibilityChange={this.handleVisibilityChange}
        />
        <div className="todo-container">
          <AddTodoForm addTodo={addTodo} />
          <TodoList todos={visibleTodos} removeTodo={removeTodo} toggleTodo={toggleTodo}
          />
        </div>
        {hasCompletedTodos && (
          <span onClick={removeAllCompletedTodos} className="btn-clear-all">
            Clear completed
          </span>
        )}
      </div>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
