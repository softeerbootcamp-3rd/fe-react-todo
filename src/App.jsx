import { useState, useEffect } from "react";
import Header from "./component/Header";
import Register from "./component/Register";
import TodoList from "./component/TodoList";
import ToDoContextProvider from "./context/TodoContext";

function App() {
  return (
    <>
      <Header />
      <ToDoContextProvider>
        <Register />
        <TodoList />
      </ToDoContextProvider>
    </>
  );
}

export default App;
