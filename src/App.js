import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent'
class App extends React.Component{
    handleLogout(){
        superagent
            .post('/success')
            .send({logout: 'yes'})
            .set("Accept", 'application/json')
            .end((err,response)=>{
                if(err){
                    createToast('Server Error occured. Please try again after a few seconds.');
                }else{
                    window.location.href = 'http://localhost:3000/'
                }
            })
    }
    render(){
        return (
            <div onClick={this.handleLogout.bind(this)}>Hello from Main</div>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));
