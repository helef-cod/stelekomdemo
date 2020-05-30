import React, { Component } from "react";
import Table from "./Table.js";
import { v4 as uuidv4 } from "uuid";

class Card extends Component {
  render() {
    const { error, loading, people, idx } = this.props;
    if (error) {
      return (
        <div>
          Karşıdan kimse yüklenemedi.<br></br> Kendiniz kişi kaydedebilirsiniz.
        </div>
      );
    }
    if (!loading) {
      return (
        <div>
          <b>Yükleniyor...</b>
        </div>
      );
    } else {
      return (
        <div className="app">
          <div>
            {people
              .filter((ali, index, array) =>
                idx === -1 ? array : index === idx
              )
              .map((person, index) => (
                <div className="cards" key={uuidv4()}>
                  <button
                    style={{
                      display: idx !== -1 ? "none" : null,
                    }}
                    className="deletebutton"
                    onClick={() => this.props.removeCharacter(index)}
                  >
                    Sil !
                  </button>
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
                </div>
              ))}
          </div>
        </div>
      );
    }
  }
}
export default Card;
