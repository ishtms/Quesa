import React, {Component} from 'react';
import {Button,Input, Row, Col} from 'react-materialize';

export default class AskQuestion extends Component{
    handleSubmit(){

    }
    render(){
        return(
            <div id="ask-question">
                <Row>
                <Input s={8} icon="help" type="text" id="currQuestion" label="Question" onChange={this.props.callback.bind(this)} /><br />
                </Row>
                <Row>
                    <Col s={9} m={9} l={9}>
                        <Input s={11} m={9} l={9} icon="comment" id="currDescription" label="Description" onChange={this.props.callback.bind(this)} />
                    </Col>
                    <Col s={3} m={3} l={3}>
                        <Button  large className='red' waves='light' icon='check_circle' id="s_submit" onClick={this.props.handleSubmit.bind(this)}>Ask</Button>
                    </Col>
                </Row>
                <hr />
            </div>
        )
    }
}