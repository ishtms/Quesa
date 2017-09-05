import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent'
import Home from './components/home';

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
    navigatePage(event){
        if(this.state.confirmed){
            if(event.target.id == "chat"){
                window.location.href="http://chat.codemode.co";
            }else
            window.location.href = "/main/"+event.target.id;
        }else{
            createToast("Please validate your account to access forums!")
        }
    }
    render(){
        console.log("type is ", typeof(this.state.fname))
        return (
            <div className="main-container">
                <div id="navbar">
                    <span id="logo">
                        <img height='50px' width="50px" src="./images/codemode.png"/>
                    </span>
                    <span id="logo-text">Quesa</span>
                    <ul id="nav-links">
                        <li id="home">Home</li>
                        <li onClick={this.navigatePage.bind(this)} id="forum">Forum</li>
                        <li onClick={this.navigatePage.bind(this)} id="viva">Viva</li>
                        <li onClick={this.navigatePage.bind(this)} id="chat">Chat</li>
                        <li onClick={this.handleLogout}>Logout</li>
                    </ul>
                        <Home  name={this.state.fname + " "+this.state.lname} />
                </div>
                
            </div>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));
