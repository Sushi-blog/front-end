import React from 'react';
import * as s from './styles';

const WithdrawalModal = (props) => {

    const CloseWithdrawalModal = () =>{
        props.setWithdrawalModal(false);
        return;
    };

    return(
        <>
            <s.WhiteBox onClick={CloseWithdrawalModal}></s.WhiteBox>
            <s.MainContainer>
                <s.Title>
                    <s.TitleFont>정말로 탈퇴하시겠습니까?</s.TitleFont>
                    <s.WithdrawalBtn>탈퇴하기</s.WithdrawalBtn>
                </s.Title>
            </s.MainContainer>
        </>
    );
};

export default WithdrawalModal;