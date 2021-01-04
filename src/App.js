import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let style1 = {color:'pink', fontSize: '18px'}
  let posts = '개발 블로그';

  // state 사용
  let [title, title_change] = useState(['나의 개발 블로그','나의 일기장','study plan','joying']);
  let [date, date_change] = useState(['1월 1일 발행','1월 2일 발행','1월 3일 발행','1월 4일 발행']);

  return (
    <div className="App">

      <div className = "black-nav">
        <div style = {style1}>개발 Blog</div>
      </div>

      <div className = "list">
        <h3> { title[0] } </h3>
        <p> { date[0] } </p>
        <hr/>   
      </div>

      <div className = "list">
        <h3> { title[1] }</h3>
        <p> { date[1] }</p>
        <hr/>
      </div>

      <div className = "list">
        <h3> { title[2] }</h3>
        <p> { date[2] }</p>
        <hr/>
      </div>

      <div className = "list">
        <h3> { title[3] }</h3>
        <p> { date[3] }</p>
        <hr/>
      </div>

    </div>
  );
}

export default App;
