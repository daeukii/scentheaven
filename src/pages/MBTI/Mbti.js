import React from 'react';
import mbtiperfume from '../../../src/api/mbtiperfume.json';
import { useState, useEffect } from 'react';
import './Mbti.css';

export default function Mbti() {
  const [sameData, setsameData] = useState();
  const [mPerfume, setmPerfume] = useState(mbtiperfume);
  const [mPerfume2, setmPerfume2] = useState([]);

  const mmbb = () => {
    if (!sameData || !mPerfume.find((p) => p.mbti === sameData)) {
      alert('유효한 MBTI를 입력해주세요!');
      return;
    }
    const newList = mPerfume.filter((p) => p.mbti === sameData);
    setmPerfume2(newList);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      mmbb();
    }
  };

  return (
    <div className='mbtiex'>
      <p>당신의 MBTI를 입력해주세요.</p>
      <br />
      <p>센츠헤븐에서 MBTI유형에 알맞는 향수를 추천해드립니다.</p>
      <div className='goMbti'>
      <a href='https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC'>
        MBTI 유형 검사 바로가기</a>
      </div>
      <input
        type="text"
        placeholder="소문자로 작성해주세요"
        className="submiT"
        onChange={(e) => {
          setsameData(e.target.value);
        }}
        onKeyPress={handleKeyPress}
      ></input>
      <button onClick={mmbb} className="submit-button">
        제출
      </button>
      {mPerfume2.map((q, i) => (
        <div key={i}>
          <p className="mbti-mbti">{q.mbti}</p>
          <p className="mbti-infomation">{q.information}</p>
          <p className="mbti-name">{q.name}</p>
          <img src={q.img1} className="mbti-img" alt="향수 이미지" />{' '}
          <img src={q.img2} className="mbti-img" alt="향수 이미지" />
        </div>
      ))}
    </div>
  );
}
