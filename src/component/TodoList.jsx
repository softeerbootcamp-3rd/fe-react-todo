import { useEffect, useState } from "react";

import TodoItem from "./TodoItem";

export default function TodoList({ todoList }) {
  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todoList.map((data) => (
          <TodoItem key={data.id.toString()} content={data.content} />
        ))}
      </ul>
    </div>
  );
}
