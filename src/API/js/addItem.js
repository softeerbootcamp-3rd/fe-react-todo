import { VITE_APP_KEY } from "../key/apiKey";

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
  const id = Date.now();
  const isSuccess = await fetch(`${VITE_APP_KEY}/todo`, {
    method: "POST",
    body: JSON.stringify({
      id: id.toString(),
      todoText: plusTodoText,
      isCompleted: false,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (isSuccess) {
    setTodoArr(
      todoArr.concat({
        todoItemId: id,
        todoText: plusTodoText,
        isCompleted: false,
      })
    );
  } else {
    alert("서버 요청에 실패했습니다.");
  }
  setPlusTodoText("");
}
