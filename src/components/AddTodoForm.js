import React from 'react';

import pt from "prop-types";

class AddTodoForm extends React.Component {
    state = {
        newItem: ""
    };

    handleChange = event => {
        this.setState({ newItem: event.target.value });
    };

    handleAddTodo = event => {
        event.preventDefault();

        const { newItem } = this.state;
        const { addTodo } = this.props;

        if (!newItem.trim()) {
            alert("Write something ...");
            event.target.previousSibling.focus();
            return;
        }

        addTodo(newItem);
        this.setState({ newItem: "" });
        event.target.previousSibling.focus();
    };

    render(){
        return (<form>
            <input type="text" autoFocus placeholder="Add todo" value={this.state.newItem} onChange={this.handleChange} />
            <button type="submit" onClick={this.handleAddTodo}>Add</button>
        </form>);
    }
}

AddTodoForm.propTypes = {
    addTodo: pt.func
};

export default AddTodoForm;