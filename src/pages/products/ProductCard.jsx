import styled from "styled-components";

const ProductCard = ({ image, title, price }) => {
  return (
    <>
      <CardWrapper>
        <ImageContainer>
          <Image src={image} alt={title} />
        </ImageContainer>
        <AboutCard>
          <Info>
            <Title>{title}</Title>
            <div>{price}</div>
          </Info>
          <Button>Add to Cart</Button>
        </AboutCard>
      </CardWrapper>
    </>
  );
};
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  background-color: #bab4b4;
  border-radius: 12px;
  /* font-size: 3rem; */
  /* width: 100%; */
`;
const ImageContainer = styled.div`
  padding: 1rem;
  height: 20rem;

  margin: 0 auto;
`;
const Image = styled.img`
  height: 100%;
`;
const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem;
  padding-top: 4rem;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
`;
const Title = styled.div`
  /* font-size: 1rem; */
  font-weight: bold;
`;
const Button = styled.button`
  color: #000;
`;
export default ProductCard;
