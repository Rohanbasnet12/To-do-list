import React, { useState } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = () => {
  const [value, setValue] = useState([]);
  const [userText, setUserText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  function handleChange(event) {
    const newValue = event.target.value;
    setUserText(newValue);
  }

  function handleDelete(id) {
    setValue(value.filter((item) => item.id !== id));
  }

  function handleEdit(id) {
    const editedItem = value.find((item) => item.id === id);
    setUserText(editedItem.text);
    setIsEditing(true);
    setEditId(id);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (userText.trim() !== "") {
      if (isEditing) {
        setValue((prevValue) =>
          prevValue.map((item) =>
            item.id === editId ? { ...item, text: userText } : item
          )
        );
        setIsEditing(false);
        setEditId(null);
      } else {
        const newItem = { id: uuidv4(), text: userText };
        setValue((prevValue) => [...prevValue, newItem]);
      }
      setUserText(""); // Clear the input field after submission
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="flex items-center justify-center w-full border-2"
          style={{ border: "2px solid rgb(140, 78, 255)" }}
        >
          <input
            id="inputField"
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
            {isEditing ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>

      <ToDoList
        toDoItem={value}
        deleteList={handleDelete}
        editList={handleEdit}
      />
    </>
  );
};

export default ToDoForm;
