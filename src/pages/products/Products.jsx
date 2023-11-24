import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { setProducts } from "./ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { fadein } from "../Home";
const Products = () => {
  const products = useSelector((state) => state.products.value);
  // console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    dispatch(setProducts(await fetchProducts()));
  };

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };
  console.log(products);

  return (
    <ProductsWrapper>
      {products.map((product) => (
        <ProductCard
          key={uuidv4()}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </ProductsWrapper>
  );
};
const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  font-size: 2rem;
  animation: ${fadein} 2s ease;
`;
export default Products;
