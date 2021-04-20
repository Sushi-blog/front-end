import styled from 'styled-components';
import { baseColor, modalColor, modalColor2 } from '../../../../style/index';

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
    width: 870px;
    height: 520px;
    margin-left: -500px;
    margin-top: -300px;
    background-color: ${modalColor};
    z-index:1;
`

export const TitleFont = styled.p`
    margin: 0;
    font-size: 40px;
    font-weight: bold;
    color: white;
`

export const Font = styled.p`
    width: 340px;
    background-color: ${baseColor};
    margin: 0;
    padding-top: 17px;
    padding-bottom: 17px;
    font-size: 30px;
    text-align: center;
    float:left;
`

export const CategoryTitle = styled.div`
    width: 405px;
    margin: auto;
    margin-top: 45px;
    text-align: center;
`

export const CategoryFixContainer = styled.div`
    margin-left: 52px;
    display: flex;
    align-items: center;
    &:nth-child(1) {
        margin-top: 40px;
    }
    margin-top: 24px;
`

export const CategoryInput = styled.input`
    width: 340px;
    height: 69px;
    margin-left: 25px;
    background-color: ${baseColor};
    border: none;
    font-size: 30px;
    text-align: center;
    padding: 0;
`

export const FixBtn = styled.button`
    margin-left: 13px;
    font-size: 18px;
    width: 70px;
    height:45px;
    border: none;
    border-radius: 20px;
    background-color: ${modalColor2};
`