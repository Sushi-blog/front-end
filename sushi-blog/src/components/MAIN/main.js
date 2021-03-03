import React from 'react';
import * as s from './styles';
import LeftCotent from './leftContent/mainLeftContent';


const MainPage = () => {
    return(
        <>
            <s.MainCotainer>
                <LeftCotent></LeftCotent>
            </s.MainCotainer>
        </>
    );
};

export default MainPage;