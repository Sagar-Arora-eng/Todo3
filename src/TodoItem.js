import React from "react";
import dataItem from './todoData'

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
       data : dataItem
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState((prevState) => {
      return { completed: !prevState.completed };
    });
  }
  render() {
     const { data } = this.state
    return (
      <>
      {data.map((d) => {
        return (
          <div className="todo-item">
          <input
            type="checkbox"
            defaultChecked = {d.completed}
            onChange={this.handleChange}
          />
          <label> {d.text} </label>
        </div>
        )
      })}
      </>
    );
  }
}

export default TodoItem;
