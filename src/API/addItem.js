export async function addItem(plusTodoText, todoArr, setTodoArr) {
  const isSuccess = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
  if (isSuccess) {
    setTodoArr(
      todoArr.concat({
        todoItemId: Date.now(),
        todoText: plusTodoText,
        isCompleted: false,
      })
    );
  }
}
