import React from 'react'
import ReactDOM from 'react-dom'

export default class Home extends React.Component{
    
    render(){
        console.log('child render',  'and props is ',this.props.name)
        return(<div className="main-components">
                <div id="home-introduction">
                    <div className="heading">Welcome to the forums, {this.props.name}</div>
                    <div id="home-description">
                        Quesa, A CodeMode's community that will hep you learn, share knowledge and build a succesful career.<br />
                        If you have any questions, browse forums, and ask a question related to specific topic.<br/>
                        If you want to prepare for interview, you could hover over to Viva Section.
                        Need an imediate help? You could go to our live chat portal.
                    </div>
                </div>
            </div>);
    }
}