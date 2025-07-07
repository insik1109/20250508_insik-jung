import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import PatientCard from '../components/PatientCard';

const patients = [
  { id: 1, name: '철수', status: '분석 완료' },
  { id: 2, name: '영희', status: '샘플 대기중' },
  { id: 3, name: '인식', status: '분석중' },
];

export default function Dashboard() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

useEffect(() => {
  const isLoggedIn = document.cookie.includes('loggedIn=true');

  /*if (!isLoggedIn) {
    alert('로그인이 되어있지 않아서 로그인 페이지로 이동합니다.');
    window.location.href = '/login.html';
  }
    */
}, []);


  const filteredPatients = patients.filter(p => 
    (filter === 'All' || p.status === filter) &&
    p.name.includes(search)
  );

  return (
    <div>
      <Navbar />
      <div style={{padding:'20px'}}>
        <h1>회원 목록 📋</h1>

        <input
          type="text"
          placeholder="이름으로 검색"
          style={{ marginBottom: '10px', marginRight: '10px' }}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">모든 상태</option>
          <option value="분석 완료">분석 완료</option>
          <option value="샘플 대기중">샘플 대기중</option>
          <option value="분석중">분석중</option>
        </select>

        <div>
          {filteredPatients.map(patient => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </div>
      </div>
    </div>
  );
}
