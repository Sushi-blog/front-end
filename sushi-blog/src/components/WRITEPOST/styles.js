import styled from 'styled-components';
import {baseColor} from '../../style/index';

export const Title = styled.p`
    text-align:center;
    font-size: 50px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 0;
`

export const CenterContainer = styled.div`
    margin-top: 55px;
    display:flex;
    justify-content:center;
`

export const WritePostContainer = styled.div`
    width: 1400px;
    height: 600px;
    background-color: #FFDDB5;
`

export const WriteHeader = styled.div`
    display:flex;
    justify-content: space-around;
    align-items:center;
    margin-top: 50px;
`

export const TitleInput = styled.input`
    width: 530px;
    height: 40px;
    font-size: 25px;
    padding-left: 20px;
    background-color: ${baseColor};
    border: none;
`

export const CategoryInput = styled.select`
    width: 530px;
    height: 30px;
    outline: none;
    border: none;
    background-color: ${baseColor};
    padding-left:10px;
    
    option {
        background-color: ${baseColor};
        margin-top: 20px;
    }
`

export const ContentContainer = styled.textarea`
    font-size: 30px;
    resize: none;
    border: none;
    outline: none;
    width: 1220px;
    height: 300px;
    padding-left: 20px;
    padding-top: 20px;
    background-color: ${baseColor};
`

export const WriteFooter = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .input{
        width: 730px;
        height: 35px;
        background-color: ${baseColor};
        cursor: pointer;
        display: flex;
        align-items:center;
        padding-left: 22px;
        font-size: 20px;
    }
`

export const FileInput = styled.input`
    display: none;
`

export const WriteBtn = styled.button`
    width: 180px;
    height: 40px;
    font-size: 20px;
    background-color: ${baseColor};
    border: none;
    outline: none;
`

export const BackPageBtn = styled.button`
    width: 180px;
    height: 60px;
    background: #FFDDB5;
    font-size: 25px;
    border:none;
    outline: none;
    margin-left: 100px;
    margin-top: 60px;

    :hover{
        background: #FDB968;
    }
`