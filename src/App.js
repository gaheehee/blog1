import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let style1 = {color:'pink', fontSize: '18px'}

  // state 사용
  let [title, title_change] = useState(['오늘 뭐하지?','diary','study plan']);
  let [date, date_change] = useState(['1월 1일 발행','1월 2일 발행','1월 3일 발행','1월 4일 발행']);
  let [good, good_change] = useState(0);

  function retitle(){
    var newArr = [...title];
    newArr[0] = '심심해';
    title_change( newArr );
  }

  return (
    <div className="App">

      <div className = "black-nav">
        <div style = {style1}>개발 Blog</div>
      </div>

      <button onClick = { retitle }> 버튼 </button>

      <div className = "list">
        <h3> { title[0] } <span onClick = { () => { good_change(good + 1 )}}>👍</span> {good} </h3>
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

    </div>
  );
}

export default App;
