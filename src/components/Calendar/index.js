import React from 'react';
import Proptypes from 'prop-types';


import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import './style.css';

const Calendar = ({allDays, days, month, year, monthList}) => (
    <div>
        <div>
            <span><IoIosArrowBack/></span>
            <span> {month()} </span>
            <span> {year()} </span>
            <span><IoIosArrowForward/></span>
        </div>
        <div>
            {monthList()}
        </div>
        <div>
            
        </div>
        <div>
            <table>
                <thead>
                    <tr>  
                        {
                            days.map(day =>(
                                <th key={day}> {day} </th>
                            ))                        
                        }         
                    </tr>
                </thead>
                <tbody>
                    {allDays}
                </tbody>
            </table>
        </div>
    </div>
);


export default Calendar;