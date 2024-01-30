import styled from "styled-components";

const AddButtonStyle = styled.button`
  width: 65px;
  height: 44px;
  border-radius: 8px;
  background-color: #a87c7c;
  color: white;
  font-size: 20px;
  font-family: "Pretendard-bold";
  text-align: center;
  line-height: 44px;
  border: none;
  &:hover {
    background-color: #ebd9b4;
  }
`;

const AddButton = ({ addBtnFun }) => {
  return (
    <>
      <AddButtonStyle
        onClick={() => {
          addBtnFun();
        }}
      >
        등록
      </AddButtonStyle>
    </>
  );
};

export default AddButton;
