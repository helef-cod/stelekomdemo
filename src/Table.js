import React, { Component } from "react";

class Table extends Component {
  render() {
    const { fname, lname, phone, email } = this.props;
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
              <td>{fname}</td>
              <td>{lname}</td>
              <td>{phone}</td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
