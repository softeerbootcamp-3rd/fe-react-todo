import { PropsWithChildren } from "react"
import styles from "./styles.module.css"

export default function TodoList({ children }: PropsWithChildren) {
  return <ul className={styles.todolist}>{children}</ul>
}
