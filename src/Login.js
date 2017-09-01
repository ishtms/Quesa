import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Button, Icon, Modal,Tabs,Tab, Row, Input} from 'react-materialize'
import superagent from 'superagent';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

function checkUserNameAvaibility(){
    alert("HI")
}

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
    render(){
        return(<div>login</div>)
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
            s_dob: '',
            s_phone: ''
        }
    }
    handleChange(event){
        let StateObj = Object.assign({}, this.state);
        StateObj[event.target.id] = event.target.value;
        this.setState(StateObj);    
    }
    handleSubmit(){
        var StateObject = Object.assign({}, this.state);
        if(StateObject.s_course.length <= 0 || StateObject.s_dob.length <=0 || StateObject.s_email.length <= 0
        || StateObject.s_fname.length <= 0 || StateObject.s_phone.length <=0 || StateObject.s_lname.length <= 0 || StateObject.s_pass.length<=0 || StateObject.s_user.length <= 0){
            createToast("Fill in all the fields please.")
        }else if(StateObject.s_fname.length <=2){
            createToast("Your First Name should be atleast 3 characters long.")            
        }else if(StateObject.s_lname.length <= 3){
            createToast("Your Last Name should be atleast 3 characters long.")
        }else if((!StateObject.s_email.endsWith('.com') && !StateObject.s_email.endsWith('.in')) || StateObject.s_email.indexOf('@') <= 3){
            createToast("Please enter a valid E-Mail address");
        }else if(StateObject.s_user.length <=7){
            createToast("Username should be atleast 8 characters long.")
        }else if(StateObject.s_dob.length <=0){
            createToast("Please enter a valid birth date!");
        }else if(StateObject.s_phone.length != 10){
            createToast("Phone Number should be 10 digits long");
        }else{
            alert('running')
            superagent
                .get('/confirm_login/quesa/')
                .query({username: StateObject.username})
                .set("Accept", 'application/json')
                .end((error, response) => {
                    if(error){
                        createToast('Server Error occured, please try again later.<br> Sorry for the inconvinience.');
                    }else{
                        if(response.result != null){
                            createToast("Username already Taken. Please try another username");
                        }else{
                            alert('second')
                            superagent
                                .post('/confirm_login/quesa')
                                .body({
                                    phone: StateObject.s_phone,
                                    dob: StateObject.s_dob,
                                    course: StateObject.s_course,
                                    username: StateObject.s_user,
                                    password: StateObject.s_pass,
                                    lname: StateObject.s_lname,
                                    fname: StateObject.s_fname,
                                    email: StateObject.s_email
                                })
                                .set("Accept", "application/json")
                                .end((error, response)=>{
                                    if(error){
                                        createToast("Server error, please try again later.<br> Sorry for the inconvinience.")
                                    }else{
                                        createToast("Congratulations! Your account has been created.<br>You can login now.")
                                        document.getElementById('s_submit').innerHTML = "GO AND LOGIN"
                                    }
                                })
                        }
                    }
                })
        }
    }
    render(){
                return(<Row>
                        <Input icon="face" id="s_fname" s={12} label="First Name" onChange={this.handleChange.bind(this)} />
                        <Input icon="border_color" id="s_lname" s={12} label="Last Name" onChange={this.handleChange.bind(this)} />
                        <Input icon="contact_mail" id="s_email" type="email" label="E-Mail" s={12} onChange={this.handleChange.bind(this)} />            
                        <Input icon='account_circle' id="s_user" s={12} label="Username" onChange={this.handleChange.bind(this)} />            
                        <Input icon="vpn_key" id="s_pass" type="password" label="Password" s={12} onChange={this.handleChange.bind(this)} />
                        <Input icon="favorite" id="s_phone" type="number"  label="Phone Number" s={12} onChange={this.handleChange.bind(this)} />                                                
                        <Input  s={12} type='select' label="Choose Course" defaultValue='2' onChange={this.handleChange.bind(this)} id="s_course" style={{color: 'white'}}>
                            <option className="circle" style={{color: 'white'}} value='fullstack'>Full Stack Web Development</option>
                            <option style={{textAlign:'center !important'}} value='android'>Android Development</option>
                            <option style={{color: 'white'}} value='design'>Web Design</option>
                            <option style={{color: 'white'}} value='foundation'>Software Foundation</option>
                            <option style={{color: 'white'}} value='advance'>Advance Java</option>
                        </Input>                      
                        <Input s={6} name='group1' type='radio' value='male' label='Male' checked/>
                        <Input s={6} name='group1' type='radio' value='female' label='Female' />
                        <Input s={12} id="s_dob" name='on' type='date' onChange={this.handleChange.bind(this)} label="Date of Birth" />            
                        <Button floating large className='red' waves='light' icon='check_circle' id="s_submit" onClick={this.handleSubmit.bind(this)} />
                </Row>)
    }
}


ReactDOM.render(<Login/>,document.getElementById('app'));
