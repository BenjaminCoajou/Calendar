import React from 'react';
import Proprypes from 'prop-types';
import moment from 'moment';

import './style.css';

const Years = ({  handleSelectYear }) => {

    const year = () => (moment().format("Y"));
    
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
            className="calendar-year"
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
        <table className="calendar-years">
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
        <div>{yearTable(year())}</div>
    )};

Years.propTypes = {
    handleSelectYear: Proprypes.func.isRequired,
};

export default Years;