import { createContext, useState, useEffect } from "react";
import { URL } from "../constants/constant";

export const TodoContext = createContext({
  todoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

export default function ToDoContextProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodoList(data);
      });
  }, [URL]);

  function postTodoList(content) {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        isDone: false,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => setTodoList([...todoList, data]));
  }

  function deleteTodo(id) {
    fetch(URL + `${id}`, { method: "DELETE" }).then((res) => {
      setTodoList(todoList.filter((data) => data.id !== id));
    });
  }

  const ctxValue = {
    todoList: todoList,
    addTodo: postTodoList,
    deleteTodo: deleteTodo,
  };
  return (
    <TodoContext.Provider value={ctxValue}>{children}</TodoContext.Provider>
  );
}
