import { useRef, useState } from "react"
import styles from "./styles.module.css"
import type { Item } from "../todo-container/types"

interface Props {
  id: string
  content: string
  completed: boolean
  onDelete: (id: string) => void
  onSave: (item: Item) => void
}

export default function TodoItem({
  id,
  content,
  completed,
  onDelete,
  onSave,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  // TODO input state
  const handleDelete = () => {
    onDelete(id)
  }

  const handleSave = () => {
    if (!inputRef.current?.value.trim()) return

    onSave({ id, completed, content: inputRef.current.value })

    setEditMode(false)
  }

  const [editMode, setEditMode] = useState(false)

  return (
    <li>
      <input type='checkbox' />

      {editMode ? (
        <>
          <input
            type='text'
            defaultValue={content}
            ref={inputRef}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSave()
              }
            }}
          />
          <button type='button' onClick={handleSave}>
            저장
          </button>
          <button type='button' onClick={() => setEditMode(false)}>
            취소
          </button>
        </>
      ) : (
        <span onClick={() => setEditMode(true)}>{content}</span>
      )}
      <button type='button' onClick={handleDelete}>
        삭제
      </button>
    </li>
  )
}
