import styled from "styled-components";

const TodoInputStyle = styled.input`
  width: 324px;
  height: 44px;
  font-family: "Pretendard-regular";
  font-size: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  border: 1px solid black;
`;

const TodoInput = ({ setPlusTodoText }) => {
  const todoInputChange = (e) => {
    setPlusTodoText(e.target.value);
  };

  return (
    <>
      <TodoInputStyle
        placeholder="할일을 입력하세요"
        onChange={todoInputChange}
      ></TodoInputStyle>
    </>
  );
};

export default TodoInput;
