import styled from "styled-components";
const Button = (type, content) => {
  return <ButtonWrapper type={type}>{content}</ButtonWrapper>;
};
const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 50px;
`;
export default Button;
