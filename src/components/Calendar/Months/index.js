import React from 'react';
import Proptypes from 'prop-types';

import './style.css';

const Months = ({allmonths, handleSelectMonth}) => {
    
    // table des 12 mois
    const monthList = () => {
        let monthsList = [];
        allmonths.map(data => {
        monthsList.push(
            <td key={data}
            className="calendar-month"            
            onClick={() => {handleSelectMonth(allmonths.indexOf(data))}}>{data}
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
        <table className="calendar-months" >
            <thead>
                <tr>
                <th colSpan="4">Choisir un mois</th>
                </tr>
            </thead>
            <tbody>{list}</tbody>
            </table>
        );
    };    

    return(
    <div className="calendar-date">{monthList()}</div>
    );
};

Months.propTypes = {
    allmonths: Proptypes.array.isRequired,
    handleSelectMonth: Proptypes.func.isRequired,
}

export default Months;