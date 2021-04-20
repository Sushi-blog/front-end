import styled from 'styled-components';
import { loginColor } from '../../style/index';

export const CenterContent = styled.div`
    display:flex;
    justify-content:center;
`

export const SignupContainer = styled.div`
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    width: 700px;
    height: 750px;
    background-color: ${loginColor};
    border-radius: 10px;
`

export const TitleContainer = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 60px;
    line-height: 59px;
    width: 435px;
    border-bottom: 1px solid;
    padding-bottom: 20px;
    margin: auto;
    margin-top: 58px;
`

export const SignupInput = styled.input`
    width: 580px;
    height: 80px;
    margin-top: 36px;
    position: relative;
    left:50%;
    transform: translateX(-50%);
    font-size: 25px;
    padding-left: 20px;
    border: none;
    border-radius: 10px;
    &:nth-child(2) {
        margin-top: 46px;
    }
`

export const CheckBtn = styled.button`
    width: 150px;
    height: 73px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 30px;
    font-weight: bold;
    border: none;
    margin-top: 35px;
    position:relative;
    left: 50%;
    transform:translateX(-50%);
    border-radius: 5px;
`

