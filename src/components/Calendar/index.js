import React from 'react';
import Proptypes from 'prop-types';


import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import './style.css';

const Calendar = ({allDays, days, month, year, monthList}) => (
    <div className="tail-datetime-calendar" >
        <div className="calendar-navi" >
            <span className="calendar-button button-prev" ><IoIosArrowBack/></span>
            <span className="calendar-label" > {month()} </span>
            <span className="calendar-label"> {year()} </span>
            <span className="calendar-button button-next" ><IoIosArrowForward/></span>
        </div>
        <div className="calendar-date ">
            {monthList()}
        </div>
        <div className="calendar-date" >
            <table className="calendar-day" >
                <thead>
                    <tr>  
                        {
                            days.map(day =>(
                                <th key={day} className="week-day" > {day} </th>
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