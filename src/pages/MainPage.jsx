import styled from "styled-components";
import Header from "../component/header/Header";
import Margin from "../component/Margin/Margin";
import AddForm from "../component/AddForm/AddForm";
import TodoList from "../component/TodoList/TodoList";
import { addItem } from "../API/addItem";
import { deleteItem } from "../API/deleteItem";
import { createContext, useEffect, useState } from "react";
import { completeItem } from "../API/completeItem";
import { setAllItem } from "../API/setAllItem";

export const PlusTodoText = createContext();
export const SetPlusTodoText = createContext();

const MainPage = () => {
  const [plusTodoText, setPlusTodoText] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  useEffect(() => {
    setAllItem(setTodoArr);
  }, []);

  return (
    <TodoMainWrapper>
      <Margin height="30px" />
      <Header>My Todo App</Header>
      <Margin height="50px" />
      <PlusTodoText.Provider value={plusTodoText}>
        <SetPlusTodoText.Provider value={setPlusTodoText}>
          <AddForm
            addBtnFun={() => {
              addItem(plusTodoText, todoArr, setTodoArr, setPlusTodoText);
            }}
          ></AddForm>
        </SetPlusTodoText.Provider>
      </PlusTodoText.Provider>
      <Margin height="20px" />
      {todoArr.map(({ todoItemId, todoText, isCompleted }) => (
        <TodoList
          key={todoItemId}
          isCompleted={isCompleted}
          deleteItem={() => {
            deleteItem(todoItemId, todoArr, setTodoArr);
          }}
          completeItem={() => {
            completeItem(todoItemId, isCompleted);
          }}
        >
          {todoText}
        </TodoList>
      ))}
    </TodoMainWrapper>
  );
};

export default MainPage;

const TodoMainWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
