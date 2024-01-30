import { useContext, useEffect, useState } from "react";

import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

export default function TodoList() {
  const { todoList } = useContext(TodoContext);

  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todoList.map((data) => (
          <TodoItem
            key={data.id.toString()}
            content={data.content}
            id={data.id}
          />
        ))}
      </ul>
    </div>
  );
}
