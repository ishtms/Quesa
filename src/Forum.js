import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Something extends React.Component{
    render(){
        return(
            <div>
            
            <h1>asdfasdfasfsf</h1>
            <h1>asdfasdfasfsf</h1>
            <h1>asdfasdfasfsf</h1>
            <h1>asdfasdfasfsf</h1>
            <h1>asdfasdfasfsf</h1>
            <h1>asdfasdfasfsf</h1>
            <h1>asdfasdfasfsf</h1>
            <h1>asdfasdfasfsf</h1>
            v
            v
            v
            <h1>asdfasdfasfsf</h1>
            <h1>asdfasdfasfsf</h1>
            v
            <h1>asdfasdfasfsf</h1>
            <h1>asdfasdfasfsf</h1>
            <h1>asdfasdfasfsf</h1>
            <h1>asdfasdfasfsf</h1>
            <h1>asdfasdfasfsf</h1>
            <h1>asdfasdfasfsf</h1>
            <h1>asdfasdfasfsf</h1>

            </div>
        );
    }
}
class Forum extends React.Component{
  
    render(){
        return (
            <BrowserRouter>

                <div style={{overflow: 'auto'}}>
                  hi
                </div>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(<Forum/>,document.getElementById('forum'));