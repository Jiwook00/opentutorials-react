import React, { Component } from 'react';
import './App.css';
// App.js가 로드 될 때 App.css 파일 도 같이 작동 하도록 하기 위해
// => App 이라고 하는 디자인의 컴퍼넌트를 그 앱 안에 넣는다
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

// 컴포넌트를 만들 땐 하나의!! 최상위 태그만을 써야한다
// 이것은 자바스크립트 X  -> 유사 자바스크립트

class App extends Component { // react가 가지고 있는 Component 클래스를 상속시켜서  
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      welcome: { title: "welcome", desc: "Hello React" },
      subject: { title: "React", sub: "Start" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText Makeup language!!" },
        { id: 2, title: "CSS", desc: "CSS dfiwekjs dfdsfa" },
        { id: 3, title: "JavaSctipt", desc: "fdjsif dfaisdfj dfajsid" }
      ]
    }
  }
  render() { // <= 어떤 HTML을 그릴지 결정하는 함수
    var _title, _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome"
            })
          }.bind(this)}>

        </Subject>
        {/* <header>
          <h1><a href="/" onClick={function (e) {
            console.log(e)
            e.preventDefault(); //페이지 전환을 막는다
            // this,state.mode = "welcome"
            this.setState({
              mode: "welcome"
            })
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <TOC onChangePage={function () {
          this.setState({ mode: "read" });
        }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Content title={_title} sub={_desc}></Content>
      </div>
    );
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
