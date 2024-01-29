export async function addItem(
  plusTodoText,
  todoArr,
  setTodoArr,
  setPlusTodoText
) {
  if (plusTodoText.trim().length === 0) {
    alert("할 일을 입력해주세요.");
    return;
  }
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
  setPlusTodoText("");
}
