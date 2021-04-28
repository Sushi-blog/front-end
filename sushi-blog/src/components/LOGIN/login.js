import React, { useState } from 'react';
import * as s from './style';
import {Request} from '../axios';
import Loading from '../LOADING/Loading';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onClickLogin = async() => {
        try{
            setLoading(true);
            const {data} = await Request('post', '/auth', {}, {
                "email" : email,
                "password" : password,
            });
            setLoading(false)
            localStorage.setItem("token", data["access-token"]);
            window.location.href= "/mainpage";
        } catch(e) {
            alert("이메일이나 비밀번호가 틀렸습니다.");
            setLoading(false);
        }
    }

    return (
        <>
            {loading ? <Loading></Loading> : null}
            <s.CenterContent>
                <s.LoginContainer>
                    <s.TitleContainer>
                        <p>Login</p>
                    </s.TitleContainer>
                    <s.LoginInput 
                        placeholder="이메일을 입력하세요"
                        onChange={onChangeEmail}
                        value={email}
                    ></s.LoginInput>
                    <s.LoginInput 
                        placeholder="비밀번호를 입력하세요"
                        onChange={onChangePassword}
                        value = {password}
                    ></s.LoginInput>
                    <s.CheckBtn onClick = {onClickLogin}>확인</s.CheckBtn>
                    <s.SignUp onClick={()=>{
                        window.location.href="/signup"
                    }}>회원가입을 하시겠습니까?</s.SignUp>
                </s.LoginContainer>
            </s.CenterContent> 
        </>
        
    );
};

export default Login;