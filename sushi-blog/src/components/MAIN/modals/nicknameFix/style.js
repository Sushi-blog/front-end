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
    height: 350px;
    margin-left: -400px;
    margin-top: -175px;
    background-color: #FFDFB9;
    z-index:1;
`

export const TitleFont = styled.p`
    margin: 0;
    font-size: 30px;
    color: ${fontColor};
`

export const Font = styled.p`
    width: 200px;
    margin: 0;
    font-size: 30px;
    color: ${fontColor};
    float:left;
`

export const NicknameTitle = styled.div`
    width: 405px;
    height:60px;
    margin: auto;
    margin-top: 35px;
    text-align: center;
    border-bottom: 1px solid;
`

export const NicknameInput = styled.input`
    margin-top: 45px;
    width: 350px;
    height: 60px;
    font-size: 25px;
    position:relative;
    left: 50%;
    transform: translateX(-50%);
`