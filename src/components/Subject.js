import React, { Component } from 'react';


class Subject extends Component { //Subject 라는  Component를 만들겠다는 의미 정도
    render() {
        return (
            <header>
                <h1><a href="/" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)} >{this.props.title}</a></h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;