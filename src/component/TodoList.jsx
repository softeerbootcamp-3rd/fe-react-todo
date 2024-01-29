import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        <TodoItem />
      </ul>
    </div>
  );
}
