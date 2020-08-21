import React, { Component } from 'react';


class Subject extends Component { //Subject 라는  Component를 만들겠다는 의미 정도
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;