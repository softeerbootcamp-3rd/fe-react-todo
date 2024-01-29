import { FormEventHandler } from "react"
import TodoForm from "../todo-form"
import TodoList from "../todo-list"
import styles from "./styles.module.css"

export default function TodoContainer() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault()

    // Read the form data
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const content = formData.get("todo-input")
  }

  return (
    <div>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList></TodoList>
    </div>
  )
}
