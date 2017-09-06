import React, {Component} from 'react';
import {Button,Input} from 'react-materialize';

export default class AskQuestion extends Component{
    handleSubmit(){
        
    }
    render(){
        return(
            <div id="ask-question">
                <Input icon="help" type="text" id="question" label="Question" />
                <Input icon="comment" id="question-description" label="Description" />
                <Button large className='red' waves='light' icon='check_circle' id="s_submit" onClick={this.handleSubmit.bind(this)}>Ask</Button>
            </div>
        )
    }
}