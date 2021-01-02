import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '나만의 개발 일기';
  function funct(){
    return 100
  }
  
  return (
    <div className="App">
      <div className = "black-nav">
        <div>개발 Blog</div>
      </div>
      <img src ={logo} />
      <h4>{ posts }{ funct() }</h4>
    </div>
  );
}

export default App;
