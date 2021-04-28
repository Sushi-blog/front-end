import React, {useState, memo} from 'react';
import * as s from './styles';
import { Request } from '../axios';
import Loading from '../LOADING/Loading';

const SignUp = memo(() => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [nicknameCol, setNicknameCol] = useState('#FFFFFF');
    const [emailCol, setEmailCol] = useState('#FFFFFF');
    const [passColor, setPassColor] = useState('#FFFFFF');
    const [loading, setLoading] = useState(false);

    const special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    const korea_pattern = /[\ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    const num_pattern = /[0-9]/g;
    const eng_pattern = /[a-zA-Z]/g;
    const email_pattern = /[a-zA-Z0-9]+@[a-zA-Z0-9]/gi;

    const onChnageNickname = (e) => {
        if(nickname.length > 10) {
            return;
        }
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

    const checkNickname = () => {
        if(nickname == '') {
            alert("닉네임을 입력해주세요.");
            return false;
        }
        if(special_pattern.test(nickname)) {
            alert("특수문자가 들어있습니다.");
            return false;
        }
        for(let i = 0; i < nickname.length; i++) {
            if(nickname[i] == ' ') {
                alert("공백이 들어있습니다.");
                return false
            }
        }
        return true;
    }

    const checkPass = () => {
        if((password.length < 8 || password.length > 16)) {
            alert("비밀번호를 8~16자리 사이로 해주세요.");
            return false;
        }
        if(password !== checkPassword) {
            alert("비밀번호가 다릅니다.");
            return false;
        }
        for(let i = 0; i< password.length; i++) {
            if(password[i] == ' ') {
                alert("공백이 들어있습니다.");
                return false;
            }
        }
        if(korea_pattern.test(password)) {
            alert("한국어가 들어있습니다.");
            return false;
        }
        if(!num_pattern.test(password)) {
            alert("숫자를 1자 이상 넣어주세요.");
            return false;
        }
        if(!eng_pattern.test(password)) {
            alert("영어를 1자 이상 넣어주세요.");
            return false;
        }
        return true;
    }

    const checkEmail = () => {
        if(email_pattern.test(email) === false ){
            console.log(email_pattern.test(email));
            console.log(email);
            alert("이메일 형식이 올바르지 않습니다.");
            return false;
        }
        if(email == '') {
            alert("이메일을 입력해주세요");
            return false;
        }
        return true;
    }

    const onClickSignup = async(e) => {
        if(!checkNickname()) {
            setNicknameCol('rgba(0, 0, 0, 0.3)');
            return;
        }
        else{
            setNicknameCol('#FFFFFF');
        }
        
        if(!checkPass()) {
            setPassColor('rgba(0, 0, 0, 0.3)');
            return;
        }
        else {
            setPassColor('#FFFFFF');
        }

        if(!checkEmail()) {
            setEmailCol('rgba(0, 0, 0, 0.3)');
            return;
        }
        else{
            setEmailCol('#FFFFFF');
        }
        try {
            setLoading(true);
            const {data} = await Request('post', '/account', {}, {
                "email": email,
                "password": password,
                "nickname": nickname
            });

            console.log(data);
            setLoading(false);
            alert("회원가입이 완료되었습니다!");

        } catch(err) {
            setLoading(false);
            console.log('asdasd');
            alert(err);
            console.log(err);
        }
        
        
        //window.location.href = "/";
    }

    return (
        <>
            {loading ? <Loading></Loading> : null}
            <s.CenterContent>
                <s.SignupContainer>
                    <s.TitleContainer>SIGN UP</s.TitleContainer>
                    <s.SignupInput
                        style={{backgroundColor: nicknameCol}}
                        placeholder="닉네임을 입력해주세요(10자 이내)"
                        onChange={onChnageNickname}
                        maxLength="10"
                    ></s.SignupInput>
                    <s.SignupInput 
                        style={{backgroundColor: emailCol}}
                        placeholder="이메일을 입력하세요"
                        onChange={onChangeEmail}
                    ></s.SignupInput>
                    <s.SignupInput 
                        type= 'password'
                        style={{backgroundColor: passColor}}
                        placeholder="비밀번호를 입력하세요(영문, 숫자 사용 필수)"
                        maxLength='16'
                        onChange={onChangePassword}
                    ></s.SignupInput>
                    <s.SignupInput 
                        type= 'password'
                        style={{backgroundColor: passColor}}
                        placeholder="비밀번호를 입력하세요(영문, 숫자 사용 필수)"
                        maxLength='16'
                        onChange={onChangeCheckPassword}
                    ></s.SignupInput>
                    <s.CheckBtn onClick={onClickSignup}>확인</s.CheckBtn>
                </s.SignupContainer>
            </s.CenterContent>
        </>
    );
});

export default SignUp;