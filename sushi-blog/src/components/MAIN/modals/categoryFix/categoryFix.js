import React from 'react';
import * as s from './style';

const CategoryFix = (props) => {
    const CloseCategoryFix = () => {
        props.setCategoryFixModal(false);
    };

    const CreateCategoryFix = (i) => {
        console.log(i);
        return(
            <s.CategoryFixContainer>
                    <s.Font>{'카테고리' + (i+1)}</s.Font>
                    <s.CategoryInput></s.CategoryInput>
                    <s.FixBtn>저장</s.FixBtn>
            </s.CategoryFixContainer>
        );
    }

    return (
        <>
            <s.WhiteBox onClick = {CloseCategoryFix}></s.WhiteBox>
            <s.MainContainer>
                <s.CategoryTitle>
                    <s.TitleFont>카테고리 수정</s.TitleFont>
                </s.CategoryTitle>
                <div>
                    {[...Array(4)].map((v, index) => {
                        console.log(index);
                        return CreateCategoryFix(index);
                    })}
                </div>
            </s.MainContainer>
        </>
    );
};

export default CategoryFix;