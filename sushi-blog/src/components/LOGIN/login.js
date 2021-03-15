import React from 'react';
import * as s from './style';

const Login = () => {
    return (
        <s.CenterContent>
             <s.LoginContainer>
                <s.TitleContainer>
                    <p>Login</p>
                </s.TitleContainer>
                <s.LoginInput placeholder="이메일을 입력히세요"></s.LoginInput>
                <s.LoginInput placeholder="비밀번호를 입력하세요"></s.LoginInput>
                <s.CheckBtn>확인</s.CheckBtn>
                <s.SignUp onClick={()=>{
                    window.location.href="/signup"
                }}>회원가입을 하시겠습니까?</s.SignUp>
            </s.LoginContainer>
        </s.CenterContent>
    );
};

export default Login;