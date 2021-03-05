import styled from 'styled-components';
import {fontColor} from '../../../style/index';

export const MainContainer = styled.div`
    margin-top: 23px;
    background-color: #F6E5D2;
    width: 145vh;
    height: 870px;
`

export const ExplanaitionDiv = styled.div`
    display:flex;
    justify-content: space-around;
    font-size: 30px;
    font-weight: bold;
    p{
        margin: 0;
        margin-top: 30px;
        color:${fontColor};
    }
`

export const PostContainer= styled.div`
    cursor: pointer;
    margin-top: 40px;
    width: 100%;
    font-size: 25px;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
`

export const Category = styled.span`
    width: 200px;
    margin-left: 10px;
    font-weight: bold;
`

export const Title = styled.span`
    width: 450px;
`

export const CreateDate = styled.span`
    margin-left: -9px;
    width: 170px;
`

export const PageList = styled.div`
    width: 350px;
    text-align: center;
    left: 50%;
    margin-left: -175px;
    position: absolute;
    bottom: 5%;
    margin: auto;
`

export const PageNumber = styled.span`
    cursor: pointer;
    font-size: 20px;
    margin-right: 25px;
`