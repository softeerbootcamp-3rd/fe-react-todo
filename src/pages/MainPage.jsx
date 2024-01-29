import styled from "styled-components";
import Header from "../component/header/Header";
import Margin from "../component/Margin/Margin";
import AddForm from "../component/AddForm/AddForm";
import TodoList from "../component/TodoList/TodoList";
import { addItem } from "../API/addItem";
import { deleteItem } from "../API/deleteItem";
import { useEffect, useState } from "react";
import { completeItem } from "../API/completeItem";

const TodoMainWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoArr = [
  {
    todoItemId: 1,
    todoText: "자바스크립트 공부하기",
    isCompleted: false,
  },
  {
    todoItemId: 2,
    todoText: "자바스크립트 공부하기",
    isCompleted: false,
  },
  {
    todoItemId: 3,
    todoText: "자바스크립트 공부하기",
    isCompleted: true,
  },
];

const MainPage = () => {
  const [plusTodoText, setPlusTodoText] = useState("");
  const [todoArr, setTodoArr] = useState(TodoArr);

  return (
    <TodoMainWrapper>
      <Margin height="30px" />
      <Header>My Todo App</Header>
      <Margin height="50px" />
      <AddForm
        setPlusTodoText={setPlusTodoText}
        addBtnFun={() => {
          addItem(plusTodoText, todoArr, setTodoArr);
        }}
      ></AddForm>
      <Margin height="20px" />
      {todoArr.map(({ todoItemId, todoText, isCompleted }) => (
        <TodoList
          key={todoItemId}
          isCompleted={isCompleted}
          deleteItem={() => {
            deleteItem(todoItemId, todoArr, setTodoArr);
          }}
          completeItem={() => {
            completeItem(todoItemId);
          }}
        >
          {todoText}
        </TodoList>
      ))}
    </TodoMainWrapper>
  );
};

export default MainPage;
