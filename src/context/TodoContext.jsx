import { createContext, useState, useEffect } from "react";
import { URL } from "../constants/constant";

export const TodoContext = createContext({
  todoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
  putTodo: () => {},
});

export default function ToDoContextProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  // 초기 데이터 Get
  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodoList(data);
      });
  }, [URL]);

  // todo POST
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

  // todo DELETE
  function deleteTodo(id) {
    fetch(URL + `${id}`, { method: "DELETE" }).then((res) => {
      setTodoList(todoList.filter((data) => data.id !== id));
    });
  }

  function putTodo(todo) {
    fetch(URL + todo.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const newTodoList = todoList.map((item) =>
          item.id === data.id ? data : item
        );
        setTodoList(newTodoList);
      });
  }

  const ctxValue = {
    todoList: todoList,
    addTodo: postTodoList,
    deleteTodo: deleteTodo,
    putTodo: putTodo,
  };

  return (
    <TodoContext.Provider value={ctxValue}>{children}</TodoContext.Provider>
  );
}
