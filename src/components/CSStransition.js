import React, { Component } from 'react';
import '../css/App.css';
import { CSSTransition } from 'react-transition-group';

class Fade extends Component{

    state = {
        show: true,
    }

    showDiv = () => {
        this.setState( { show: !this.state.show});
    }

    render(){

        
        return(
            <>
                <CSSTransition
                in={this.state.show}
                timeout={5000}
                classNames="square">
                    <div 
                        className={`square ${this.state.show}`}>
                        Hello
                    </div>
                </CSSTransition>

                <div 
                className="showDiv"
                onClick={this.showDiv}>
                    CSS TRANSITIONS
                </div>
            </>
        )
    }
}


export default Fade;