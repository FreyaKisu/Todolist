import React, { Component } from "react";
import "./App.css";
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

class TodoTable extends Component {
  render() {
    return (
      <div className="App">
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
                <DeleteButton onDelete={() => this.deleteItem(row.index)} />
              )
            }
          ]}
        />
      </div>
    );
  }
}

export default TodoTable;
