import styled from "styled-components";
import Header from "../component/header/Header";
import Margin from "../component/Margin/Margin";
import AddForm from "../component/AddForm/AddForm";

const TodoMainWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: yellow;
`;

const MainPage = () => {
  return (
    <TodoMainWrapper>
      <Margin height="30px" />
      <Header>My Todo App</Header>
      <Margin height="50px" />
      <AddForm></AddForm>
    </TodoMainWrapper>
  );
};

export default MainPage;
