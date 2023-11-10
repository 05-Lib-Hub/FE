import { login } from '../service/axios/auth';

export default function AuthPage() {
  return (
    <>
      <button onClick={login}>로그인</button>
    </>
  );
}
