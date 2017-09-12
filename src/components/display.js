import React from 'react';
import {Row, Col} from 'react-materialize';
import AskQuestion from './baby-containers/AskQuestion';
import DisplayQuestions from './baby-containers/DisplayQuestions';
import Statistics from './baby-containers/Statistics';
import superagent from 'superagent';
import { Message } from 'semantic-ui-react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import { Statistic, Header, Icon } from 'semantic-ui-react'

export default class Display extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [],
            currQuestion: '',
            totalQuestions: 0,
            totalAnswers: 0,
            course: this.props.data, 
            user: '',
            currDescription: '',
            sort: 'latest',
            loading: true
        }
    }
    componentWillMount(){
    }
    componentDidMount(){
        
        var StateObject = Object.assign({}, this.state);
        let totalQuestions = 0;
        var totalAnswers = 0;
        superagent
        .get('/confirm_login/quesa/data')
        .query()
        .set("Accept", "application/json")
        .end((err,response)=>{
            if(err){
                createToast("Error fetching data from the server. Please check your internet connection and try again.")
            }else{
                var name = response.body.result.fname + " " + response.body.result.lname;
                StateObject.user = name;
                this.setState(StateObject);
            }
        });
        superagent
            .get("/main/forum/questions/getdata/question")
            .query({course: this.state.course})
            .set("Accept", "application/json")
            .end((err,response)=>{
                if(err){
                    createToast("Server error occured. Please check your internet connection and try again.")
                }else{
                    StateObject.totalQuestions = response.body.result.length;
                    StateObject.questions = response.body.result;
                    
                    for(var index = 0; index < response.body.result.length; index++){
                        totalAnswers+=response.body.result[index].answers.length
                    }
                    StateObject.totalAnswers = totalAnswers;
                    StateObject.loading = false;
                    this.setState(StateObject);
                    
                }
            })
    }
    
    handleSubmit(){
        if(this.state.currQuestion.length < 20){
            createToast('Question should be atleast 20 characters long!');
        }else if(this.state.currDescription.length < 10){
            createToast('Please enter a descriptive description.')
        }else if(this.state.currQuestion.length > 74){
            createToast("Question should be kept less than 75 characters. Enter excess in the description")
        }else{
            superagent
                .post('questions/submitdata/question')
                .send({
                    ques: this.state.currQuestion+"?",
                    course: this.state.course,
                    user: this.state.user,
                    description: this.state.currDescription
                })
                .set("Accept", "application/json")
                .end((err, response)=>{
                    if(err){
                        createToast("Error submiting question. Please check your internet connection and try again!");
                    }else{
                        createToast("Question Submitted");
                        var StateObject = Object.assign({},this.state);
                       StateObject.questions.unshift({ answers: [],user: this.state.user,question: {ques: this.state.currQuestion,  description: this.state.currDescription, askTime: new Date().toISOString()}});
                        StateObject.currDescription = "";
                        StateObject.currQuestion = "";
                        StateObject.totalQuestions++;
                        this.setState(StateObject);
                        document.getElementById('currQuestion').value = ""
                        document.getElementById('currDescription').value = ""
                    }
                })
        }
    }
    
    handleChange(event){
        let StateObject = Object.assign({}, this.state);
        StateObject[event.target.id] = event.target.value;
        this.setState(StateObject)
    }
    render(){
        var LatestQuestion = this.state.questions.sort((a,b)=>{
                return new Date(b.question.askTime) > new Date(a.question.askTime)  
        })
        console.log("LAtest questions are ", LatestQuestion);
        return (
            <div id="display-container">
            <Message
                onDismiss={this.handleDismiss}
                header={'Welcome back, '+this.state.user+'!'}
                content='Post an entirely new question, or browse through the list of other questions to find one that answers a similar question like you have.'
            />
            <AskQuestion handleSubmit={this.handleSubmit.bind(this)}  callback={this.handleChange.bind(this)} />
            
            {this.state.loading?
                <Segment>
                <Dimmer active inverted>
                  <Loader size='large'>Loading Questions</Loader>
                </Dimmer>
          
                <Image src='../images/paragraph.png' />
              </Segment>:
                <Row> 
                    <Col s={12} m={8} l={8} >
                    <DisplayQuestions answers={this.state.totalAnswers} questions={LatestQuestion} sort={this.state.sort} />
                        
                       
                    </Col>
                    <Col s={0} m={4} m={4}>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='users' circular />
                        <Header.Content>
                        Forum Statistics
                        <br/>
                        </Header.Content>
                    </Header>
                    <div>
                        <Statistic.Group>
                        <Statistic color='green' value={this.state.totalQuestions} label='Total Questions' />
                        <Statistic color='orange' value={this.state.totalAnswers} label='Total Answers' />
                      </Statistic.Group>
                      </div>
                    </Col>
                </Row>}
            </div>
                    );
    }
}