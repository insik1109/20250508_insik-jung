// components/LogoutButton.js
export default function LogoutButton({ onLogout }) {
  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST', credentials: 'include' });
    onLogout();
  };
  return <button onClick={handleLogout}>로그아웃</button>;
}
