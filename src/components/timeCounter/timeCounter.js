import React,{useEffect} from 'react';

import './timeCounter.css';

const TimeCounter = () => {

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

    const getTimeUntil = (deadLine) => {
        const time = Date.parse(deadLine) - Date.parse(new Date());
        if (time < 0){
            console.log('Date Passed')
        }else{
            console.log('Still Count')
        }
    }

    useEffect(() => {
        setInterval(() => getTimeUntil('Dec, 20, 2023, 01:20:00'),1000)
    },[getTimeUntil]);


    return(
        <div className='timeCounter'>
            <div className='wrapperConter'>
                {counetItem.map((item)=>mapCounter(item))}
            </div>
        </div>
    );
}

export default TimeCounter;

