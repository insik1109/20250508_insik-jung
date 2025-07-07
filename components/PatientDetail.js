import { useRouter } from 'next/router';

const patientData = {
  1: { name: "철수", status: "분석 완료", info: "희귀질환 없음. 카페인 대사 빠름." },
  2: { name: "영희", status: "분석 중", info: "결과 분석 중입니다." },
};

export default function PatientDetail() {
  const router = useRouter();
  const { id } = router.query;

  const patient = patientData[id];

  if (!patient) return <p style={{padding:'20px'}}>환자 정보를 찾을 수 없습니다.</p>;

  return (
    <div style={{padding:'20px'}}>
      <h1>{patient.name}의 디지털 트윈 🧬</h1>
      <p><strong>상태:</strong> {patient.status}</p>
      <p><strong>세부 정보:</strong> {patient.info}</p>
      <button onClick={() => router.push('/dashboard')}>← 목록으로 돌아가기</button>
    </div>
  );
}
