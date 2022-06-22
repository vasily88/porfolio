import React from 'react';
import { Element } from 'react-scroll';
import './resources/style.css';

import Header from './components/header/header';
import MyWork from './components/myworks/myworks';
import Highlight from './components/highlights';
import Footer from './components/footer/footer';

const App = () => {
    return(
        <div className='App'>

            <Header />
            <div className='main'>
                <MyWork />
                <Highlight />
            </div>
            <Element name="Footer">
                <Footer />
            </Element>

        </div>
    );
}

export default App;