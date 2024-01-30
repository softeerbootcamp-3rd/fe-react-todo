import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoItem({ id, content }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <li className="todo-item">
      <p className="todo-item__content">{content}</p>
      <button
        className="button todo-item__delete-button"
        onClick={() => deleteTodo(id)}
      >
        삭제
      </button>
    </li>
  );
}
