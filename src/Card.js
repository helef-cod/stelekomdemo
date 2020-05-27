import React, { Component } from "react";
import Table from "./Table.js";
import { v4 as uuidv4 } from "uuid";

class Card extends Component {
  render() {
    let className = "";
    switch (this.props.idx) {
      case 0:
        className = "card0";
        break;
      case 1:
        className = "card1";
        break;
      case 2:
        className = "card2";
        break;
      case 3:
        className = "card3";
        break;
      case 4:
        className = "card4";
        break;
      case 5:
        className = "card5";
        break;
      default:
        className = "card1";
    }
    if (this.props.error) {
      return (
        <div>
          Karşıdan kimse yüklenemedi<br></br> ama kendiniz kişi
          kaydedebilirsiniz.
        </div>
      );
    }
    if (!this.props.loading) {
      return (
        <div>
          <b>Yükleniyor...</b>
        </div>
      );
    } else {
      return (
        <div className="app">
          <div className="cards">
            {this.props.people.map((person, index) => (
              <div className={className} key={uuidv4()}>
                <img
                  alt="Profile"
                  src={
                    person.picture
                      ? person.picture.large
                      : "https://api.adorable.io/avatars/130/abott@adorable.png"
                  }
                ></img>
                <h3>
                  AD-SOYAD: {person.name.first} {person.name.last}
                </h3>

                <h3>TELEFON: {person.phone}</h3>
                <h3>EPOSTA: {person.email}</h3>

                <Table
                  fname={person.name.first}
                  lname={person.name.last}
                  phone={person.phone}
                  email={person.email}
                />
                <button
                  className="deletebutton"
                  onClick={() => this.props.removeCharacter(index)}
                >
                  Sil !
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}
export default Card;
