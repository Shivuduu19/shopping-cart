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
body{
background-color: aliceblue;
}
@media (max-width: 1600px) {
    font-size: 55%;
}
@media (max-width: 1400px) {
    font-size: 45%;
}
a{
    text-decoration: none;
}`;
export default GlobalStyle;
