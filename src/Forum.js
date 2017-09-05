import React from 'react';
import ReactDOM from 'react-dom';

class Forum extends React.Component{
    render(){
        return <h1>Hi from forums</h1>
    }
}
ReactDOM.render(<Forum/>,document.getElementById('forum'));