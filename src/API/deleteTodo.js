export async function deleteTodo(todoItemId, todoArr, setTodoArr) {
  let isSuccess = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
  if (isSuccess) {
    setTodoArr(todoArr.filter((todo) => todo.todoItemId !== todoItemId));
  }
}
