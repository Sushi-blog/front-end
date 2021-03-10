import styled from 'styled-components';
import { fontColor, baseColor } from '../../../../style/index';

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
    background-color: #FFDFB9;
    z-index:1;
    display: flex;
    justify-content: center;
`

export const Title = styled.div`
    margin-top: 55px;
    text-align: center;
    width: 480px;
    height: 50px;
    border-bottom: 1px solid;
    color: ${fontColor};
`

export const TitleFont = styled.p`
    margin: 0;
    font-size: 30px;
    color: ${fontColor};
` 

export const WithdrawalBtn = styled.button`
    width: 200px;
    height: 50px;
    font-size: 25px;
    margin-top: 55px;
    background-color: ${baseColor};
    border: none;
`