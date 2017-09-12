import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';
import {BrowserRouter,Route} from 'react-router-dom';
import ForumIndex from './components/forum-index';
import Display from './components/display';

class Forum extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          
        }
    }
    
    componentWillMount(){
        superagent
        .get('/confirm_login/quesa/data')
        .set("Accept", 'application/json')
        .end((err,response)=>{
            if(err){
                    console.log('error')
            }else{
                console.log(response.body.result.confirmed)
                if(response.body.result.confirmed){
                    this.setState(response.body.result);
                }else{
                    window.location.href = 'http://codemode.co'
                }
            }
        })
    }
    render(){
        console.log('THe state is ', this.state)
        return (this.state.confirmed===true)?(
            <BrowserRouter>
                <div>
                    <div id="navbar">
                        <span id="logo">
                            <img height='50px' width="50px" src="../../images/codemode.png"/>
                        </span>
                        <span id="logo-text">Quesa</span>
                        <ul id="nav-links">
                            <a href=".."><li id="home">Home</li></a>
                            <li  id="forum">Forum</li>
                            <a href="../main/viva"><li id="viva">Viva</li></a>
                            <a href="chat.codemode.co"><li id="chat">Chat</li></a>
                            <li onClick={this.handleLogout}>Logout</li>
                        </ul>
                    </div>
                    <Route exact path="/main/forum/" render={(props)=>{return <ForumIndex {...props} data={this.state}/>}} />
                    <Route exact path="/main/forum/foundation" render={(props)=>{return <Display {...props} data="foundation"/>}} />
                    <Route exact path="/main/forum/html" render={(props)=>{return <Display {...props} data="html"/>}} />
                    <Route exact path="/main/forum/javaadvance"render={(props)=>{return <Display {...props} data="adv java"/>}} />
                    <Route exact path="/main/forum/android" render={(props)=>{return <Display {...props} data="android"/>}} />
                    <Route exact path="/main/forum/fullstack" render={(props)=>{return <Display {...props} data="fullstack"/>}} />
                </div>
            </BrowserRouter>
        ):<div></div>
    }
}
ReactDOM.render(<Forum/>,document.getElementById('forum'));