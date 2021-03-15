import styled from 'styled-components';

export const CenterContent = styled.div`
    display:flex;
    justify-content:center;
`

export const SignupContainer = styled.div`
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        width: 880px;
        height: 800px;
        background-color: #FFDDB5;
`

export const TitleContainer = styled.div`
    margin-top: 20px;
    text-align: center;
    font-size: 50px;
    width: 550px;
    height: 85px;
    border-bottom: 1px solid;
    margin: auto;
`

export const SignupInput = styled.input`
    width: 720px;
    height: 85px;
    margin-top: 45px;
    position: relative;
    left:50%;
    transform: translateX(-50%);
    font-size: 25px;
    padding-left: 20px;
`

export const CheckBtn = styled.button`
    width: 200px;
    height: 80px;
    background-color: #8E5454;
    color: white;
    font-size: 30px;
    font-weight: bold;
    border: none;
    margin-top: 40px;
    position:relative;
    left: 50%;
    transform:translateX(-50%);
`