import React from 'react';
import Proptypes from 'prop-types';
import moment from 'moment';


import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import './style.css';

const Calendar = ({dateObject, allmonths}) => {
    moment.locale('fr');
    
    // nom des jours de la semaine
    const weekDayName = (
       moment.weekdays());

    // premier jour du mois
    const firstDayOfMonth = () => (
        moment(dateObject).startOf('month').format('d')
    );

    // zone de vide pour le début du mois
    const blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(<td  className="calendar-day empty" >{""}</td>);
    };
    
    // jour actuel
    const currentDay = () => (dateObject.format('D'));
    // nombre de jours dans le mois actuel
    const daysInMonth = [];
    for(let day = 1; day <= dateObject.daysInMonth(); day++){
        let today = day == currentDay() ? "today" : ""
        daysInMonth.push(
        <td key={day} className={`calendar-day ${today}`}>{day}</td>,
        );
    };
    
    // structure du calendrier (semaine)
    const totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
        if(i %7 !== 0) {
        cells.push(row);
        } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
        }
        if ( i === totalSlots.length -1) {
        rows.push(cells);
        }
    });
    
    const allDaysInMonth = rows.map((day) => (
        <tr>{day}</tr> // possible probleme de key
    ));
    
    // mois ----------------------------------------------
    const month = () => (dateObject.format("MMMM"));
    
    // table des 12 mois
    const monthList = () => {
        let monthsList = [];
        allmonths.map(data => {
        monthsList.push(
            <td key={data}
            className="calendar-month"
            >
            <span>{data}</span>
            </td>
        );
        });
        
        let rows = [];
        let cells = [];
    
        monthsList.forEach((row, i) => {
        if(i %3 !== 0 || i == 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells= [];
            cells.push(row);
        }
        });
        rows.push(cells);
        let list = rows.map((month) => (<tr>{month}</tr>));
    
        return (
        <table className="calendar-month" >
            <thead>
                <tr>
                <th colSpan="4">Choisir un mois</th>
                </tr>
            </thead>
            <tbody>{list}</tbody>
            </table>
        );
    };
    
    // changer le mois
    
    // année ----------------------------------------------
    const year = () => (dateObject.format("Y"));
    
    // plage d'années
    const getDates = (startDate, stopDate) => {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
        dateArray.push(moment(currentDate).format("YYYY"));
        currentDate = moment(currentDate).add(1, "year");
        }
        return dateArray;
    };
    
    // table des 9 prochaines années
    const yearTable = (currentYear) => {
        let months = [];
        let nextten = moment()
        .set("year", currentYear)
        .add("year", 8)
        .format("Y");
    
        let tenyear = getDates(currentYear, nextten);
    
        tenyear.map(data => {
        months.push(
            <td
            key={data}
            className="calendar-month"
            >
            <span>{data}</span>
            </td>
        );
        });
        let rows = [];
        let cells = [];
    
        months.forEach((row, i) => {
        if (i % 3 !== 0 || i == 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        });
        rows.push(cells);
        let yearlist = rows.map((d) => {
        return <tr>{d}</tr>;
        });
    
        return (
        <table className="calendar-month">
            <thead>
            <tr>
                <th colSpan="4">Choisir une année</th>
            </tr>
            </thead>
            <tbody>{yearlist}</tbody>
        </table>
        );
    };
    
    return(
    <div className="tail-datetime-calendar" >
        <div className="calendar-navi" >
            <span className="calendar-button button-prev" ><IoIosArrowBack/></span>
            <span className="calendar-label" > {month()} </span>
            <span className="calendar-label"> {year()} </span>
            <span className="calendar-button button-next" ><IoIosArrowForward/></span>
        </div>
        <div className="calendar-date ">
            {monthList()}
            {yearTable(year())}
        </div>
        <div className="calendar-date" >
            <table className="calendar-day" >
                <thead>
                    <tr>  
                        {
                            weekDayName.map(day =>(
                                <th key={day} className="week-day" > {day} </th>
                            ))                        
                        }         
                    </tr>
                </thead>
                <tbody>
                    {allDaysInMonth}
                </tbody>
            </table>
        </div>
    </div>
)};

Calendar.propTypes = {
    dateObject: Proptypes.object.isRequired,
    allmonths: Proptypes.array.isRequired,
};


export default Calendar;