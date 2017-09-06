import React from 'react';
import {Row, Col} from 'react-materialize';
import AskQuestion from './baby-containers/AskQuestion';
import DisplayQuestions from './baby-containers/DisplayQuestions';
import Statistics from './baby-containers/Statistics';

export default class Display extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [],
            currQuestion: '',
            totalQuestions: '',
            totalAnswers: '',
            course: this.props.data, 
            user: ''
        }
    }
    render(){
        console.log(this.state.course)
        return (
            <div id="display-container">
                <div id="display-heading">
                    Post an entirely new question, or browse through the list of other questions to find one that answers a similar question like you have.
                </div>
                <Row> 
                    <Col s={12} m={8} l={8} >
                       <AskQuestion />
                       {/* <DisplayQuestions />*/} 
                    </Col>
                    <Col s={0} m={4} m={4}>
                        Forum Statistics
                        {/*<Statistics />*/}
                    </Col>
                </Row>
            </div>
                    );
    }
}