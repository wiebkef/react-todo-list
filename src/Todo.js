import React, { useState } from "react";

export default function Todo({
  todos,
  todo,
  done,
  deleteTask,
  checkboxHandler,
  index,
  setTodos,
}) {
  const [editing, setEditing] = useState(false);
  const [editInput, setEditInput] = useState("");

  function editTask() {
    setEditing(true);
  }

  function saveTask(e, index) {
    console.log(index);

    e.preventDefault();
    const editedTodos = [...todos];

    if (editInput.length > 0) {
      console.log(index);
      editedTodos.splice(index, 1, { ...todo, task: editInput, isDone: false });
    }
    setTodos(editedTodos);

    setEditing(false);
  }
  function changeInput(e) {
    console.log(e.target.value);
    setEditInput(e.target.value);
  }

  return (
    <li key={index}>
      <input type="checkbox" onChange={() => checkboxHandler(index)} />
      {!editing && todo.task}
      {!editing && <button onClick={editTask}>edit</button>}
      {editing && (
        <form onSubmit={(e) => saveTask(e, index)}>
          <input
            type="text"
            onChange={changeInput}
            onBlur={(e) => saveTask(e, index)}
          ></input>
          <button>save</button>
        </form>
      )}

      <button onClick={() => deleteTask(index)}>delete</button>
    </li>
  );
}
