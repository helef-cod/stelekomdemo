import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>AD</th>
              <th>SOYAD</th>
              <th>TELEFON</th>
              <th>EPOSTA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.fname}</td>
              <td>{this.props.lname}</td>
              <td>{this.props.phone}</td>
              <td>{this.props.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
