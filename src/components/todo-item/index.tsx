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

  return (
    <li>
      {content}
      <button type='button' onClick={handleDelete}>
        삭제
      </button>
    </li>
  )
}
