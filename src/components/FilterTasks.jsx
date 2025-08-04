import React from "react";
import "./task.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/task/taskslice";
const FilterTasks = () => {
  const filter = useSelector((state) => state.tasks.filters);
  console.log("filter :", filter);
  const dispatch = useDispatch();
  return (
    <div className="filter">
      <button
        onClick={() => dispatch(setFilter("all"))}
        className={`button ${filter === "all" ? "active" : ""}`}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter("completed"))}
        className={`button ${filter === "completed" ? "active" : ""}`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTasks;
