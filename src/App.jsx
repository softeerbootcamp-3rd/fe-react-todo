import { useState } from "react";
import Header from "./component/Header";
import Register from "./component/Register";
import TodoList from "./component/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Register />
      <TodoList />
    </>
  );
}

export default App;
