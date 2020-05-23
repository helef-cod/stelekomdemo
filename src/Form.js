import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: { first: "", last: "" },
      phone: "",
      email: "",
      nameError: "",
      phoneError: "",
    };
    this.state = this.initialState;
  }

  validate = () => {
    let nameError = "";
    let phoneError = "";

    if (!this.state.name.first) {
      nameError = "bana isim lazım!";
    }
    if (isNaN(this.state.phone) || !this.state.phone) {
      phoneError = "eskiden insanların telefonları vardı!";
    }
    if (nameError || phoneError) {
      this.setState({ nameError, phoneError });
      return false;
    }
    return true;
  };

  valueChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  nameChange = (event) => {
    this.setState({
      name: { ...this.state.name, [event.target.name]: event.target.value },
    });
  };
  submitForm = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.props.handlesubmit(this.state);
      this.setState(this.initialState);
    }
  };

  render() {
    const {
      name: { first, last },
      phone,
      email,
    } = this.state;
    return (
      <div className="card">
        <img
          alt="Profile"
          src={"https://api.adorable.io/avatars/130/abott@adorable.png"}
        ></img>
        <form onSubmit={this.submitForm}>
          AD:
          <input
            type="text"
            name="first"
            value={first}
            onChange={this.nameChange}
          />
          <div style={{ color: "red" }}>{this.state.nameError}</div>
          <br></br>
          SOYAD:
          <input
            type="text"
            name="last"
            value={last}
            onChange={this.nameChange}
          />
          <br></br>
          TELEFON:{"  "}
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={this.valueChange}
          />
          <div style={{ color: "red" }}>{this.state.phoneError}</div>
          <br></br>
          EPOSTA:{" "}
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.valueChange}
          />
          <br></br>
          <input type="button" value="Kaydet" onClick={this.submitForm} />
        </form>
      </div>
    );
  }
}

export default Form;
