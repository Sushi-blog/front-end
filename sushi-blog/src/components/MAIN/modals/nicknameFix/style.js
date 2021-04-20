import styled from 'styled-components';
import { fontColor, baseColor, modalColor, modalColor2 } from '../../../../style/index';

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
    height: 350px;
    margin-left: -400px;
    margin-top: -175px;
    background-color: ${modalColor};
    z-index:1;
`

export const TitleFont = styled.p`
    margin: 0;
    font-size: 30px;
    font-weight: bold;
    color: white;
`

export const NicknameTitle = styled.div`
    width: 350px;
    height: 50px;
    margin: auto;
    margin-top: 32px;
    text-align: center;
    border-bottom: 1px solid;
`

export const NicknameInput = styled.input`
    margin-top: 50px;
    width: 350px;
    height: 50px;
    font-size: 25px;
    position:relative;
    display: block;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${baseColor};
    border: none;
    border-radius: 5px;
`

export const NicknameFixBtn = styled.button`
    width: 200px;
    height: 50px;
    font-size: 25px;
    margin-top: 90px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${modalColor2};
    border-radius: 10px;
    border: none;
`