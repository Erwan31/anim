import React, { Component } from 'react';
import '../css/App.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Slide extends Component{
    state = {
        items:['24']
    }
    
    addElements () {
      return this.state.items.map( (item, i)=> (
          <CSSTransition
            classNames="item"
            timeout={500}
            key={i}
            appear={true}
            onEntered={ (node)=>{
                node.classList.add("active");
            }}
            onExited={ (node)=>{
                node.classList.remove("active");
            }}
          >
              <div className="item"  className="item">{item}</div>
          </CSSTransition>
          
      ))
    }

    generateNumber(){
        let newArray = [
            ...this.state.items,
            Math.floor(Math.random()*100)+1
        ]

        this.setState({
            items: newArray
        });
       
    }

    removeNumber(){
        let newArray = this.state.items.slice(0,-1);

        this.setState({
            items: newArray
        });
    }

    render(){
        return(
            <div>
                <div className="btns">
                    <div className="btn-add" onClick={()=> this.generateNumber()}>Add Elements</div>
                    <div className="btn-remove" onClick={()=> this.removeNumber()}>Remove Elements</div>
                </div>
                <TransitionGroup
                    component="div"
                    className="list">
                    {this.addElements()}
                </TransitionGroup>
                
            </div>
        )
    }



}


export default Slide;