import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent'
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
            <div className="main-container">
                <div id="navbar">
                    <span id="logo">
                        <img height='50px' width="50px" src="./images/codemode.png"/>
                    </span>
                    <span id="logo-text">Quesa</span>
                    <ul id="nav-links">
                        <li>Home</li>
                        <li>Profile</li>
                        <li>Forum</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));
