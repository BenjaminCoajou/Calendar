import React from 'react';
import Proptypes from 'prop-types';


import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import './style.css';

const Calendar = ({allDays, days}) => (
    <div>
        <div>
            <span><IoIosArrowBack/></span>
            <span> avril </span>
            <span> 2020 </span>
            <span><IoIosArrowForward/></span>
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