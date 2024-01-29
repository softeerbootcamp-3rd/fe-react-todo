import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Header from "./components/header"
import TodoContainer from "./components/todo-container"

function App() {
  return (
    <div>
      <Header />
      <TodoContainer />
    </div>
  )
}

export default App
