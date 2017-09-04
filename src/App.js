import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent'
import {Link,BrowserRouter,Route} from 'react-router-dom';
import Home from './components/home';
import Forum from './components/forum';
import Viva from './components/viva';

class App extends React.Component{
    componentWillMount(){
        var context = this;
        superagent
        .get('/confirm_login/quesa/data')
        .set("Accept", 'application/json')
        .end((err,response)=>{
            if(err){
                createToast('Server Error occured. Please try again after a few seconds.');
            }else{
               context.setState(response.body.result);
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
        console.log(this.state)
        return (
            <BrowserRouter>
            <div className="main-container">
                <div id="navbar">
                    <span id="logo">
                        <img height='50px' width="50px" src="./images/codemode.png"/>
                    </span>
                    <span id="logo-text">Quesa</span>
                    <ul id="nav-links">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/forums"><li>Forum</li></Link>
                        <Link to="/viva"><li>Viva</li></Link>
                        <li>Logout</li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/viva" component={Viva} />
                    <Route exact path="/forums" component={Forum} />
                </div>
                
            </div>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));
