import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';
import SideNavigation from '../components/sidenavigation';
import {Link} from 'react-router-dom';
import {Row, Col, Card} from 'react-materialize';

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
                <br />
                <div id="card-container">
                    <Row>
                        <Link to="/main/forum/fullstack"><Col l={4} m={4} s={4}>
                            <Card className='green-color darken-1' textClassName='white-text' title='Full Stack Developement' actions={[<span style={{fontFamily:"Lato", color: 'white'}}>Total Posts : </span>]}>
                            Last Post By : on :
                            </Card>
                        </Col></Link>
                        <Link to="/main/forum/android"><Col l={4} m={4} s={4}>
                            <Card className='green-color darken-1' textClassName='white-text' title='Android Development' actions={[<span style={{fontFamily:"Lato", color: 'white'}}>Total Posts : </span>]}>
                            Last Post By : on :
                            </Card>
                        </Col></Link>
                        <Link to="/main/forum/design"><Col l={4} m={4} s={4}>
                            <Card className='green-color darken-1' textClassName='white-text' title='Web Design' actions={[<span style={{fontFamily:"Lato", color: 'white'}}>Total Posts : </span>]}>
                            Last Post By : on :
                            </Card>
                        </Col></Link>
                    </Row>
                    <Row id="second-index-row">
                        <Col l={2} m={2} s={2} />
                        <Link to="/main/forum/foundation"><Col l={4} m={4} s={4}>
                            <Card className='green-color darken-1' textClassName='white-text' title='Software Foundation' actions={[<span style={{fontFamily:"Lato", color: 'white'}}>Total Posts : </span>]}>
                            Last Post By : on :
                            </Card>
                        </Col></Link>
                        <Link to="/main/forum/advjava"><Col l={4} m={4} s={4}>
                            <Card className='green-color darken-1' textClassName='white-text' title='Advance Java' actions={[<span style={{fontFamily:"Lato", color: 'white'}}>Total Posts : </span>]}>
                            Last Post By : on :
                            </Card>
                        </Col>
                        </Link>
                        <Col l={2} m={2} s={2} />
                    </Row>
                </div>
            </div>
        </div>)
        
    }
}