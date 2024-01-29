import { useRef, useState } from "react";
import { URL } from "../constants/constant";

export default function Register({ updateTodoList }) {
  const contentRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: new Date().getTime(),
        content: contentRef.current.value,
        isDone: false,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => updateTodoList(data));
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
