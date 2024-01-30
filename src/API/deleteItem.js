import { VITE_APP_KEY } from "./apiKey";
export async function deleteItem(todoItemId, todoArr, setTodoArr) {
  const isSuccess = await fetch(`${VITE_APP_KEY}/todo/${todoItemId}`, {
    method: "DELETE",
  });
  if (isSuccess) {
    setTodoArr(todoArr.filter((todo) => todo.todoItemId !== todoItemId));
  }
}
