import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Button, Icon, Modal,Tabs,Tab, Row, Input} from 'react-materialize'
import superagent from 'superagent';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;


class Login extends React.Component{
    render(){
        return(
            <div id="main">
            <h3 style={{fontFamily: 'Berkshire Swash',textAlign: 'center', color: 'white'}}>Quesa - CodeMode</h3>
                <Tabs className='tab-demo z-depth-1'>
                    <Tab id="login" title="Login" style={{width: '50%'}}><Signin/></Tab>
                    <Tab id="signup" title="SignUp" active><Signup/></Tab>
                </Tabs>
            </div>
        );
    }
}

class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            l_user: '',
            l_pass: ''
        }
    }
    handleChange(event){
        let StateObj = Object.assign({}, this.state);
        StateObj[event.target.id] = event.target.value;
        this.setState(StateObj);    
    }
    handleSubmit(){
        var StateObject = Object.assign({}, this.state);
        if(StateObject.l_user.length <= 7){
            createToast("Username should be 8 characters long, please check the username and type again.")
        }else if(StateObject.l_pass.length <= 7){
            createToast("Password should be 8 characters long, please check the password and type again.")
        }else{
            showLoadingIcon();   
            superagent
                .get('/confirm_login/quesa/')
                .query({username: StateObject.l_user})
                .set("Accept", 'application/json')
                .end((error, response) => {
                    if(error){
                        createToast('Server Error occured, please try again later.<br> Sorry for the inconvinience.');
                        hideLoadingIcon();
                    }else{
                        if(response.body.result != null){
                            if(response.body.result.username == StateObject.l_user && response.body.result.password == StateObject.l_pass){
                                createToast("Logged in succesfully");
                                hideLoadingIcon();
                                superagent
                                    .post('/success')
                                    .send({username: StateObject.l_user})
                                    .set("Accept", "application/json")
                                    .end((err,repsonse)=>{
                                        if(err){
                                            createToast('Server Error occured. Please try again after a few seconds.');
                                        }else{
                                            window.location.href = '/main'
                                        }
                                    })
                            }else{
                                createToast("Sorry, check your password and try again");
                                hideLoadingIcon()
                            }
                            hideLoadingIcon();
                        }else{
                            createToast("Username not found, please sign up if you don't have an account.<br>Or check your username and try again.");
                            hideLoadingIcon();
                        }
                    }
                });
        }
    }
    render(){
        return(<Row>
                <Input value={this.state.l_user} icon='account_circle' id="l_user" s={12} label="Username" onChange={this.handleChange.bind(this)} />            
                <Input value={this.state.l_pass} icon="vpn_key" id="l_pass" type="password" label="Password" s={12} onChange={this.handleChange.bind(this)} />
                <Button floating large className='red' waves='light' icon='check_circle' id="l_submit" onClick={this.handleSubmit.bind(this)} />
                <img id="l_loading" src="./images/loading.gif" height='55px' width='55px' />
            </Row>)
    }
}
class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            s_fname: '',
            s_lname: '',
            s_email: '',
            s_user: '',
            s_pass: '',
            s_course: 'android',
            s_phone: ''
        }
    }
    componentDidMount(){
        console.log("mounted")
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
          });
    }
    handleChange(event){
        let StateObj = Object.assign({}, this.state);
        StateObj[event.target.id] = event.target.value;
        this.setState(StateObj);    
    }
    handleSubmit(){
        var StateObject = Object.assign({}, this.state);
        if(StateObject.s_course.length <= 0 ||  StateObject.s_email.length <= 0
        || StateObject.s_fname.length <= 0 || StateObject.s_phone.length <=0 || StateObject.s_lname.length <= 0 || StateObject.s_pass.length<=0 || StateObject.s_user.length <= 0){
            createToast("Fill in all the fields please.")
        }else if(StateObject.s_fname.length <=2){
            createToast("Your First Name should be atleast 3 characters long.")            
        }else if(StateObject.s_lname.length <= 3){
            createToast("Your Last Name should be atleast 3 characters long.")
        }else if((!StateObject.s_email.endsWith('.com') && !StateObject.s_email.endsWith('.in')) || StateObject.s_email.indexOf('@') <= 3){
            createToast("Please enter a valid E-Mail address");
        }else if(StateObject.s_pass.length <=7){
            createToast("Password should be atleast 8 characters long.")
        }else if(StateObject.s_user.length <=7){
            createToast("Username should be atleast 8 characters long.")
        }else if(StateObject.s_phone.length != 10){
            createToast("Phone Number should be 10 digits long");
        }else{
            showLoadingIcon();            
            superagent
                .get('/confirm_login/quesa/')
                .query({username: StateObject.s_user})
                .set("Accept", 'application/json')
                .end((error, response) => {
                    if(error){
                        createToast('Server Error occured, please try again later.<br> Sorry for the inconvinience.');
                        hideLoadingIcon()
                    }else{
                        console.log('resonse is ',response.body.result);
                        if(response.body.result != null){
                            createToast("Username already Taken. Please try another username");
                            hideLoadingIcon();
                        }else{
                            showLoadingIcon();
                            superagent
                                .post('/confirm_login/quesa')
                                .send({
                                    phone: StateObject.s_phone.trim(),
                                    joined: new Date().toISOString(),
                                    course: StateObject.s_course,
                                    username: StateObject.s_user.trim(),
                                    password: StateObject.s_pass.trim(),
                                    lname: StateObject.s_lname.trim().charAt(0).toUpperCase() + StateObject.s_lname.trim().split('').splice(1).join(''),
                                    fname: StateObject.s_fname.trim().charAt(0).toUpperCase() + StateObject.s_fname.trim().split('').splice(1).join(''),
                                    email: StateObject.s_email.trim()
                                })
                                .set("Accept", "application/json")
                                .end((error, response)=>{
                                    if(error){
                                        createToast("Server error, please try again later.<br> Sorry for the inconvinience.")
                                        hideLoadingIcon()
                                    }else{
                                        createToast("Congratulations! Your account has been created.<br>You can login now.")
                                        hideLoadingIcon();
                                        this.setState({
                                            s_fname: '',
                                            s_lname: '',
                                            s_email: '',
                                            s_user: '',
                                            s_pass: '',
                                            s_course: 'Full Stack',
                                            s_phone: ''
                                        })
                                    }
                                })
                        }
                    }
                })
        }
    }
    render(){
                return(<Row>
                        <Input value={this.state.s_fname} icon="face" id="s_fname" s={12} label="First Name" onChange={this.handleChange.bind(this)} />
                        <Input value={this.state.s_lname} icon="border_color" id="s_lname" s={12} label="Last Name" onChange={this.handleChange.bind(this)} />
                        <Input value={this.state.s_email} icon="contact_mail" id="s_email" type="email" label="E-Mail" s={12} onChange={this.handleChange.bind(this)} />            
                        <Input value={this.state.s_user} icon='account_circle' id="s_user" s={12} label="Username" onChange={this.handleChange.bind(this)} />            
                        <Input value={this.state.s_pass} icon="vpn_key" id="s_pass" type="password" label="Password" s={12} onChange={this.handleChange.bind(this)} />
                        <Input value={this.state.s_phone} icon="favorite" id="s_phone" type="number"  label="Phone Number" s={12} onChange={this.handleChange.bind(this)} />                                                
                        <Input value={this.state.s_course} s={12} type='select' label="Choose Course" onChange={this.handleChange.bind(this)} id="s_course" style={{color: 'white'}}>
                            <option className="circle" style={{color: 'white'}} value='fullstack'>Full Stack Web Development</option>
                            <option style={{textAlign:'center !important'}} value='android'>Android Development</option>
                            <option style={{color: 'white'}} value='html'>Web Design</option>
                            <option style={{color: 'white'}} value='foundation'>Software Foundation</option>
                            <option style={{color: 'white'}} value='javaadvance'>Advance Java</option>
                        </Input>                      
                        <Input s={6} name='group1' type='radio' value='male' label='Male' checked/>
                        <Input s={6} name='group1' type='radio' value='female' label='Female' />
                        <Button floating large className='red' waves='light' icon='check_circle' id="s_submit" onClick={this.handleSubmit.bind(this)} />
                        <img id="s_loading" src="./images/loading.gif" height='55px' width='55px' />
                </Row>)
    }
}


ReactDOM.render(<Login/>,document.getElementById('app'));
