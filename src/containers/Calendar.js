import { connect } from 'react-redux';
import Calendar from '../components/Calendar';

import { displayMonth, displayYear, selectMonth, selectYear} from '../actions/calendar';



const mapStateToProps = ({calendar}) => ({    
    dateObject: calendar.dateObject,
    allmonths: calendar.allmonths,
    monthIsDisplayed : calendar.monthIsDisplayed, 
    yearIsDisplayed: calendar.yearIsDisplayed,     
});

const mapDispatchToProps = (dispatch) => ({
    showMonth: () => {
        dispatch(displayMonth())
    },
    showYear: () => {
        dispatch(displayYear())
    },
    handleSelectMonth: (month) => {
        dispatch(selectMonth(month))
    },
    handleSelectYear: (year) => {
        dispatch(selectYear(year))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);