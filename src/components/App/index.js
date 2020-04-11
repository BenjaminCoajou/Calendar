// == Import npm
import React from 'react';
import moment from 'moment';
// == Import
import Calendar from '../Calendar';
import './styles.css';

// == Composant


moment.locale('fr');

const state = {
  dateObject: moment(),
  allmonths: moment.months(),
};

// nom des jours de la semaine
const weekDayName = (
  moment.weekdays());

// premier jour du mois
const firstDayOfMonth = () => (
  moment(state.dateObject).startOf('month').format('d')
);
// zone de vide pour le début du mois
const blanks = [];
for (let i = 0; i < firstDayOfMonth(); i++) {
  blanks.push(<td>{""}</td>);
};

// jour actuel
const currentDay = () => (state.dateObject.format('D'));
// nombre de jours dans le mois actuel
const daysInMonth = [];
for(let day = 1; day <= state.dateObject.daysInMonth(); day++){
  let today = day == currentDay() ? "today" : ""
  daysInMonth.push(
  <td key={day} className={today}>{day}</td>
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
const month = () => (state.dateObject.format("MMMM"));

const monthList = () => {
  let monthsList = [];
  state.allmonths.map(data => {
    monthsList.push(
      <td key={data}>
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
    <table>
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
const year = () => (state.dateObject.format("Y"));


const App = () => (
  <div className="app">
    {console.log(monthList())}
    <Calendar allDays={allDaysInMonth} days={weekDayName} month={month} year={year} monthList={monthList} />
    <div className="calendar-date">
   
</div>
  </div>

);

// == Export
export default App;
