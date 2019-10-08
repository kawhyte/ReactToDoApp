import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>To Do App</p>
        <span>
          <input type="checkbox" id="scales" name="scales" />
          <label for="scales">Scales</label>
        </span>
        <p>
          <input type="checkbox" id="scales" name="scales" />
          <label for="scales">Tables</label>
        </p>
        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label for="horns">Horns</label>
        </div>
      </main>
    </div>
  );
}

export default App;
