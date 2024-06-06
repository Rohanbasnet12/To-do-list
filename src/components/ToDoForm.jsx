import React, { useState } from "react";
import ToDoList from "./ToDoList";

const ToDoForm = () => {
  const [value, setValue] = useState([]);
  const [userText, setUserText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setUserText(newValue);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (userText.trim() !== "") {
      setValue((preValue) => {
        return [...preValue, userText];
      });
    }
    setUserText("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          id="inputField"
          className="flex items-center justify-center w-full border-2"
          style={{ border: "2px solid rgb(140, 78, 255)" }}
        >
          <input
            type="text"
            autoComplete="off"
            required
            className="py-2 px-3 w-full bg-transparent outline-none text-white"
            placeholder="Add your today's task"
            value={userText}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="px-3 text-white font-medium"
            style={{ background: "rgb(140, 78, 255)" }}
          >
            Add Task
          </button>
        </div>
      </form>

      <ToDoList toDoItem={value} />
    </>
  );
};

export default ToDoForm;
