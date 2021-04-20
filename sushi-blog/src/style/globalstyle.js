import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: "NanumGothic";
        background: #F4F4F4;
    }
    a{
        text-decoration: none;
    }
    button{
        outline:none;
        cursor:pointer;
    }
    input{
        outline:none;
    }
`

export default GlobalStyle;