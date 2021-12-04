import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Antonio', sans-serif;
    font-size:62.5%;
}
`;
