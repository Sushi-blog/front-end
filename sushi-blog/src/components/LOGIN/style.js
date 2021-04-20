import styled from 'styled-components';
import { baseColor, loginColor } from '../../style/index';

export const CenterContent = styled.div`
    display:flex;
    justify-content:center;
`

export const LoginContainer = styled.div`
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    width: 700px;
    height: 625px;
    background-color: ${loginColor};
    border-radius: 10px;
`

export const TitleContainer = styled.div`
    text-align: center;
    font-size: 60px;

    p{
        margin: 0;
    }
    width: 435px;
    padding-bottom: 20px;
    border-bottom: 1px solid;
    margin: auto;
    margin-top: 40px;
    font-weight: bold;
`

export const LoginInput = styled.input`
    width: 580px;
    height: 80px;
    margin-top: 50px;
    position: relative;
    left:50%;
    transform: translateX(-50%);
    font-size: 25px;
    padding-left: 20px;
    border: none;
    border-radius: 10px;
`

export const CheckBtn = styled.button`
    width: 150px;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 30px;
    font-weight: bold;
    border: none;
    margin-top: 50px;
    position:relative;
    left: 50%;
    transform:translateX(-50%);
    border: none;
    border-radius: 5px;
`

export const SignUp = styled.p`
    font-size: 20px;
    text-decoration: underline solid;
    cursor: pointer;
    margin-top: 30px;
    text-align: center;
`