import React, { useState } from 'react';
import * as s from './style';
import PostDetail from '../modals/postDetail/postDetail';
import PostContainer from './postContainer/PostContainer';

const MainRightContent = () => {
    const [postDetail, setPostDetail] = useState(false);

    return (
        <>
            {postDetail ? <PostDetail setPostDetail={postDetail}></PostDetail> : null}
            <s.MainContainer>
                <s.ExplanaitionDiv>
                    <p>카테고리</p>
                    <p>제목</p>
                    <p>작성일</p>
                </s.ExplanaitionDiv>
                {[...Array(5)].map((v, index) => {
                    return(
                        <PostContainer></PostContainer>
                    )
                })}
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