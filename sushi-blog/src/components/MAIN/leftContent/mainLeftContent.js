import React, { useEffect, useState } from 'react';
import * as s from './styles';
import CategoryFix from '../modals/categoryFix/categoryFix';
import NicknameFix from '../modals/nicknameFix/nicknameFix';
import WithdrawalModal from '../modals/withdrawal/withdrawal';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const LeftCotent = () => {
    const [categoryFixModal, setCategoryFixModal] = useState(false);
    const [nicknameFixModal, setNicknameFixModal] = useState(false);
    const [withdrawalModal, setWithdrawalModal] = useState(false);
    const history = useHistory();

    const ViewCategoryFixModal = () => {
        setCategoryFixModal(true);
        return;
    };

    useEffect(() => {
        if(!localStorage.getItem("token")) {
            alert("로그인을 해주세요");
            history.push('/');
        }
    }, [])

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
            {categoryFixModal &&<CategoryFix setCategoryFixModal={setCategoryFixModal}></CategoryFix>}
            {nicknameFixModal && <NicknameFix setNicknameFixModal={setNicknameFixModal}></NicknameFix>}
            {withdrawalModal && <WithdrawalModal setWithdrawalModal={setWithdrawalModal}></WithdrawalModal>}
            <s.MainCotainer>
                <s.ContentCenter>
                    <s.UserName onClick={ViewNicknameFixModal}>김지민<s.HeaderFont>의 블로그</s.HeaderFont></s.UserName>
                    <s.EmailFont>201413lsy@dsm.hs.kr</s.EmailFont>
                    <s.CategoryFont onClick={ViewCategoryFixModal}>카테고리</s.CategoryFont>
                    <s.CategoryAllfont>전체</s.CategoryAllfont>
                    <div >
                        <s.CategoryMenuFont>카테고리1</s.CategoryMenuFont>
                        <s.CategoryMenuFont>카테고리2</s.CategoryMenuFont>
                        <s.CategoryMenuFont>카테고리3</s.CategoryMenuFont>
                        <s.CategoryMenuFont>카테고리4</s.CategoryMenuFont>
                    </div>
                    <Link to="/write/post"><s.WritePostBtn>게시물 작성</s.WritePostBtn></Link>
                    <s.FixContainer>
                        <s.FixFont onClick={ViewWithdrawalModal}>회원탈퇴</s.FixFont>
                    </s.FixContainer>
                </s.ContentCenter>
            </s.MainCotainer>
        </>
    );
};

export default LeftCotent;