import React, { useState, useEffect } from "react";

export default function Todo({
  todos,
  todo,
  deleteTask,
  checkTask,
  index,
  setTodos,
  isChecked,
}) {
  const [editing, setEditing] = useState(false);
  const [editInput, setEditInput] = useState(todo.task);

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

  useEffect(() => {}, [editInput]);

  return (
    <li key={index}>
      <input
        type="checkbox"
        checked={isChecked[index]}
        onChange={() => checkTask(index)}
      />
      {!editing && todo.task}
      {!editing && <button onClick={editTask}>edit</button>}
      {editing && (
        <form onSubmit={(e) => saveTask(e, index)}>
          <input
            type="text"
            onChange={(e) => setEditInput(e.target.value)}
            onBlur={(e) => saveTask(e, index)}
            value={editInput}
          ></input>
          <button>save</button>
        </form>
      )}

      <button onClick={() => deleteTask(index)}>delete</button>
    </li>
  );
}
