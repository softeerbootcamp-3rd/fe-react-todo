import styled from "styled-components";

const AddButtonStyle = styled.button`
  background-color: #5e9034;
  width: 65px;
  height: 44px;
  border-radius: 8px;
  color: #fcfdfb;
  font-size: 20px;
  font-family: "Pretendard-bold";
  text-align: center;
  line-height: 44px;
  border: none;
`;

const AddButton = () => {
  return (
    <>
      <AddButtonStyle>등록</AddButtonStyle>
    </>
  );
};

export default AddButton;
