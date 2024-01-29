import styled from "styled-components";

const DeleteButtonStyle = styled.button`
  width: 45px;
  height: 28px;
  background-color: #7e6363;
  color: white;
  font-size: 14px;
  font-family: "Pretendard-Bold";
  border-radius: 8px;
  border: none;
  text-align: center;
  line-height: 28px;
  padding-right: 1px;
  &:hover {
    background-color: #ebd9b4;
  }
`;

const DeleteButton = ({ deleteFun }) => {
  return (
    <DeleteButtonStyle
      onClick={() => {
        deleteFun();
      }}
    >
      삭제
    </DeleteButtonStyle>
  );
};

export default DeleteButton;
