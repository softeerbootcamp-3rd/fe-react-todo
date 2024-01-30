import { useState } from "react";
import { URL } from "../constants/constant";

export default function TodoItem({ id, content }) {
  const [isNull, setIsNull] = useState(false);

  function deleteTodo(id) {
    fetch(URL + `${id}`, { method: "DELETE" }).then((rest) => setIsNull(true));
  }

  if (isNull) {
    return null;
  }

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
