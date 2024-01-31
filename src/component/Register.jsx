import { useContext, useRef } from "react";
import { TodoContext } from "../context/TodoContext";

export default function Register() {
  const contentRef = useRef(null);
  const { addTodo } = useContext(TodoContext);

  function onSubmit(e) {
    e.preventDefault();
    addTodo(contentRef.current.value);
    contentRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={onSubmit} className="register-form">
        <input
          className="register-form__input"
          type="text"
          placeholder="할 일을 입력하세요."
          ref={contentRef}
        ></input>
        <button className="button register-form__button">등록</button>
      </form>
    </>
  );
}
