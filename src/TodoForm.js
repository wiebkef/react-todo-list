import React, { useState } from "react";

export default function TodoForm({ todos, setTodos, setIsChecked, isChecked }) {
  const [taskInput, setTaskInput] = useState("");
  function addHandler(e) {
    e.preventDefault();
    //console.log(e.target);
    const newTodos = [...todos];
    console.log(taskInput);

    // appends a task object to an array and calls set todos from App.js
    setTodos([...newTodos, { task: taskInput, isDone: false }]);
    setIsChecked([...isChecked, false]);
    //clears the input field
    e.target.reset();
  }
  function handleChange(e) {
    console.log(e.target.value);

    // sets taskInput to the typed things with every change, ie typed letter
    setTaskInput(e.target.value);
  }

  return (
    <div>
      <form onSubmit={addHandler}>
        <input type="text" onChange={handleChange}></input>
        <button>+</button>
      </form>
    </div>
  );
}
