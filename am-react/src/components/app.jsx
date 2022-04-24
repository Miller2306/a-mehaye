import React, { Component } from 'react';
import Header from './header'
import Menus from './menus';
import About from './about'
import Contact from './contact';
import Footer from './footer';

class App extends Component { 
    render() { 
        return (
           <main>
               <Header />
               <Menus />
               <About />
               <Contact />
               <Footer />
           </main> 
        );
    }
}
 
export default App;