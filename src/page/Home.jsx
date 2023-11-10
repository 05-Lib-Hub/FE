import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/auth')}>로그인 페이지</button>
    </>
  );
}
