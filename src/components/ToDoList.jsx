import React from "react";

const ToDoList = (props) => {
  return (
    <div id="listItem-wrapper" className="pt-8">
      <ul className="text-white">
        {props.toDoItem.map((item) => (
          <li
            key={item.id}
            className="flex gap-3 items-start justify-between my-4 py-1 border-b-2 border-gray-600"
          >
            <span
            // style={{
            //   textDecoration: props.checked ? "line-through" : "none",
            // }}
            >
              {item.text}
            </span>
            <div id="userActionBtn" className="flex gap-5">
              <button id="editBtn" onClick={() => props.editList(item.id)}>
                <i className="fa-solid fa-pen"></i>
              </button>
              <button id="deleteBtn" onClick={() => props.deleteList(item.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
