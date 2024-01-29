import { FormEventHandler, useState } from "react"
import TodoForm from "../todo-form"
import TodoList from "../todo-list"
import styles from "./styles.module.css"
import TodoItem from "../todo-item"

interface TodoItem {
  id: string
  content: string
  completed: boolean
}

export default function TodoContainer() {
  const [items, setItems] = useState<TodoItem[]>([])

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const content = formData.get("todo-input")?.toString()

    if (!content?.trim()) return

    const newItem = {
      id: new Date().getTime().toString(),
      content,
      completed: false,
    }
    setItems((prev) => [newItem, ...prev])

    form.reset()
  }

  const handleDelete = (id: string) => {}

  const handleSave = (id: string) => {}

  return (
    <div>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              completed={item.completed}
              content={item.content}
              onDelete={handleDelete}
              onSave={handleSave}
            />
          )
        })}
      </TodoList>
    </div>
  )
}
