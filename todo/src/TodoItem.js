import React from "react";
import "./TodoItem.css";

function TodoItem() {
  return (
    <div>
      <ol className="list">
        <li>
          <label class="container">
            Todo item
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </li>
      </ol>
    </div>
  );
}

export default TodoItem;
