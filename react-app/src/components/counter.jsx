import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    list: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.list.length === 0) return <p>There are no tags!</p>;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary">Increment</button>
        <ul>
          {this.state.list.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {this.state.list.length !== 0 && "Please create a new tag"}
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-4 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
