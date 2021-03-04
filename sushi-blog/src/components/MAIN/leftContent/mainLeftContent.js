import React from 'react';
import * as s from './styles';

const LeftCotent = () => {
    return(
        <>
            <s.MainCotainer>
                <s.ContentCenter>
                    <s.UserName>최강승윤<s.HeaderFont>의 블로그</s.HeaderFont></s.UserName>
                    <s.EmailFont>201413lsy@dsm.hs.kr</s.EmailFont>
                    <s.CategoryFont>카테고리</s.CategoryFont>
                    <s.CategoryAllfont>전체</s.CategoryAllfont>
                    <div>
                        <s.CategoryMenuFont>카테고리1</s.CategoryMenuFont>
                        <s.CategoryMenuFont>카테고리2</s.CategoryMenuFont>
                        <s.CategoryMenuFont>카테고리3</s.CategoryMenuFont>
                        <s.CategoryMenuFont>카테고리4</s.CategoryMenuFont>
                    </div>
                    <s.WritePostBtn>게시물 작성</s.WritePostBtn>
                    <s.FixContainer>
                        <s.FixFont
                            onClick={()=>{
                                window.location.href = "/fix/category"
                            }}
                        >카테고리 수정</s.FixFont>
                        <s.FixFont
                            onClick={() => {
                                window.location.href = "/fix/nickname"
                            }}
                        >닉네임 수정</s.FixFont>
                        <s.FixFont 
                            onClick={()=> {
                                window.location.href = "/withdrawal"
                            }}
                        >회원탈퇴</s.FixFont>
                    </s.FixContainer>
                </s.ContentCenter>
            </s.MainCotainer>
        </>
    );
};

export default LeftCotent;