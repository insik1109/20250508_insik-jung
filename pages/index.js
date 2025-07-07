import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {

  useEffect(() => {
    const isLoggedIn = document.cookie.includes('loggedIn=true');
    /*if (!isLoggedIn) {
      window.location.href = '/login.html';
    }*/
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>DNA 기반 디지털 트윈 플랫폼 🌱</h1>
        <p>디지털 트윈 플랫폼은 DNA를 분석하여 맞춤형 건강관리를 제공합니다. 자신의 건강을 미리 대비하세요!</p>
        <Link href="/dashboard.html">대시보드 바로가기 →</Link>
      </div>
    </div>
  );
}
