import React from 'react';

import './timeCounter.css';

const timeCounter = () => {

    const counetItem = [
        {'name':'days','num':'2','txt':'Days'},
        {'name':'hours','num':'22','txt':'Hours'},
        {'name':'minutes','num':'12','txt':'Minutes'},
        {'name':'seconds','num':'10','txt':'Seconds'}
    ];

    const mapCounter = (item) => {
        return(
            <div className='counterItem' data-counter={item.name} key={item.name}>
                <div className='num'>{item.num}</div>
                <div className='txt'>{item.txt}</div>
            </div>
        );
    }


    return(
        <div className='timeCounter'>
            <div className='wrapperConter'>
                {counetItem.map((item)=>mapCounter(item))}
            </div>
        </div>
    );
}

export default timeCounter;

