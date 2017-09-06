import React from 'react';
import {Col, Card} from 'react-materialize';

export default class DisplayQuestions extends React.Component{

    render(){
        if(this.props.sort == 'latest'){
            this.props.questions.sort((a,b)=>{
                return  b.question.askTime > a.question.askTime
            })
        }
        var latest = this.props.questions.map((curr,i)=>{
            return <Col key={i} m={12} s={12}>
                <Card className='gra-back darken-1' textClassName='black-text' title={curr.question.ques + "  asked by - "+curr.user} actions={[<a href='#' style={{color: 'white'}}>Asked on - 
                {new Date(curr.question.askTime)
                    .toString().split("").splice(0,15).join("") +" "+ 
                    new Date(curr.question.askTime).toLocaleTimeString()}<span style={{float: 'right'}}>{curr.answers.length} answers</span></a>]}>
                    {curr.question.description}
                </Card>
            </Col>
        });
        return (this.props.sort == 'latest')?(<div>{latest}</div>):<h1>nosort</h1>
    }
}