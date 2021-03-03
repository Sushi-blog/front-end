import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        background: #F5EFEF;
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