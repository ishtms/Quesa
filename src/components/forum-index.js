import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';
import {SideNav, SideNavItem,Button} from 'react-materialize';

export default class ForumIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentWillMount(){
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
                    window.location.href = '../'
                }
            })
    }
    render(){
        console.log(this.props.data)
        var fullname = this.props.data.fname + ' ' + this.props.data.lname
        var Email = this.props.data.email;
        var Pic = "../images/"+this.props.data.course+".png";
        return(<div>
            
            <div id="index-container">
            <SideNav id="side-nav"
                trigger={<Button style={{width: '100%', transform:"scaleY(2)", marginTop:"10px"}}>Menu</Button>}
                options={{ closeOnClick: true }}>
                <SideNavItem userView
                    user={{
                        background: '../images/background.jpg',
                        image: Pic,
                        name: fullname,
                        email: Email
                    }}
                />
                <SideNavItem href='#!icon' icon='airplay'>FullStack Development</SideNavItem>
                <SideNavItem divider />
                <SideNavItem href='#!icon' icon='android'>Android Development</SideNavItem>
                <SideNavItem divider />
                <SideNavItem href='#!icon' icon='code'>Software Foundation</SideNavItem>
                <SideNavItem divider />
                <SideNavItem href='#!icon' icon='face'>Web-Design</SideNavItem>
                <SideNavItem divider />
                <SideNavItem href='#!icon' icon='shopping_cart'>Advance Java</SideNavItem>
            
        </SideNav>
            </div>
        </div>)
        
    }
}