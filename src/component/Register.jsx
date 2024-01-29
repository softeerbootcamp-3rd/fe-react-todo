export default function Register() {
  return (
    <>
      <form className="register-form">
        <input
          className="register-form__input"
          type="text"
          placeholder="할 일을 입력하세요."
        ></input>
        <button className="button register-form__button">등록</button>
      </form>
    </>
  );
}
