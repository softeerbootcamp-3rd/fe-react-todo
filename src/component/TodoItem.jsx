export default function TodoItem({ content }) {
  return (
    <li className="todo-item">
      <p className="todo-item__content">{content}</p>
      <button className="button todo-item__delete-button">삭제</button>
    </li>
  );
}
