import React,{useEffect,useState,useCallback} from 'react';
import {Fade} from 'react-awesome-reveal';

import './timeCounter.css';

const TimeCounter = () => {

    const [time,setTime] = useState({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    });

    const mapCounter = (item,value) => {
        return(
            <div className='counterItem' data-counter={value} key={value}>
                <div className='num'>{item}</div>
                <div className='txt'>{value}</div>
            </div>
        );
    }

    const getTimeUntil = useCallback((deadLine) => {
        const time = Date.parse(deadLine) - Date.parse(new Date());
        if (time < 0){
            console.log('Date Passed')
        }else{
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor((time/(1000*60*60*24)));

            setTime({
                days,
                hours,
                minutes,
                seconds
            });
        }
    },[])
    


    useEffect(() => {
        setInterval(() => getTimeUntil('Dec, 20, 2022, 01:00:00'),1000)
    },[getTimeUntil]);


    return(
        <Fade triggerOnce delay={1000}>
        <div className='timeCounter'>
            <div className='wrapperConter'>
                {mapCounter(time.days,'Days')}
                {mapCounter(time.hours,'Hours')}
                {mapCounter(time.minutes,'Minutes')}
                {mapCounter(time.seconds,'Seconds')}
            </div>
        </div>
        </Fade>
    );
}

export default TimeCounter;

