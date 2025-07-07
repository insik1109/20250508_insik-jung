import Link from 'next/link';

export default function Navbar() {
const handleLogout = () => {
  document.cookie = 'loggedIn=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
  window.location.href = '/login.html';
};


  return (
    <nav style={{
      backgroundColor: '#3498db',
      padding: '15px',
      color: '#fff',
      marginBottom: '20px'
    }}>
      <Link href="/" style={{ marginRight: '10px', color: '#fff' }}>홈</Link>
      <Link href="/dashboard.html" style={{ marginRight: '10px', color: '#fff' }}>대시보드</Link>
      <Link href="/about.html" style={{ marginRight: '10px', color: '#fff' }}>소개</Link>
      </nav>
  );
}
