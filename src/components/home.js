import React, { Component } from 'react';
import Profile from './profile';

class HomeComp extends Component {
    state = { 
        name: 'Francis',
        lastname: 'Jones',
        age: '26'
     }
    render() { 
        return ( 
            <>
                <Profile {...this.state}/>
            </>
         );
    }
}
 
export default HomeComp;