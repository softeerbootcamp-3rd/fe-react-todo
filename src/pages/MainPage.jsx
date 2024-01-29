import styled from "styled-components";
import Header from "../component/header/Header";
import Margin from "../component/Margin/Margin";
import AddForm from "../component/AddForm/AddForm";
import TodoList from "../component/TodoList/TodoList";
<<<<<<< HEAD
<<<<<<< HEAD
import { addItem } from "../API/addItem";
import { deleteItem } from "../API/deleteItem";
import { useEffect, useState } from "react";
import { completeItem } from "../API/completeItem";

const TodoMainWrapper = styled.div`
  width: 100%;
  height: auto;
=======
=======
import { addItem } from "../API/addItem";
import { deleteTodo } from "../API/deleteTodo";
import { useEffect, useState } from "react";
<<<<<<< HEAD
>>>>>>> 1dbb780 (feat#4_add_button_handler)
=======
import { completeItem } from "../API/completeItem";
>>>>>>> 571e54f (feat#5_completeItem_handler)

const TodoMainWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: yellow;
>>>>>>> 9c88a56 (feat#3_add_todolist_component)
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
<<<<<<< HEAD
<<<<<<< HEAD
      <AddForm
        plusTodoText={plusTodoText}
        setPlusTodoText={setPlusTodoText}
        addBtnFun={() => {
          addItem(plusTodoText, todoArr, setTodoArr, setPlusTodoText);
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
=======
      <AddForm></AddForm>
      <Margin height="20px" />
      {TodoArr.map(({ todoItemId, todoText, isCompleted }) => (
        <TodoList key={todoItemId} isCompleted={isCompleted}>
>>>>>>> 9c88a56 (feat#3_add_todolist_component)
=======
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
>>>>>>> 1dbb780 (feat#4_add_button_handler)
          {todoText}
        </TodoList>
      ))}
    </TodoMainWrapper>
  );
};

export default MainPage;
