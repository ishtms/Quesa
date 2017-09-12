import React from 'react';
import {SideNav, SideNavItem, Button} from 'react-materialize';
import {Link} from 'react-router-dom';
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
                    <Link to="/main/forum/fullstack"> <SideNavItem href='#!icon' icon='airplay'>FullStack Development</SideNavItem></Link>
                <SideNavItem divider />
                <Link to="/main/forum/android"><SideNavItem href='#!icon' icon='android'>Android Development</SideNavItem></Link>
                <SideNavItem divider />
                <Link to="/main/forum/foundaiton"> <SideNavItem href='#!icon' icon='code'>Software Foundation</SideNavItem></Link>
                <SideNavItem divider />
                <Link to="/main/forum/html"> <SideNavItem href='#!icon' icon='face'>Web-Design</SideNavItem></Link>
                <SideNavItem divider />
                <Link to="/main/forum/javaadvance"><SideNavItem href='#!icon' icon='shopping_cart'>Advance Java</SideNavItem></Link>
            </SideNav>
        )
    }
}