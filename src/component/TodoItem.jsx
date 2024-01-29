export default function TodoItem() {
  return (
    <li className="todo-item">
      <p className="todo-item__content">할 일 입니다.</p>
      <button className="button todo-item__delete-button">삭제</button>
    </li>
  );
}
