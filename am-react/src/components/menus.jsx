import React, { Component } from 'react';

class Menus extends Component {
    state = { 
        
     } 
    render() { 
        return (
            <div className="container" id='menus'>
                <div className='text-center'>
                    <button className='btn btn-primary btn-lg bg-dark' style={{ margin: '5em', width: 125, height: 60, fontFamily: 'Tinos'}}>נשנוש</button>
                    <button className='btn btn-primary btn-lg bg-dark' style={{ margin: '5em', width: 125, height: 60, fontFamily: 'Tinos'}}>שתיה</button>
                    <button className='btn btn-primary btn-lg bg-dark' style={{ margin: '5em', width: 125, height: 60, fontFamily: 'Tinos'}}>ביגוד</button>
                </div>
            </div>
        );
    }
}
 
export default Menus;
