import React, { Component } from "react";
import "./App.css";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

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
        <ReactTable
          data={this.state.rows}
          defaultPAgeSize={10}
          filterable={true}
          columns={[
            {
              Header: "Description",
              accessor: "description"
            },
            {
              Header: "Date",
              accessor: "date",
              sortable: false
            },
            {
              Header: "Delete",
              Cell: row => (
                (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#dadada",
                      borderRadius: "2px"
                    }}
                  />
                ),
                <DeleteButton onDelete={() => this.handleDelete(row.index)} />
              )
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
