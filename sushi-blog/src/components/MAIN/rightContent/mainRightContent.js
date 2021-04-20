import React from 'react';
import * as s from './style';

const MainRightContent = () => {
    return (
        <>
            <s.MainContainer>
                <s.ExplanaitionDiv>
                    <p>카테고리</p>
                    <p>제목</p>
                    <p>작성일</p>
                </s.ExplanaitionDiv>
                <s.PostContainer>
                    <s.Category>[카테고리1]</s.Category>
                    <s.Title>이승윤 오늘은 디자인을 하다</s.Title>
                    <s.CreateDate>2021-02-23</s.CreateDate>
                </s.PostContainer>
                <s.PostContainer>
                    <s.Category>[카테고리1]</s.Category>
                    <s.Title>이승윤 오늘은 디자인을 하다</s.Title>
                    <s.CreateDate>2021-02-23</s.CreateDate>
                </s.PostContainer>
                <s.PostContainer>
                    <s.Category>[카테고리1]</s.Category>
                    <s.Title>이승윤 오늘은 디자인을 하다</s.Title>
                    <s.CreateDate>2021-02-23</s.CreateDate>
                </s.PostContainer>
                <s.PostContainer>
                    <s.Category>[카테고리1]</s.Category>
                    <s.Title>이승윤 오늘은 디자인을 하다</s.Title>
                    <s.CreateDate>2021-02-23</s.CreateDate>
                </s.PostContainer>
                <s.PageList>
                    <s.PageNumber>&lt;</s.PageNumber>
                    <s.PageNumber><b>1</b></s.PageNumber>
                    <s.PageNumber>2</s.PageNumber>
                    <s.PageNumber>3</s.PageNumber>
                    <s.PageNumber>4</s.PageNumber>
                    <s.PageNumber>5</s.PageNumber>
                    <s.PageNumber>&gt;</s.PageNumber>
                </s.PageList>
            </s.MainContainer>
        </>
    );
}

export default MainRightContent;