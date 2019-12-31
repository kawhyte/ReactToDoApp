import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./TodoItem";

function App() {
  return (
    <div className="wrap">
      <main className="header">
         {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>To Do List</p>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </main>
    </div>
  );
}

export default App;
