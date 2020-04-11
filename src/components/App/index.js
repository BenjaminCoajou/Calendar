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
  blanks.push(<td  className="calendar-day empty" >{""}</td>);
};

// jour actuel
const currentDay = () => (state.dateObject.format('D'));
// nombre de jours dans le mois actuel
const daysInMonth = [];
for(let day = 1; day <= state.dateObject.daysInMonth(); day++){
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
const month = () => (state.dateObject.format("MMMM"));

// table des 12 mois
const monthList = () => {
  let monthsList = [];
  state.allmonths.map(data => {
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
const year = () => (state.dateObject.format("Y"));

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




const App = () => (
  <div className="app">
    {console.log(allDaysInMonth)}
    <Calendar allDays={allDaysInMonth} days={weekDayName} month={month} year={year} monthList={monthList} yearTable={yearTable}/>
  </div>

);

// == Export
export default App;
