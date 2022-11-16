import React, { useState } from "react";
import AddToDo from "../../components/AddToDo/AddToDo";
import Todos from "../../components/Todos/Todos";

const TodosList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  console.log(todos);
  return (
    <div className="todosContainer">
      <h2 className="todos__title"> To do list </h2>
      <AddToDo addTodo={addTodo} />
      {todos.length > 0 && <Todos todoArray={todos} removeTodo={removeTodo} />}
    </div>
  );
};

export default TodosList;
