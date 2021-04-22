import styled from 'styled-components';
import { baseColor, modalColor2 } from '../../../../style/index';

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
  width:1300px;
  height: 700px;
  transform: translate(-50%, -50%);
  background-color: ${modalColor2};
  z-index:1;

  div{
    display: flex;
    align-items: center;
  }

  img{
    position: absolute;
    top: 10%;
    right: 10%;
  }

  .pen {
    margin-right: 50px;
    width: 23px;
    height: 23px;
  }

  .title {
    margin: 0;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
  }
`

export const Header = styled.div`
  margin-top: 40px;
  width: 1080px;
  display: flex;
  justify-content: space-between;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 35px;

  div{
    width: 400px;
    display: flex;
    justify-content: center;
  }

  div .date{
    width: 210px;
    height: 35px;
    margin: 0;
    text-align: center;
    font-size: 20px;
    border-bottom: 1px solid;
    margin-right: 40px;
  }

  div .writer {
    width: 110px;
    height: 35px;
    border-bottom: 1px solid;
    text-align: center;
    font-size: 20px;
  }
`

export const Category = styled.div`
  font-size: 20px;
  text-align: center;
  width: 125px;
  border-bottom: 1px solid;

    p{
      margin: 0;
    }
`

export const Content = styled.div`
  width: 1000px;
  background-color: ${baseColor};
  margin-top: 40px;
  height: 400px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  font-size: 25px;
  padding-top :40px;
  padding-left: 50px;
  padding-bottom: 40px;
  padding-right: 50px;
  border-radius: 10px;
  overflow-y: scroll;
`

