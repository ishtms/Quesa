import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent'
import {Link,BrowserRouter,Route} from 'react-router-dom';
import Home from './components/home';
import Forum from './components/forum';
import Viva from './components/viva';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: ''
        }
    }
    componentDidMount(){
        document.getElementById('home').click();
        
        superagent
        .get('/confirm_login/quesa/data')
        .set("Accept", 'application/json')
        .end((err,response)=>{
            if(err){
                createToast('Server Error occured. Please try again after a few seconds.');
            }else{
               this.setState(response.body.result);
            }
        })
    }

    handleLogout(){
        superagent
            .post('/success')
            .send({logout: 'yes'})
            .set("Accept", 'application/json')
            .end((err,response)=>{
                if(err){
                    createToast('Server Error occured. Please try again after a few seconds.');
                }else{
                    window.location.href = './'
                }
            })
    }
    render(){
        console.log("type is ", typeof(this.state.fname))
        return (
            <BrowserRouter>
            <div className="main-container">
                <div id="navbar">
                    <span id="logo">
                        <img height='50px' width="50px" src="./images/codemode.png"/>
                    </span>
                    <span id="logo-text">Quesa</span>
                    <ul id="nav-links">
                        <Link to="/"><li id="home">Home</li></Link>
                        <Link to="/forums"><li id="forum">Forum</li></Link>
                        <Link to="/viva"><li id="viva">Viva</li></Link>
                        <a href="http://chat.codemode.co"><li id="chat">Chat</li></a>
                        <li onClick={this.handleLogout}>Logout</li>
                    </ul>
                    <Route exact path="/" render={() => (
                        <Home  name={this.state.fname + " "+this.state.lname} />
                      )} />
                    <Route exact path="/viva" component={Viva} />
                    <Route exact path="/forums" component={Forum} />
                </div>
                
            </div>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));
