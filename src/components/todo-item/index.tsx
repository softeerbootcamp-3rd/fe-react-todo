import { useState } from "react"
import styles from "./styles.module.css"

interface Props {
  id: string
  content: string
  completed: boolean
  onDelete: (id: string) => void
  onSave: (id: string) => void
}

export default function TodoItem({
  id,
  content,
  completed,
  onDelete,
  onSave,
}: Props) {
  // TODO input state
  const handleDelete = () => {
    onDelete(id)
  }

  const [editMode, setEditMode] = useState(false)

  return (
    <li>
      <input type='checkbox' />

      {editMode ? (
        <>
          <input type='text' defaultValue={content} />
          <button type='button'>저장</button>
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
