import React, { Component } from 'react';
import { checkPropTypes } from 'prop-types';



class Profile extends Component {
    state = { 
        name:'',
        lastname:''
     }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleLastNameChange = (event) => {
        this.setState({lastname: event.target.value});
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        return true;
    }


    render() { 
        console.log(this.state);

        return ( 
            <div>
                <form>
                    <div>
                        <label>Enter Name</label>
                        <input 
                            type="text"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        ></input>
                    </div>
                    <br/><br/>
                    <div>
                        <label>Enter Lastname</label>
                        <input 
                            type="text"
                            value={this.state.lastname}
                            onChange={this.handleLastNameChange}
                        ></input>
                    </div>

                </form>
            </div>
         );
    }
}
 
/*
Profile.checkPropTypes = {
    name: PropTypes.string,
    lastname: PropTypes.number,
}
*/

export default Profile;