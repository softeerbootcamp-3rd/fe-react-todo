import styled from "styled-components";

const DeleteButtonStyle = styled.button`
  width: 45px;
  height: 28px;
  background-color: #6191bf;
  color: #fcfdfb;
  font-size: 14px;
  font-family: "Pretendard-Bold";
  border-radius: 8px;
  border: none;
  text-align: center;
  line-height: 28px;
  padding-right: 1px;
`;

const DeleteButton = () => {
  return <DeleteButtonStyle>삭제</DeleteButtonStyle>;
};

export default DeleteButton;
