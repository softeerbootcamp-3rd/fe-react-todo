import { FormEventHandler } from "react"
import styles from "./styles.module.css"

interface Props {
  onSubmit: FormEventHandler<HTMLFormElement>
}

export default function TodoForm({ onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <input type='text' name='todo-input' />
      <button type='submit'>제출</button>
    </form>
  )
}
