import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="header">
            <img className="margin" src="/images/ironhack-logo.svg" />
            <img className="margin float-right" src="images/menu-top.svg" />
            <h1 className="margin">Say Hello To ReactJS</h1>
            <p className="margin">
              you will learn a fruntend app from scratch to become a nekita
              programer
            </p>
            <button className="margin btn">Awesome!</button>
          </div>
        </div>
        <div className="row margin">
          <div className="column">
            <img src="/images/icon1.png" />
            <h2>Blahsh vlahdh</h2>
            <p>Blahsh vlahdh Blahsh vlahdh Blahsh vlahdh</p>
          </div>
          <div className="column">
            <img src="/images/icon2.png" />
            <h2>Blahsh vlahdh</h2>
            <p>Blahsh vlahdh Blahsh vlahdh Blahsh vlahdh</p>
          </div>
          <div className="column">
            <img src="/images/icon3.png" />
            <h2>Blahsh vlahdh</h2>
            <p>Blahsh vlahdh Blahsh vlahdh Blahsh vlahdh</p>
          </div>
          <div className="column">
            <img src="/images/icon4.png" />
            <h2>Blahsh vlahdh</h2>
            <p>Blahsh vlahdh Blahsh vlahdh Blahsh vlahdh</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
