import styled from "styled-components";
import AddButton from "../button/AddButton/AddButton";
import TodoInput from "../Input/TodoInput/TodoInput";

const FormStyle = styled.div`
  width: 397px;
  height: 44px;
  display: flex;
  justify-content: space-between;
`;

const AddForm = ({ addBtnFun, plusTodoText, setPlusTodoText }) => {
  <>
    <FormStyle>
      <TodoInput
        type="text"
        plusTodoText={plusTodoText}
        setPlusTodoText={setPlusTodoText}
      ></TodoInput>
      <AddButton addBtnFun={addBtnFun}>등록</AddButton>
    </FormStyle>
  </>;
};

export default AddForm;
