import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <div style={{padding:'20px'}}>
        <h1>Predictiv AI 소개 🌟</h1>
        <p>Predictiv AI는 개인의 유전 정보를 바탕으로 맞춤형 건강관리를 지원하는 혁신 기업입니다.</p>
	<ul>
	<h2>디지털 트윈 플랫폼이란?</h2>
        <ul>
          <li>질병 예측과 예방 중심으로 설계된 플랫폼</li>
          <li>AI 유전자 분석으로 맞춤형 건강 관리 제공</li>
	  <li>ClinVar 데이터베이스 기반의 신뢰성 있는 분석 정보 제공</li>
	  <li>유전자 변이와 관련된 약물 반응, 웰니스 정보 제공</li>
	  <li>유전자 상담 및 보고서로 추가적 건강 관리 지원</li>
          <li>디지털 트윈 기술을 활용한 정밀의료 서비스</li>
        </ul>
	</ul>
      </div>
    </div>
  );
}
