import Link from 'next/link';

export default function PatientCard({ patient }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '6px',
      padding: '15px',
      marginBottom: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2>{patient.name}</h2>
      <p>상태: {patient.status}</p>
      <Link href={`/patient/${patient.id}`}>자세히 보기 →</Link>
    </div>
  );
}
