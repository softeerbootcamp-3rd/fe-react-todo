import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoItem({ id, content, isDone }) {
  const { deleteTodo, putTodo } = useContext(TodoContext);

  function onClick(e) {
    putTodo({
      id: id,
      content: content,
      isDone: !isDone,
    });
  }

  return (
    <li className={isDone ? "todo-item isDone" : "todo-item"} onClick={onClick}>
      <p className="todo-item__content">{content}</p>
      <button
        className="button todo-item__delete-button"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(id);
        }}
      >
        삭제
      </button>
    </li>
  );
}
