import React from "react";
import "./Todos.scss";
import { RiDeleteBin5Line } from "react-icons/ri";

const Todos = ({ todoArray, removeTodo }) => {
  const handleClick = (e) => {
    removeTodo(e);
  };

  return (
    <ul className="todos">
      {todoArray.map((todo) => (
        <div className="todos__list" key={todo.id}>
          <li className="todos__task">{todo.task} </li>
          <RiDeleteBin5Line
            className="todos__delete"
            onClick={() => handleClick(todo.id)}
          />
        </div>
      ))}
    </ul>
  );
};

export default Todos;
