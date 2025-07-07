// components/LoginForm.js
import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    });
    if (res.ok) onLogin();
    else alert('로그인 실패!');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="이메일" />
      <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="비밀번호" />
      <button type="submit">로그인</button>
    </form>
  );
}
