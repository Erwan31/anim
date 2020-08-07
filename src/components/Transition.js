import React, { Component } from 'react';
import '../css/App.css';
import { Transition } from 'react-transition-group';

class TransitionComp extends Component{

    state = {
        show: true,
    }

    showDiv = () => {
        this.setState( { show: !this.state.show});
    }

    render(){
        return(
            <>
                <Transition
                    in={this.state.show}
                    timeout={500}   
                    enter={false} 
                    exit={false}
                    onEntered = { (node) => {
                        console.log('ENTERED');
                    }}
                    onExited = { (node) => {
                        console.log('EXIT');
                    }}
                >
                    { state => (
                        <div className={`square square-${state}`}>
                            {state}
                        </div>)}
                </Transition>

                <div 
                    className="showDiv"
                    onClick={this.showDiv}
                >
                    Show/Hide
                </div>
            </>

        )
    }
}


export default TransitionComp;