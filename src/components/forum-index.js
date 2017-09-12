import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';
import SideNavigation from '../components/sidenavigation';
import {Link} from 'react-router-dom';
import {Row, Col, Card} from 'react-materialize';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

export default class ForumIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            android: {},
            fullstack: {},
            webdesign: {},
            foundation:{},
            advancejava: {},
            androidlength: "",
            fullstacklength: "",
            webdesignlength: "",
            foundationlength: "",
            advancejavalength: ""
        }
    }
    componentWillMount(){
        var StateObj = Object.assign({},this.state);
        superagent
            .get("/main/forum/questions/getdata/question")
            .query({course: 'android'})
            .set("Accept", "application/json")
            .end((err,response)=>{
                if(err){
                    createToast("Something is wrong with your internet connection. Please check your connection and try again.");
                }else{
                    StateObj.android = response.body.result[response.body.result.length - 1];
                    StateObj.androidlength = response.body.result.length;
                    this.setState(StateObj);
                }
            });
            superagent
            .get("/main/forum/questions/getdata/question")
            .query({course: 'foundation'})
            .set("Accept", "application/json")
            .end((err,response)=>{
                if(err){
                    createToast("Something is wrong with your internet connection. Please check your connection and try again.");
                }else{
                    StateObj.foundation = response.body.result[response.body.result.length - 1];
                    StateObj.foundationlength = response.body.result.length;
                    this.setState(StateObj);
                }
            });
            superagent
            .get("/main/forum/questions/getdata/question")
            .query({course: 'html'})
            .set("Accept", "application/json")
            .end((err,response)=>{
                if(err){
                    createToast("Something is wrong with your internet connection. Please check your connection and try again.");
                }else{
                    StateObj.webdesign = response.body.result[response.body.result.length - 1];
                    StateObj.webdesignlength = response.body.result.length;
                    this.setState(StateObj);
                }
            });
            superagent
            .get("/main/forum/questions/getdata/question")
            .query({course: 'fullstack'})
            .set("Accept", "application/json")
            .end((err,response)=>{
                if(err){
                    createToast("Something is wrong with your internet connection. Please check your connection and try again.");
                }else{
                    StateObj.fullstack = response.body.result[response.body.result.length - 1];
                    StateObj.fullstacklength = response.body.result.length;
                    this.setState(StateObj);
                }
            });
            superagent
            .get("/main/forum/questions/getdata/question")
            .query({course: 'adv java'})
            .set("Accept", "application/json")
            .end((err,response)=>{
                if(err){
                    createToast("Something is wrong with your internet connection. Please check your connection and try again.");
                }else{
                    StateObj.advancejava = response.body.result[response.body.result.length - 1];
                    StateObj.advancejavalength = response.body.result.length;
                    this.setState(StateObj);
                }
            });
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
        console.log("ndex state is", this.state)
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
                            <Card key={0} className='green-color darken-1' textClassName='white-text' title='Full Stack Developement' actions={[<span style={{fontFamily:"Lato", color: 'white'}}>Total Posts : {this.state.fullstacklength}</span>]}>
                            {this.state.fullstack.user == null?<Segment>
                                <Dimmer active inverted>
                                  <Loader inverted>Fetching Data</Loader>
                                </Dimmer>
                          
                                <Image src='../images/para.png' />
                              </Segment>:("Last Post By - "+this.state.fullstack.user+" on "+ new Date(this.state.fullstack.question.askTime).toDateString().split("").splice(4,11).join("")+" at "+new Date(this.state.fullstack.question.askTime).toTimeString().split("").splice(0,5).join(""))
                            }
                            </Card>
                        </Col></Link>
                        <Link to="/main/forum/android"><Col l={4} m={4} s={4}>
                        <Card key={0} className='green-color darken-1' textClassName='white-text' title='Android Developement' actions={[<span style={{fontFamily:"Lato", color: 'white'}}>Total Posts : {this.state.androidlength}</span>]}>
                        {this.state.android.user == null?<Segment>
                            <Dimmer active inverted>
                              <Loader inverted>Fetching Data</Loader>
                            </Dimmer>
                      
                            <Image src='../images/para.png' />
                          </Segment>:
                          "Last Post By - "+ this.state.android.user+" on "+  new Date(this.state.android.question.askTime).toDateString().split("").splice(4,11).join("")+" at "+new Date(this.state.android.question.askTime).toTimeString().split("").splice(0,5).join("")
                            }             
                        </Card>
                    </Col></Link>
                    <Link to="/main/forum/html"><Col l={4} m={4} s={4}>
                    <Card key={0} className='green-color darken-1' textClassName='white-text' title='Web Design' actions={[<span style={{fontFamily:"Lato", color: 'white'}}>Total Posts : {this.state.webdesignlength}</span>]}>
                    {this.state.webdesign.user == null?<Segment>
                        <Dimmer active inverted>
                          <Loader inverted>Fetching Data</Loader>
                        </Dimmer>
                  
                        <Image src='../images/para.png' />
                      </Segment>:
                    "Last Post By - " + this.state.webdesign.user + " on "+new Date(this.state.webdesign.question.askTime).toDateString().split("").splice(4,11).join("")+" at "+new Date(this.state.webdesign.question.askTime).toTimeString().split("").splice(0,5).join("")
                    }
                    </Card>
                </Col></Link>
                    </Row>
                    <Row id="second-index-row">
                        <Col l={2} m={2} s={2} />
                        <Link to="/main/forum/foundation"><Col l={4} m={4} s={4}>
                        <Card key={0} className='green-color darken-1' textClassName='white-text' title='Software Foundaiton' actions={[<span style={{fontFamily:"Lato", color: 'white'}}>Total Posts : {this.state.foundationlength}</span>]}>
                        {this.state.foundation.user == null?<Segment>
                            <Dimmer active inverted>
                              <Loader inverted>Fetching Data</Loader>
                            </Dimmer>
                      
                            <Image src='../images/para.png' />
                          </Segment>:
                        "Last Post By - " + this.state.foundation.user + " on "+new Date(this.state.foundation.question.askTime).toDateString().split("").splice(4,11).join("")+" at "+new Date(this.state.foundation.question.askTime).toTimeString().split("").splice(0,5).join("")
                        }
                        </Card>
                    </Col></Link>
                    <Link to="/main/forum/javaadvance"><Col l={4} m={4} s={4}>
                    <Card key={0} className='green-color darken-1' textClassName='white-text' title='Advance Java' actions={[<span style={{fontFamily:"Lato", color: 'white'}}>Total Posts : {this.state.advancejavalength}</span>]}>
                    {this.state.advancejava.user == null?<Segment>
                        <Dimmer active inverted>
                          <Loader inverted>Fetching Data</Loader>
                        </Dimmer>
                  
                        <Image src='../images/para.png' />
                      </Segment>:
                    "Last Post By - " + this.state.advancejava.user + " on "+new Date(this.state.advancejava.question.askTime).toDateString().split("").splice(4,11).join("")+" at "+new Date(this.state.advancejava.question.askTime).toTimeString().split("").splice(0,5).join("")
                    }
                    </Card>
                </Col></Link>
                        <Col l={2} m={2} s={2} />
                    </Row>
                </div>
            </div>
        </div>)
        
    }
}