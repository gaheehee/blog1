import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let style1 = {color:'pink', fontSize: '18px'}
  let posts = '개발 블로그';

  let [title,title_change] = useState(['나의 개발 블로그','나의 일기장']);
  
  return (
    <div className="App">
      <div className = "black-nav">
        <div style = {style1}>개발 Blog</div>
      </div>
      <div className = "list">
        <h3> { title[0] } </h3>
        <p> 1월 3일 발행 </p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
