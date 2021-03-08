import React from 'react';
import * as s from './style';

const NicknameFix = (props) => {
    const CloseCategoryFix = () => {
        props.setNicknameFixModal(false);
    };

    return (
        <>
            <s.WhiteBox onClick = {CloseCategoryFix}></s.WhiteBox>
            <s.MainContainer>
                <s.NicknameTitle>
                    <s.TitleFont>닉네임 수정</s.TitleFont>
                </s.NicknameTitle>
                <s.NicknameInput></s.NicknameInput>
            </s.MainContainer>
        </>
    );
};

export default NicknameFix;