import React, { Component } from 'react';

class Contact extends Component {
    state = { 
        phoneNumber: '03-XXXXXXX'
     } 
    render() { 
        return (
            <div className='text-center p-5' style={{backgroundColor: 'rgb(150, 111, 63)'}}>
                <h2>Resrvation</h2>
                <p>Call {this.state.phoneNumber}</p>
            </div>
        );
    }
}
 
export default Contact;