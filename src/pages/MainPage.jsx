import styled from "styled-components";
import Header from "../component/header/Header";
import Margin from "../component/Margin/Margin";
import AddForm from "../component/AddForm/AddForm";
import TodoList from "../component/TodoList/TodoList";

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
  return (
    <TodoMainWrapper>
      <Margin height="30px" />
      <Header>My Todo App</Header>
      <Margin height="50px" />
      <AddForm></AddForm>
      <Margin height="20px" />
      {TodoArr.map(({ todoItemId, todoText, isCompleted }) => (
        <TodoList key={todoItemId} isCompleted={isCompleted}>
          {todoText}
        </TodoList>
      ))}
    </TodoMainWrapper>
  );
};

export default MainPage;
