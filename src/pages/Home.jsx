import styled, { keyframes } from "styled-components";
import homeimage from "../assets/homepageImage.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <Image src={homeimage} />
        <HomeInfo>
          <IntroInfo>A place for grate fashion</IntroInfo>
          <IntoBigger>Become the unique person </IntoBigger>
          <Link to="products">
            <Button>shop now</Button>
          </Link>
        </HomeInfo>
      </HomeWrapper>
    </>
  );
};
export default Home;
const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  background-color: #00ff55;
  @media (max-width: 460px) {
    flex-direction: column;
  }
`;
const fadein = keyframes`
  0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
        }
    `;
const Image = styled.img`
  width: 40rem;
  border-radius: 50px;
  animation: 2s ease ${fadein};
  @media (max-width: 460px) {
    /* display: none; */
    width: 100%;
  }
`;
const HomeInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: 2s ${fadein} ease;
  @media (max-width: 1024px) {
    align-items: center;
  }
`;
const IntroInfo = styled.div`
  color: #1c0adc;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 460px) {
    font-size: 1.5rem;
  }
`;
const IntoBigger = styled.div`
  color: bisque;
  font-size: 4rem;
  font-weight: bold;
  @media (max-width: 1024px) {
    text-align: center;
  }
  @media (max-width: 460px) {
    font-size: 3rem;
  }
`;
const Button = styled.button`
  background-color: #000;
  text-transform: uppercase;
  border-radius: 20px;
  padding: 1rem;
  /* color: #134913; */
`;
export { fadein };
