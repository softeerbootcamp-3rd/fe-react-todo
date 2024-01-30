import { VITE_APP_KEY } from "./apiKey";
export async function completeItem(todoItemId, isCompleted) {
  await fetch(`${VITE_APP_KEY}/todo/${todoItemId}`, {
    method: "PATCH",
    body: JSON.stringify({ isCompleted: !isCompleted }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
