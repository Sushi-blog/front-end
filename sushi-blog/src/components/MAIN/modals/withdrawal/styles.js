import styled from 'styled-components';
import { baseColor, modalColor2 } from '../../../../style/index';

export const WhiteBox = styled.div`
    z-index: 1;
    top: 0%;
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: #c4c4c4;
    opacity: 0.5;
`

export const MainContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width:800px;
    height: 260px;
    margin-left: -400px;
    margin-top: -130px;
    background-color: ${modalColor2};
    z-index:1;
    display: flex;
    justify-content: center;
    
`

export const Title = styled.div`
    position: relative;
    margin-top: 55px;
    text-align: center;
    width: 480px;
    height: 50px;
    padding-bottom: 19px;
    border-bottom: 1px solid;
`

export const TitleFont = styled.p`
    margin: 0;
    font-size: 30px;
` 

export const WithdrawalBtn = styled.button`
    position: relative;
    width: 200px;
    height: 50px;
    font-size: 30px;
    line-height: 30px;
    margin-top: 60px;
    background-color: ${baseColor};
    border: none;
`