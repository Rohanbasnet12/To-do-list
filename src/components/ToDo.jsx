import React from "react";
import "./ToDo.css";
import ToDoForm from "./ToDoForm";

const ToDo = () => {
  return (
    <div
      id="toDo-wrapper"
      className="container w-5/12 my-22 pt-12 pb-12 px-8 rounded-md bg-indigo-950"
    >
      <ToDoForm />
    </div>
  );
};

export default ToDo;
