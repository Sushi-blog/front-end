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
    width:1000px;
    height: 600px;
    margin-left: -500px;
    margin-top: -300px;
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

export const CategoryTitle = styled.div`
    width: 405px;
    height:60px;
    margin: auto;
    margin-top: 55px;
    text-align: center;
    border-bottom: 1px solid;
`

export const CategoryFixContainer = styled.div`
    margin-top: 55px;
    margin-left: 127px;
    display: flex;
    align-items: center;
`

export const CategoryInput = styled.input`
    width:450px;
    height: 40px;
    margin-left: 10px;
    background-color: ${baseColor};
    border: none;
    font-size: 25px;
    padding: 0;
`

export const FixBtn = styled.button`
    margin-left: 25px;
    width: 55px;
    height:40px;
    border: none;
    background-color: ${baseColor};
`