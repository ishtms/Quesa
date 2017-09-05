import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';
import SideNavigation from '../components/sidenavigation';
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
        var name = this.props.data.fname
        return(<div>
            <div id="index-container">
                <SideNavigation data={this.props.data} />
                <div id="index-introduction">
                    <div className="heading">Start asking questions now, {name}!</div>
                    <div id="index-description">
                        You can ask any question regarding the topic/course you're enrolled in.<br />
                        You can get feedback on a project you're working or built already by posting the link in the specific forum.<br/>
                        The more upvotes your answers get, the more you'll be noticed.<br/>
                        Start asking and helping today!
                    </div>
                </div>
            </div>
        </div>)
        
    }
}