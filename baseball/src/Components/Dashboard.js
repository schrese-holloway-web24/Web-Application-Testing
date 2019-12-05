import React, {useState} from 'react';
import Display from './Display';
import {strikeCount} from '../utils/strike/strikeCount';
import {ballCount} from '../utils/balls/ballCount';
import {reset} from '../utils/fouls/reset';

const Dashboard = () => {
    const [strike, setStrikes] = useState(0);
    const [ball, setBalls] = useState(0);

    const foulCount = () => {
        if(strike < 2) {
            setStrikes(foul => ++foul)
        }
    }

    return( 
        <div>
            <Display strike= {strike} ball = {ball}/> 
            <h2>Here's the buttons</h2>
            <button onClick = {() => {setStrikes(strikeCount(strike))}}>Strike</button>
            <button onClick = {() => {setBalls(ballCount(ball))}} >Ball</button>
            <button onClick = {foulCount}>Foul</button>
            <button onClick = {() => (setStrikes(reset(strike)), setBalls(reset(ball)))}>Reset</button>
        </div>

    )
    }

export default Dashboard;