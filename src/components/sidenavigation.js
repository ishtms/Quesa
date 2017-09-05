import React from 'react';
import ReactDOM from 'react-dom';
import {SideNav, SideNavItem, Button} from 'react-materialize';

export default class SideNavigation extends React.Component{
    render(){
        var fullname = this.props.data.fname + ' ' + this.props.data.lname
        var Email = this.props.data.email;
        var Pic = "../images/"+this.props.data.course+".png";
        return (
            <SideNav id="side-nav"
                    trigger={<Button id="nav-trigger" style={{width: '100%', transform:"scaleY(2)", marginTop:"14px"}}>Open Forum Index</Button>}
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
        )
    }
}