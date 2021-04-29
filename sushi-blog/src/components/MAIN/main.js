import React from 'react';
import * as s from './styles';
import LeftCotent from './leftContent/mainLeftContent';
import MainRightContent from './rightContent/mainRightContent'


const MainPage = () => {
    
    return(
        <>
            <s.MainCotainer>
                <LeftCotent></LeftCotent>
                <MainRightContent></MainRightContent>
            </s.MainCotainer>
        </>
    );
};

export default MainPage;