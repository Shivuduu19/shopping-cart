import styled from "styled-components";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../pages/cart/CartOpenSlice";

const Header = () => {
  const dispatch = useDispatch();
  // const opencart = useSelector((state) => state.cartOpen.value);
  // console.log(opencart);
  return (
    <>
      <HeaderWrapper>
        <Container>
          <LogoName>Fake Store</LogoName>
          <Navbar>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="products">Products</NavbarLink>
            <NavbarLink to="contact">Contact</NavbarLink>
            <CartButton as="button" onClick={() => dispatch(openCart())}>
              {<ShoppingCart />}
            </CartButton>
          </Navbar>
        </Container>
      </HeaderWrapper>
    </>
  );
};
const HeaderWrapper = styled.header`
  background-color: #000;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
`;
const LogoName = styled.h1`
  color: #4677d3;
  font-size: 6rem;
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 6rem;
  font-size: 2rem;
`;
const NavbarLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #005678;
  transition: trasform 0.2s ease-in;
  &:hover {
    transform: scale(1.3);
  }
`;
const CartButton = styled(NavbarLink)`
  border-radius: 40px;
  padding: 1rem;
  &:active {
    transform: scale(1.1);
  }
`;
export default Header;
