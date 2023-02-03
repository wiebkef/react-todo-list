import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos, setIsChecked, isChecked }) {
  function checkTask(index) {
    const newChecked = [...isChecked];
    newChecked.splice(index, 1, !isChecked[index]);
    setIsChecked(newChecked);
  }

  function checkAllTasks() {
    let allChecked;
    if (isChecked.includes(false)) {
      // 1 not done -> mark all done
      allChecked = isChecked.map((check) => (check = true));
    } else {
      allChecked = isChecked.map((check) => (check = false));
    }

    setIsChecked(allChecked);
  }

  function deleteTask(index) {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  function deleteAll() {
    setTodos([]);
  }

  //console.log({ todos });
  return (
    <div>
      <ul>
        {todos.map((todo, i) => (
          <Todo
            todos={todos}
            todo={todo}
            deleteTask={deleteTask}
            checkTask={checkTask}
            index={i}
            key={i}
            setTodos={setTodos}
            isChecked={isChecked}
          />
        ))}
      </ul>
      <button onClick={checkAllTasks}>
        {isChecked.includes(false) ? "Mark all done" : "Mark all undone"}
      </button>
      <button onClick={deleteAll}>Delete all tasks</button>
    </div>
  );
}
