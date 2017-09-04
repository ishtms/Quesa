import React from 'react'
import ReactDOM from 'react-dom'
import {Icon} from 'react-materialize';
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
                        Quesa, A CodeMode's community that will help you learn, share knowledge and build a succesful career.<br />
                        If you have any questions, browse Forums, and ask a question related to specific topic.<br/>
                        Test your knowledge in the Viva Section.
                        Need an immediate help? You could go to our live chat portal.
                    </div>
                </div>
                    <div id="link-area">
                        <span onClick={this.goChat.bind(this)} id="link-chat" className="main-links-chat">
                        <Icon className="icons-main">forum</Icon>
                        Chat 
                        </span>
                        <span onClick={this.goForum.bind(this)} id="link-forum" className="main-links-forum">
                        <Icon className="icons-main">group</Icon>
                        Forum
                        </span>
                        <span onClick={this.goViva.bind(this)} id="link-viva" className="main-links-viva">
                        <Icon className="icons-main">school</Icon>
                        Viva
                        </span>
                    </div>
            </div>);
    }
}