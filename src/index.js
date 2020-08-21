import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //
//    컴포넌트      파일의 이름 여기서 app.js.를 가저온다
import * as serviceWorker from './serviceWorker';



ReactDOM.render( //App 이 리액트를 통해 만든 사용자 정의 태그 => 즉 컴퍼넌트
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
