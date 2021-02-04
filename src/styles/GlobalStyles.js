import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }


    body {
        line-height:1.7;
        box-sizing:border-box;
        color:${({ theme }) => theme.colors.white};
        background-color:${({ theme }) => theme.colors.verydarkblue};
        font-weight:200;
        font-family:${({ theme }) => theme.fonts.manrope}
    }

    html {
        font-size:62.5%;
    }
`;

export default GlobalStyle;
