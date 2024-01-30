import { FormEventHandler } from "react"
import styles from "./styles.module.css"

interface Props {
  onSubmit: FormEventHandler<HTMLFormElement>
}

export default function TodoForm({ onSubmit }: Props) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input type='text' placeholder='할 일을 입력하세요.' name='todo-input' />
      <button type='submit'>제출</button>
    </form>
  )
}
