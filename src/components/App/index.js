// == Import npm
import React from 'react';
import moment from 'moment';
// == Import
import Calendar from '../Calendar';
import './styles.css';

// == Composant

const table = {
  days:['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
  month: 'Avril',
  dates: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  year: 2020,
}

moment.locale('fr');

const weekDayName = (
  moment.weekdays());

const state = {
  dateObject: moment(),
};

// premier jour du mois
const firstDayOfMonth = () => (
  moment(state.dateObject).startOf('month').format('d')
);
// zone de vide pour le début du mois
const blanks = [];
for (let i = 0; i < firstDayOfMonth(); i++) {
  blanks.push(<td>{""}</td>);
};

const currentDay = () => (state.dateObject.format('D'));
// nombre de jours dans le mois actuel
const daysInMonth = [];
for(let day = 1; day <= state.dateObject.daysInMonth(); day++){
  let today = day == currentDay() ? "today" : ""
  daysInMonth.push(
  <td key={day} className={today}>{day}</td>
  );
};

// 
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
))


const App = () => (
  <div className="app">
    {console.log(rows)}
    <Calendar allDays={allDaysInMonth} days={weekDayName}/>
  </div>
);

// == Export
export default App;
