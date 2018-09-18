import React, { Component } from "react";
import "./App.css";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

const DeleteButton = props => (
  <button
    className="btn btn-danger btn-sm m-2"
    onClick={() => props.onDelete()}
  >
    Delete
  </button>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", date: "", rows: [] };
  }

  inputChanged = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDelete = index => {
    const rows = this.state.rows.filter((row, i) => i !== index);
    this.setState({ rows });
  };

  addTodo = event => {
    event.preventDefault();
    this.setState({
      rows: [
        ...this.state.rows,
        { description: this.state.description, date: this.state.date }
      ]
    });
  };

  render() {
    return (
      <div className="App container-fluid">
        <div className="header App-header">
          <h2 className="">Simple Todolist</h2>
        </div>
        <div className="row">
          <form className="container description" onSubmit={this.addTodo}>
            <label className="">Description</label>
            <input
              className="description"
              type="text"
              name="description"
              onChange={this.inputChanged}
              value={this.state.description}
            />
            <label className="date">Date</label>
            <input
              className="date"
              type="date"
              name="date"
              onChange={this.inputChanged}
              value={this.state.date}
            />
            <input className="btn btn-primary" type="submit" value="Add" />
          </form>
        </div>
        <div>
          <table className="table">
            <tr>
              <th>Description</th>
              <th>Date</th>
            </tr>
            {this.state.rows.map((row, index) => (
              <tr key={index}>
                <td>{row.description}</td>
                <td>{row.date}</td>
                <td>
                  <DeleteButton onDelete={() => this.handleDelete(index)} />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
