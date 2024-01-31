import styled from "styled-components";
import AddButton from "../button/AddButton/AddButton";
import TodoInput from "../Input/TodoInput/TodoInput";

const AddForm = ({ addBtnFun }) => {
  return (
    <>
      <FormStyle>
        <TodoInput type="text"></TodoInput>
        <AddButton addBtnFun={addBtnFun}>등록</AddButton>
      </FormStyle>
    </>
  );
};

export default AddForm;

const FormStyle = styled.div`
  width: 397px;
  height: 44px;
  display: flex;
  justify-content: space-between;
`;
