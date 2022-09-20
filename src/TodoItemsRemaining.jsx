import React, { useContext, useMemo } from "react";
import { TodosContext } from "./context/TodosContext";

function TodoItemsRemaining() {
  const { todos } = useContext(TodosContext);

  function remainingCalculations() {
    return todos.filter((todo) => !todo.isComplete).length;
  }
  const remaining = useMemo(remainingCalculations, [todos]);
  return <span>{remaining} Items Remaining</span>;
}

export default TodoItemsRemaining;
