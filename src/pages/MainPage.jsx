import styled from "styled-components";
import Header from "../component/header/Header";
import Margin from "../component/Margin/Margin";

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
    </TodoMainWrapper>
  );
};

export default MainPage;
