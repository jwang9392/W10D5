import React from 'react';
import {uniqueID} from '../../util/util';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: "", body: "", done: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => {
      const that = this;
      that.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, body, done } = this.state;
    const id = uniqueID();
    const todo = {id, title, body, done};
    debugger
    this.props.receiveTodo(todo);
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Title
          <input
          type="text"
          onChange={this.update("title")}
          value={this.state.title}
          />
        </label>
        <label>Body
          <input
            type="textarea"
            onChange={this.update("body")}
            value={this.state.body}
          />
        </label>
        <button>Add a New Todo Item</button>
      </form>
    );
  }
}

export default TodoForm;