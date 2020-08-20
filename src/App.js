import React, { Component } from 'react';
import './App.css';
// App.js가 로드 될 때 App.css 파일 도 같이 작동 하도록 하기 위해
// => App 이라고 하는 디자인의 컴퍼넌트를 그 앱 안에 넣는다

class Subject extends Component { //Subject 라는  Component를 만들겠다는 의미 정도
  render() {
    return (
      <header>
        <h1>WEB</h1>
        world wide web!!
      </header>
    );
  }
}
// 컴포넌트를 만들 땐 하나의!! 최상위 태그만을 써야한다
// 이것은 자바스크립트 X  -> 유사 자바스크립트

class App extends Component { // react가 가지고 있는 Component 클래스를 상속시켜서  
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <Nav></Nav>
      </div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <ul>
        <li><a href="1.html">HTML</a></li>
        <li><a href="2.html">HTML</a></li>
        <li><a href="3.html">HTML</a></li>
      </ul>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       Hello worl!!
//     </div>
//   );
// }

export default App;
