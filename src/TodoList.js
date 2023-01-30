import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos }) {
  function checkboxHandler(index) {
    console.log("checkbox: " + index);
    console.log("vorher: " + todos[index].isDone);
    const completed = !todos[index].isDone;
    console.log("nachher: ", completed);
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1, { ...todos[index], isDone: completed });
    setTodos(updatedTodos);
  }

  function deleteTask(index) {
    console.log(index);
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    console.log(updatedTodos);
    setTodos(updatedTodos);
  }

  function deleteAll() {
    setTodos([]);
  }

  console.log({ todos });
  return (
    <div>
      <ul>
        {todos.map((todo, i) => (
          <Todo
            todos={todos}
            todo={todo}
            checkboxHandler={checkboxHandler}
            deleteTask={deleteTask}
            index={i}
            key={i}
            setTodos={setTodos}
          />
        ))}
      </ul>
      <button>Mark all done</button>
      <button onClick={deleteAll}>Delete all tasks</button>
    </div>
  );
}
