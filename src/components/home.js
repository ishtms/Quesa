import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default class Home extends React.Component{
    goForum(){
        document.getElementById('forum').click();
    }
    goChat(){
        document.getElementById('chat').click();
    }
    goViva(){
        document.getElementById('viva').click();
    }
    render(){
        console.log('child render',  'and props is ',this.props.name)
        return(<div className="main-components">
                <div id="home-introduction">
                    <div className="heading">Welcome to the forums, {this.props.name}</div>
                    <div id="home-description">
                        Quesa, A CodeMode's community that will hep you learn, share knowledge and build a succesful career.<br />
                        If you have any questions, browse forums, and ask a question related to specific topic.<br/>
                        Test your knowledge in the Viva Section.
                        Need an imediate help? You could go to our live chat portal.
                    </div>
                </div>
                <BrowserRouter>
                    <div id="link-area">
                        <span onClick={this.goChat.bind(this)} id="link-chat" className="main-links">
                        Chat 
                        </span>
                        <span onClick={this.goForum.bind(this)} id="link-forum" className="main-links">
                        Forum
                        </span>
                        <span onClick={this.goViva.bind(this)} id="link-viva" className="main-links">
                        Viva
                        </span>
                    </div>
                </BrowserRouter>
            </div>);
    }
}