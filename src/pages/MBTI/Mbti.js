import React from 'react';
import mbtiperfume from '../../../src/api/mbtiperfume.json';
import { useState, useEffect } from 'react';
import './Mbti.css';

export default function Mbti() {
  const [sameData, setsameData] = useState();
  const [mPerfume, setmPerfume] = useState(mbtiperfume);
  const [mPerfume2, setmPerfume2] = useState([]);

  const mmbb = () => {
    const newList = mPerfume.filter((p) => p.mbti === sameData);
    setmPerfume2(newList);
  };

  return (
    <div>
      <p>당신의 MBTI를 입력해주세요.</p>
      <br />
      <p>센츠헤븐에서 MBTI유형에 알맞는 향수를 추천해드립니다.</p>
      <input
        type="textbox"
        placeholder="소문자로 작성해주세요"
        className="submiT"
        onChange={(e) => {
          setsameData(e.target.value);
        }}
      ></input>
      <button onClick={mmbb} className="submit-button">
        제출
      </button>
      {mPerfume2.map((q, i) => (
        <div key={i}>
          <p className="mbti-mbti">{q.mbti}</p>
          <p className="mbti-infomation">{q.information}</p>
          <p className="mbti-name">{q.name}</p>
          <img src={q.img1} className="mbti-img" />{' '}
          <img src={q.img2} className="mbti-img" />
        </div>
      ))}
    </div>
  );
}
