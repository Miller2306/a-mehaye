import React, { Component } from 'react';

class Header extends Component {
    state = { } 
    render() { 
        return (
            <header>
                <div className="p-5 text-center bg-light" >
                    <h1 className='text-center' style={{ fontFamily: 'Tinos'}}>אָ-מֶחָיֶה </h1>
                </div>
            </header>
        );
    }
}
 
export default Header;