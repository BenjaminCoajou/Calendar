import React from 'react';
import Proptypes from 'prop-types';
import moment from 'moment';

import Days from '../../containers/Days'
import './style.css';

const Calendar = ({dateObject, allmonths, monthIsDisplayed,showMonth,yearIsDisplayed, showYear, handleSelectMonth, handleSelectYear}) => {
    moment.locale('fr');
    
    
    
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
            <span onClick={() => {handleSelectMonth(allmonths.indexOf(data))}}>{data}</span>
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
        let nextEight = moment()
        .set("year", currentYear)
        .add("year", 8)
        .format("Y");
    
        let tenyear = getDates(currentYear, nextEight);
    
        tenyear.map(data => {
        months.push(
            <td
            key={data}
            className="calendar-month"
            >
            <span onClick={() => {handleSelectYear(data)}} >{data}</span>
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
        {console.log('test')}
        <div className="calendar-navi" >
            <span className="calendar-label" onClick={showMonth} > {month()} </span>
            <span className="calendar-label" onClick={showYear}> {year()} </span>
        </div>
        <div className="calendar-date ">
            {monthIsDisplayed && monthList()}
            {yearIsDisplayed && yearTable(year())}
        </div>
        <div className="calendar-date" >
            <Days />
        </div>
    </div>
)};

Calendar.propTypes = {
    dateObject: Proptypes.object.isRequired,
    allmonths: Proptypes.array.isRequired,
    monthIsDisplayed: Proptypes.bool.isRequired,
    showMonth: Proptypes.func.isRequired,
    yearIsDisplayed: Proptypes.bool.isRequired,
    showYear: Proptypes.func.isRequired,
    handleSelectMonth: Proptypes.func.isRequired,
    handleSelectYear: Proptypes.func.isRequired,
};


export default Calendar;