import React, { useState } from "react";
import "./task.css";
import { addTask } from "../features/task/taskslice";
import { useDispatch } from "react-redux";
const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(text));
    setText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={text}
          className="input"
          placeholder="add a task"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
