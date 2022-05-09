import React from 'react';
import './resources/style.css';

import Header from './components/header/header';
import MyWork from './components/myworks/myworks';
import Footer from './components/footer/footer';

const App = () => {
    return(
        <div className='App'>

            <Header />
            <div className='main'>
                <MyWork />
            </div>
            <Footer />

        </div>
    );
}

export default App;