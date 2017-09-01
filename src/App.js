import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        return (
            <div>Hello from Main</div>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));
