import styled from "styled-components";

const Margin = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width + "px" || "100%"};
`;

export default Margin;
