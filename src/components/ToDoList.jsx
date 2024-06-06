import React from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoList = (props) => {
  function handleDelete(index) {}

  function handleEdit(index) {}

  return (
    <div id="listItem-wrapper" className="pt-8">
      <ul className="text-white">
        {props.toDoItem.map((item) => (
          <li
            key={uuidv4()}
            className="flex gap-3 items-start justify-between my-4 py-1 border-b-2 border-gray-600"
          >
            <span>{item}</span>
            <div id="userActionBtn" className="flex gap-4">
              <button id="deleteBtn" onClick={() => handleDelete(index)}>
                <i class="fa-solid fa-trash"></i>
              </button>
              <button id="editBtn" onClick={() => handleEdit(index)}>
                <i class="fa-solid fa-pen"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
