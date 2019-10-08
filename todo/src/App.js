import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./TodoItem";

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>To Do App</p>
        <TodoItem></TodoItem>
      </main>
    </div>
  );
}

export default App;
