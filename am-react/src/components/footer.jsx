import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="p-2 text-center bg-dark text-white" style={{position: 'relative',bottom: 0, width: '100%'}}>
                <div className="text-center p-3" style={{fontFamily: 'tiho'}}>
                    <span>
                        <p className='p-2'>A-MEHAYE, 6 SPINOZA STREET, TEL AVIV-YAFO, TEL AVIV DISTRICT, ISRAEL</p>
                        <p>03-XXXXXXX AMEHAYE@GMAIL.COM</p>
                    </span>
                </div>
                <span className="text-center" style={{color: 'grey',fontSize: 12}}>Made By Yali Miller</span>
            </footer>
        );
    }
}
 
export default Footer;