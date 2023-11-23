import styled from "styled-components";

const Main = ({ outlet }) => {
  return <MainWrapper>{outlet}</MainWrapper>;
};
const MainWrapper = styled.main`
  margin: 0 auto;
  padding: 3rem;
`;
export default Main;
