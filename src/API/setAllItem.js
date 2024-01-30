import { VITE_APP_KEY } from "./apiKey";

export const setAllItem = async (setTodoArr) => {
  await fetch(`${VITE_APP_KEY}/todo`)
    .then((res) => res.json())
    .then((json) => {
      let todoArr = [];
      json.forEach((element) => {
        todoArr.push({
          todoItemId: element.id,
          todoText: element.todoText,
          isCompleted: element.isCompleted,
        });
      });
      setTodoArr(todoArr);
    });
};
