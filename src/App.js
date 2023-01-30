import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { task: "something", isDone: false },
    { task: "something else", isDone: false },
    { task: "important", isDone: false },
  ]);

  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
