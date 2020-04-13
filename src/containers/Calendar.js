import { connect } from 'react-redux';
import Calendar from '../components/Calendar';

import { displayMonth, displayYear, selectYear} from '../actions/calendar';



const mapStateToProps = ({calendar}) => ({    
    dateObject: calendar.dateObject,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);