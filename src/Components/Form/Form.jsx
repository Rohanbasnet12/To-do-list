import React, { useState } from "react";
import ListItem from "../ListItems/ListItem";

const Form = () => {
  const [items, setItems] = useState([]);
  const [userText, setUserText] = useState("");

  function handleChange(e) {
    setUserText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setItems((prevItems) => {
      return [...prevItems, userText];
    });
    setUserText("");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white py-2 px-5 w-full rounded-md"
        style={{ boxShadow: "2px 2px 22px 2px #8a8a8a" }}
      >
        <label htmlFor="item" className="text-2xl font-semibold">
          New Todo:{" "}
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            id="item"
            onChange={handleChange}
            value={userText}
            className="border-2 border-gray-300 rounded-md py-2 px-4 w-full"
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white py-2 px-4 rounded-md"
          >
            Add
          </button>
        </div>
      </form>

      <ListItem items={items} />
    </div>
  );
};

export default Form;
