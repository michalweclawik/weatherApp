import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddToDo = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
  });

  const handleTask = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} action="">
        <input
          className="form__input"
          name="task"
          onChange={handleTask}
          value={todo.task}
          type="text"
        />
        <button className="form__button">Add</button>
      </form>
    </div>
  );
};

export default AddToDo;
