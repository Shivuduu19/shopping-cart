import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html{
    font-size: 70%;
    position: relative;
    min-height: 100%;
}
a{
    text-decoration: none;
}`;
export default GlobalStyle;
