import api from '@/api/api';
import { useState } from 'react';
import Button from '../atoms/js-Button/Button';
import Input from '../atoms/js-Input/Input';

function SignUpForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const handleClickSignUp = async () => await api.auth.signUp(email, password, nickname);

  return (
    <div className="flex flex-col justify-center items-center w-full   ">
      <div className="flex flex-col justify-center items-center w-full max-w-[500px]">
        <Input placeholder="이메일을 입력해주세요" required onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="비밀번호를 입력해주세요" required onChange={(e) => setPassword(e.target.value)} />
        <Input placeholder="닉네임을 입력해주세요" required={false} onChange={(e) => setNickname(e.target.value)} />
      </div>
      <div className="flex justify-around mt-12 w-full max-w-[500px] ">
        <Button title="SIGN UP" onClick={handleClickSignUp} />
        <Button href="/log-in" title="LOG IN" />
        {/* <Button title="로그아웃" onClick={handleClickLogOut} /> */}
      </div>
    </div>
  );
}

export default SignUpForm;
