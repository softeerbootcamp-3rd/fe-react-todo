import styled from "styled-components";
import AddButton from "../button/AddButton/AddButton";
import TodoInput from "../Input/TodoInput/TodoInput";

const FormStyle = styled.div`
  width: 397px;
  height: 44px;
  display: flex;
  justify-content: space-between;
`;

const AddForm = ({ setPlusTodoText, addBtnFun }) => {
  return (
    <>
      <FormStyle>
        <TodoInput type="text" setPlusTodoText={setPlusTodoText}></TodoInput>
        <AddButton addBtnFun={addBtnFun}>등록</AddButton>
      </FormStyle>
    </>
  );
};

export default AddForm;
