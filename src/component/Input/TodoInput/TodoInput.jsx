import { useContext } from "react";
import styled from "styled-components";
import { PlusTodoText, SetPlusTodoText } from "../../../pages/MainPage";

const TodoInput = () => {
  const plusTodoText = useContext(PlusTodoText);
  const setPlusTodoText = useContext(SetPlusTodoText);

  const todoInputChange = (e) => {
    setPlusTodoText(e.target.value);
  };

  return (
    <TodoInputStyle
      value={plusTodoText}
      placeholder="할일을 입력하세요"
      onChange={todoInputChange}
    ></TodoInputStyle>
  );
};

export default TodoInput;

const TodoInputStyle = styled.input`
  width: 324px;
  height: 44px;
  font-family: "Pretendard-Medium";
  font-size: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  border: 1px solid #7e6363;
  border-radius: 8px;
`;
