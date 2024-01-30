import { FormEventHandler, useReducer } from "react"
import TodoForm from "../todo-form"
import TodoList from "../todo-list"
import { type Item } from "./types"
import TodoItem from "../todo-item"
import { todoReducer } from "../../reducers/todo-reducer"

export default function TodoContainer() {
  const [items, dispatch] = useReducer(todoReducer, [])

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
    dispatch({ type: "ADD", payload: { item: newItem } })

    form.reset()
  }

  const handleDelete = (id: string) => {
    dispatch({ type: "DELETE", payload: { id } })
  }

  const handleSave = (newItem: Item) => {
    dispatch({ type: "EDIT", payload: { item: newItem } })
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
