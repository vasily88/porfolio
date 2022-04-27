import React from 'react';
import './resources/style.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';

const App = () => {
    return(
        <div className='App'>

            <Header />
            <div className='main'>
                Main
            </div>
            <Footer />

        </div>
    );
}

export default App;