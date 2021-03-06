import React from 'react';
import * as s from './style';

const CategoryFix = (props) => {
    const CloseCategoryFix = () => {
        props.setCategoryFixModal(false);
    };

    return (
        <>
            <s.WhiteBox onClick = {CloseCategoryFix}></s.WhiteBox>
            <s.CategoryFixContainer>
                <p>test</p>
            </s.CategoryFixContainer>
        </>
    );
};

export default CategoryFix;