import React from 'react'
import ReactDOM from 'react-dom'

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div className="main-components">
                <div id="home-introduction">
                    <h3>Welcome to forums, {this.props.name == null ? 'Guest': this.props.name}</h3>
                </div>
            </div>);
    }
}