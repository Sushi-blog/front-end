import React, { useState } from 'react';
import * as s from './styles';
import CategoryFix from '../modals/categoryFix/categoryFix';
import NicknameFix from '../modals/nicknameFix/nicknameFix';
import WithdrawalModal from '../modals/withdrawal/withdrawal';

const LeftCotent = () => {
    const [categoryFixModal, setCategoryFixModal] = useState(false);
    const [nicknameFixModal, setNicknameFixModal] = useState(false);
    const [withdrawalModal, setWithdrawalModal] = useState(false);

    const ViewCategoryFixModal = () => {
        setCategoryFixModal(true);
        return;
    };

    const ViewNicknameFixModal = () => {
        setNicknameFixModal(true);
        return;
    };

    const ViewWithdrawalModal = () => {
        setWithdrawalModal(true);
        return;
    };

    return(
        <>
            {categoryFixModal ?<CategoryFix setCategoryFixModal={setCategoryFixModal}></CategoryFix>: null}
            {nicknameFixModal ? <NicknameFix setNicknameFixModal={setNicknameFixModal}></NicknameFix>: null}
            {withdrawalModal ? <WithdrawalModal setWithdrawalModal={setWithdrawalModal}></WithdrawalModal>: null}
            <s.MainCotainer>
                <s.ContentCenter>
                    <s.UserName>김지민<s.HeaderFont>의 블로그</s.HeaderFont></s.UserName>
                    <s.EmailFont>201413lsy@dsm.hs.kr</s.EmailFont>
                    <s.CategoryFont>카테고리</s.CategoryFont>
                    <s.CategoryAllfont>전체</s.CategoryAllfont>
                    <div>
                        <s.CategoryMenuFont>카테고리1</s.CategoryMenuFont>
                        <s.CategoryMenuFont>카테고리2</s.CategoryMenuFont>
                        <s.CategoryMenuFont>카테고리3</s.CategoryMenuFont>
                        <s.CategoryMenuFont>카테고리4</s.CategoryMenuFont>
                    </div>
                    <s.WritePostBtn 
                        onClick={() => {
                            window.location.href = '/write/post';
                        }}
                    >게시물 작성</s.WritePostBtn>
                    <s.FixContainer>
                        <s.FixFont onClick={ViewWithdrawalModal}>회원탈퇴</s.FixFont>
                    </s.FixContainer>
                </s.ContentCenter>
            </s.MainCotainer>
        </>
    );
};

export default LeftCotent;