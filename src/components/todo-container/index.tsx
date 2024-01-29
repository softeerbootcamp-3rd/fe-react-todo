import { FormEventHandler, useState } from "react"
import TodoForm from "../todo-form"
import TodoList from "../todo-list"
import styles from "./styles.module.css"
import { type Item } from "./types"
import TodoItem from "../todo-item"

export default function TodoContainer() {
  const [items, setItems] = useState<Item[]>([])

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

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleSave = (newItem: Item) => {
    setItems((prev) => {
      const index = prev.findIndex(({ id }) => newItem.id === id)
      const newItems = [...prev]
      newItems.splice(index, 1, newItem)
      return newItems
    })
  }

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
