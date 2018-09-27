import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Quote
          destination="London"
          country="England"
          photo="https://www.nacel.fr/medias/_cache/produits/289/imagePrincipale/1920_1440/ecole-de-langue-londres-tower-bridge.jpg"
          distance = "100 Km"
        />
        <Quote
          destination="Bogota"
          country="Colombie"
          photo="https://www.nacel.fr/medias/_cache/produits/289/imagePrincipale/1920_1440/ecole-de-langue-londres-tower-bridge.jpg"
          distance = "100 Km"
        />
      </div>
    );
  }
}

export default App;