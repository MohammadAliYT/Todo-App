import { useEffect, useRef, useState } from "react";
import NoTodos from "./NoTodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";
import "./reset.css";
import { TodosContext } from "./context/TodosContext";

function App() {
  const nameInputEl = useRef(null);
  const [name, setName] = useLocalStorage("name", "");
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");

  const [idForTodo, setIdForTodo] = useLocalStorage("idForTodo", 1);

  function remaining() {
    return todos.filter((todo) => !todo.isComplete).length;
  }

  useEffect(() => {
    nameInputEl.current.focus();
    return function cleanup() {};
  }, []);

  function handleNameInput(event) {
    setName(event.target.value);
  }

  function todosFiltered() {
    if (filter === "all") {
      return todos;
    } else if (filter === "active") {
      return todos.filter((todos) => !todos.isComplete);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    }
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        idForTodo,
        setIdForTodo,
        setFilter,
        filter,
        todosFiltered,
      }}
    >
      <div className="todo-app-container">
        <div className="todo-app">
          <div className="name-container">
            <h2>What is your name ?</h2>
            <form action="#">
              <input
                ref={nameInputEl}
                type="text"
                className="todo-input"
                placeholder="What is your name ?"
                value={name}
                onChange={handleNameInput}
              ></input>
            </form>
            {name && <p className="name-label">Hello, {name} </p>}
          </div>
          <h2>Todo App</h2>
          <TodoForm />

          {todos.length > 0 ? <TodoList /> : <NoTodos />}
        </div>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
