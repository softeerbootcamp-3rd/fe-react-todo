import { useState, useEffect } from "react";
import Header from "./component/Header";
import Register from "./component/Register";
import TodoList from "./component/TodoList";
import { URL } from "./constants/constant";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => setTodoList(data));
  }, [URL]);

  function updateTodoList(todo) {
    setTodoList([...todoList, todo]);
  }
  return (
    <>
      <Header />
      <Register updateTodoList={updateTodoList} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
