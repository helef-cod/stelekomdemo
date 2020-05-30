import React, { Component } from "react";
import Card from "./Card.js";
import Form from "./Form.js";

class App extends Component {
  state = {
    compName: true,
    error: null,
    loading: false,
    people: [],
    idx: 1,
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=5")
      .then((result) => result.json())
      .then(
        (result) => {
          this.setState({ loading: true, people: result.results });
        },
        (error) => {
          this.setState({
            loading: true,
            error,
          });
        }
      );
  }
  nextUser = () => {
    this.setState({ idx: this.state.idx + 1 });
  };
  prevUser = () => {
    this.setState({ idx: this.state.idx - 1 });
  };

  allUsers = () => {
    this.setState({ idx: -1 });
  };

  returnCard = () => {
    this.setState({ idx: 1 });
  };

  pageChanger = () => {
    this.setState({ compName: !this.state.compName });
  };

  handleSubmit = (character) => {
    this.setState({ people: [character, ...this.state.people] });
  };
  removeCharacter = (key) => {
    this.setState({
      people: this.state.people.filter((some, index) => {
        return index !== key;
      }),
    });
  };

  render() {
    const { compName, error, loading, people, idx } = this.state;
    if (compName) {
      return (
        <div className="main">
          <div>
            <h2>
              Kişiler<br></br>(a simple React App)
            </h2>
          </div>
          <div className="info">
            <button
              className="pagin"
              style={{
                visibility: idx === 0 ? "hidden" : null,
                display: idx === -1 ? "none" : null,
              }}
              onClick={this.prevUser}
            >
              &laquo;Önceki
            </button>

            <Card
              error={error}
              loading={loading}
              people={people}
              idx={idx}
              prevUser={this.prevUser}
              nextUser={this.prevUser}
              removeCharacter={this.removeCharacter}
            />
            <button
              className="pagin"
              style={{
                visibility: idx === people.length - 1 ? "hidden" : null,
                display: idx === -1 ? "none" : null,
              }}
              onClick={this.nextUser}
            >
              Sonraki&raquo;
            </button>
          </div>
          <br></br>
          <button
            style={{ width: "25%", alignSelf: "center" }}
            onClick={this.pageChanger}
          >
            Yeni Kişi Ekle
          </button>
          <br></br>
          <button
            style={{
              width: "25%",
              alignSelf: "center",
              display: idx === -1 ? "none" : null,
              backgroundColor: "gray",
            }}
            onClick={this.allUsers}
          >
            Tüm Kişiler
          </button>
          <br></br>
          <button
            style={{
              width: "25%",
              alignSelf: "center",
              display: idx === -1 ? null : "none",
            }}
            onClick={this.returnCard}
          >
            Kart Görünümü
          </button>
        </div>
      );
    }
    if (!compName) {
      return (
        <div className="main">
          <div>
            <h2>Kişiler</h2>
          </div>
          <Form handlesubmit={this.handleSubmit} />
          <br></br>
          <button
            style={{ width: "20%", backgroundColor: "gray" }}
            onClick={this.pageChanger}
          >
            Geri Dön
          </button>
        </div>
      );
    }
  }
}

export default App;
