import styled from 'styled-components';

export const MainContainer = styled.div`
    margin-top: 23px;
    background-color: rgba(163, 158, 152, 0.16);
    width: 1300px;
    height: 870px;
    margin-left: 50px;
`

export const ExplanaitionDiv = styled.div`
    display:flex;
    justify-content: space-around;
    font-size: 30px;
    font-weight: bold;
    p{
        margin: 0;
        margin-top: 65px;
        color: #000000;
    }
`

export const PostContainer= styled.div`
    cursor: pointer;
    margin-top: 33px;
    width: 100%;
    font-size: 30px;
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