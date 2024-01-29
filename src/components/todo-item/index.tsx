import styles from "./styles.module.css"

interface Props {
  content: string
  checked: boolean
  onDelete: () => void
  onEdit: () => void
  onSave: () => void
}

export default function TodoItem({
  content,
  checked,
  onDelete,
  onEdit,
  onSave,
}: Props) {
  return <li>{content}</li>
}
