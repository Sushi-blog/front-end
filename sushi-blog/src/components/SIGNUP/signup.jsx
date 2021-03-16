import React, {useState, memo} from 'react';
import * as s from './styles';

const SignUp = memo(() => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const onChnageNickname = (e) => {
        setNickname(e.target.value);
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onChangeCheckPassword = (e) =>{
        setCheckPassword(e.target.value);
    }

    const onClickSignup = (e) => {
        if(password.length < 8) {
            alert("비밀번호를 8자리 이상 써주세요");
            return;
        }
        if(password !== checkPassword) {
            alert("비밀번호를 다시 확인해주세요");
            return;
        }
    }

    return (
        <>
            <s.CenterContent>
                <s.SignupContainer>
                    <s.TitleContainer>SIGN UP</s.TitleContainer>
                    <s.SignupInput placeholder="닉네임을 입력해주세요(10자 이내)" onChange={onChnageNickname} maxLength="10"></s.SignupInput>
                    <s.SignupInput placeholder="이메일을 입력하세요" onChange={onChangeEmail}></s.SignupInput>
                    <s.SignupInput placeholder="비밀번호를 입력하세요(영문, 숫자 사용 필수)" maxLength='16' onChange={onChangePassword}></s.SignupInput>
                    <s.SignupInput placeholder="비밀번호를 확인하세요" onChange={onChangeCheckPassword} maxLength='16'></s.SignupInput>
                    <s.CheckBtn onClick={onClickSignup}>확인</s.CheckBtn>
                </s.SignupContainer>
            </s.CenterContent>
        </>
    );
});

export default SignUp;