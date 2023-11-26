import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Plus, Minus } from "phosphor-react";
import { addItem, removeItem } from "./CartSlice";

function CartItemCard({ id, title, price, image, quantity }) {
  const cartItem = { id, title, price, image, quantity };
  const product = { id, title, price, image };
  const dispatch = useDispatch();
  const sumPrice = () => cartItem.price * cartItem.quantity;
  return (
    <CartItemWrapper>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Details>
        <Title>{title}</Title>
        <div>{sumPrice()}</div>
        <ItemAmountWrapper>
          <Button onClick={dispatch(removeItem(product))}>
            {<Minus size={32} />}
          </Button>
          <div>{price}</div>
          <Button onClick={dispatch(addItem(product))}>
            {<Plus size={32} />}
          </Button>
        </ItemAmountWrapper>
      </Details>
    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.div`
  display: flex;
`;
const ImageContainer = styled.div`
  height: 16rem;
  width: 20%;
  margin: auto;
`;
const Image = styled.img`
  width: auto;
  height: 100%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  width: 100%;
`;
const Title = styled.div`
  height: 3rem;
  font-weight: bold;
  overflow: hidden;
`;
const ItemAmountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: inherit3rem;
`;
const Button = styled.button``;

export default CartItemCard;
