import React, { Component } from 'react';

class TOC extends Component {
    render() {
        var lists = [];
        var data = this.props.data
        var i = 0;
        while (i < data.length) {
            lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {lists};
               </ul>
            </nav>
        )
    }
}

export default TOC; //밖으로 내보내서 다른 곳에서도 사용 할 수 있게 해준다