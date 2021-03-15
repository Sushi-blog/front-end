import React from 'react';
import * as s from './styles';

const SignUp = () => {
    return (
        <>
            <s.CenterContent>
                <s.SignupContainer>
                    <s.TitleContainer>SIGN UP</s.TitleContainer>
                    <s.SignupInput placeholder="닉네임을 입력해주세요(10자 이내)"></s.SignupInput>
                    <s.SignupInput placeholder="이메일을 입력하세요"></s.SignupInput>
                    <s.SignupInput placeholder="비밀번호를 입력하세요(영문, 숫자 사용 필수)"></s.SignupInput>
                    <s.SignupInput placeholder="비밀번호를 확인하세요"></s.SignupInput>
                    <s.CheckBtn>확인</s.CheckBtn>
                </s.SignupContainer>
            </s.CenterContent>
        </>
    );
};

export default SignUp;