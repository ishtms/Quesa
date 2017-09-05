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
       
        return(<div>
            
            <div id="index-container">
                <SideNavigation data={this.props.data} />
            </div>
        </div>)
        
    }
}