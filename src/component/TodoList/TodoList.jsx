import styled from "styled-components";
import DeleteButton from "../button/DeleteButton/DeleteButton";
import { useState } from "react";

const TodoListBox = styled.div`
  width: 397px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  align-items: center;
  line-height: 44px;
  margin-top: 5px;
`;

const TodoText = styled.p`
  font-size: 18px;
  font-family: "Pretendard-Medium";
  color: #7e6363;
  text-decoration: ${(props) => (props.putComplete ? "line-through" : "none")};
`;

const TodoList = ({ children, isCompleted, deleteItem, completeItem }) => {
  const [putComplete, setPutComplete] = useState(isCompleted);
  return (
    <TodoListBox>
      <TodoText
        putComplete={putComplete}
        onClick={() => {
          completeItem();
          setPutComplete(!putComplete);
        }}
      >
        {children}
      </TodoText>
      <DeleteButton deleteFun={deleteItem} />
    </TodoListBox>
  );
};

export default TodoList;
