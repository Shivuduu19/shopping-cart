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
  animation: 2s ease ${fadein};
`;
const HomeInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: 2s ${fadein} ease;
`;
const IntroInfo = styled.div`
  color: #1c0adc;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
`;
const IntoBigger = styled.div`
  color: bisque;
  font-size: 4rem;
  font-weight: bold;
`;
const Button = styled.button`
  background-color: #000;
  text-transform: uppercase;
  border-radius: 20px;
  padding: 1rem;
  /* color: #134913; */
`;
export { fadein };
