import {
    addTodo,
    removeTodo,
    toggleTodo,
    removeAllCompletedTodos
  } from "./actions";


  function mapStateToProps(state) {
    return {
      todos: state
    };
  }

  /*
  const mapDispatchToProps = {
        addTodo,
        removeTodo,
        toggleTodo,
        removeAllCompletedTodos
    }
    */

    function mapDispatchToProps(dispatch){
        return {
            addTodo: (text) => dispatch(addTodo(text)),
            removeTodo: (id) => dispatch(removeTodo(id)),
            toggleTodo: (id) => dispatch(toggleTodo(id)),
            removeAllCompletedTodos: () => dispatch(removeAllCompletedTodos())
        }
    }

export { mapStateToProps, mapDispatchToProps };